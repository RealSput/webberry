const express = require('express');
const fs = require('fs');
const svnc = require('simplevnc');
const pty = require('node-pty');
const http = require('http');

const ws_app = express();
const app = express();
const server = http.createServer(app);

require('express-ws')(ws_app);
app.use(express.static(__dirname));

const readCpuTemperatureSync = () => fs.existsSync('/sys/class/thermal/thermal_zone0/temp') ? parseInt(fs.readFileSync('/sys/class/thermal/thermal_zone0/temp', 'utf8')) / 1000 : null;

ws_app.ws('/temperature', (ws) => {
    let interval = setInterval(() => {
        ws.send(readCpuTemperatureSync().toString()), 250
    });
    ws.on('close', () => clearInterval(interval));
});

ws_app.ws("/sh", (ws) => {
  const term = pty.spawn("bash", [], { name: "xterm-color" });
  term.on("data", (data) => {
    try {
      ws.send(data);
    } catch (err) {}
  });
  ws.on("message", (data) => term.write(data));
  ws.on("close", () => term.kill());
});


ws_app.listen(6969);
server.listen(8080);

console.log('Listening at port 8080 (WebSocket paths: 6969)');

const vnc = new svnc.Server(server);
server.on('connect', () => console.log('CONNECT'))
server.on('disconnect', () => console.log('DISCONNECT'));
server.on('eror', (x) => console.log('ERROR:', x))
