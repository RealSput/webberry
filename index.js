require('dotenv').config()

const express = require('express');
const fs = require('fs');
const svnc = require('simplevnc');
const pty = require('node-pty');
const http = require('http');

const ws_app = express();
const app = express();
const server = http.createServer(app);

require('express-ws')(ws_app);
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(require('cookie-parser')());

const readCpuTemperatureSync = () => fs.existsSync('/sys/class/thermal/thermal_zone0/temp') ? parseInt(fs.readFileSync('/sys/class/thermal/thermal_zone0/temp', 'utf8')) / 1000 : null;

ws_app.ws('/temperature', (ws) => {
    let interval = setInterval(() => {
        ws.send(readCpuTemperatureSync().toString()), 250
    });
    ws.on('close', () => clearInterval(interval));
});

app.get('/interface.html', (req, res) => {
  console.log('INTERFACE RUN');

  let auth = req.cookies.auth;
  if (process.env.TOKEN == auth) {
    res.sendFile(__dirname + '/interface.html');
  } else {
    res.redirect('/');
  }
})

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

app.post('/auth', (req, res) => {
	const { username, password } = req.body;
	if (process.env.USERNAME == username && process.env.PASSWORD == password) {
		res.cookie('auth', process.env.TOKEN);
		res.json({ success: true })
	} else {
		res.cookie('auth', 'NULL');
		res.json({ success: false });
	}
});

ws_app.listen(6969);
server.listen(8080);

console.log('Listening at port 8080 (WebSocket paths: 6969)');

const vnc = new svnc.Server(server);
server.on('connect', () => console.log('CONNECT'))
server.on('disconnect', () => console.log('DISCONNECT'));
server.on('eror', (x) => console.log('ERROR:', x))
