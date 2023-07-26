var svnc = require('simplevnc');

const canvas = document.querySelector('canvas'),
  screen = new svnc.Screen(canvas),
  client = new svnc.Client(screen);

window.client = client;

const config = {
  host: "127.0.0.1",
  port: 5901,
  password: "aaaaaaa"
};

client.connect(config).catch(x => console.error(x));
