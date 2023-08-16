# WebBerry
A web interface for Raspberry Pis

# What can it do?
It can do multiple things that would normally require more setup, or multiple apps opened at the same time:
- Viewing your monitor
- Using your terminal
- Monitoring the temperature
- Shutting your Pi off remotely

# Usage
First, install TightVNC on your Raspberry Pi for accessing the screen through the web interface, and Node.js to make the interface work:
```
sudo apt update
sudo apt upgrade
sudo apt install tightvncserver nodejs
```

After that, clone this repo & CD into it with these commands:
```
git clone https://github.com/RealSput/webberry
cd webberry
```

And finally, run these commands to set up dependencies, configure & start WebBerry:
```
npm install
npm run-script config
npm start
```

Congratulations, you have set up WebBerry! You can now visit `raspberrypi.local:8080` to start using the web interface.
