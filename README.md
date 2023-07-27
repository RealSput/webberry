# WebBerry
A web interface for Raspberry Pis

# What can it do?
It can do multiple things that would normally require more setup, or multiple apps opened at the same time:
- Viewing your monitor
- Using your terminal
- Monitoring the temperature

# Usage
First, install TightVNC on your Raspberry Pi for accessing the screen through the web interface:
```
sudo apt update
sudo apt upgrade
sudo apt install tightvncserver
```

After that, clone this repo & CD into it with these commands:
```
git clone https://github.com/RealSput/webberry
cd webberry
```

And finally, run these commands to set up dependencies, configure & start WebBerry:
```
npm install
npm run-script setup
npm start
```

Congratulations, you have set up WebBerry! You can now visit `raspberrypi.local:8080` to start using the web interface.
