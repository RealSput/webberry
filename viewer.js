const wsify = require('@maximegris/node-websockify');

wsify({ target: "127.0.0.1:5901", source: "127.0.0.1:6969" })

