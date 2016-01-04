# Node Lights

## Description
Node Lights is a software package specifically for the Raspberry Pi Model B+ for controlling RF outlets via API/browser.

## Installation
### Create Raspbian Image [[reference](https://www.raspberrypi.org/downloads/raspbian/)]
This project uses the [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) image available from the Raspberry Pi Foundation.

Follow the [Installation Guide](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) to install Raspbian on your Raspberry Pi Model B+.

#### Additional Raspbian Options
Change keyboard layout to US:
```
sudo nano /etc/default/keyboard
```
Change: ```XKBLAYOUT="gb"``` to ```XKBLAYOUT="us"``` and run ```sudo reboot```

Add wifi credentials with ```sudo nano /etc/wpa_supplicant/wpa_supplicant.conf``` and include the following block:
```
network={
    ssid="Your_SSID"
    psk="Your_Password"
}
```

### Install Node.js [[reference](http://blog.wia.io/installing-node-js-v4-0-0-on-a-raspberry-pi/)]
Running Node on a Raspberry Pi is easier than ever. This project uses Node.js version 4.2.4, the LTS release as of this writing.

To download Node.js 4.2.4, SSH to your Raspberry Pi and run the following commands.
```
wget https://nodejs.org/dist/v4.2.4/node-v4.2.4-linux-armv6l.tar.gz
tar -xvf node-v4.2.4-linux-armv6l.tar.gz
cd node-v4.2.4-linux-armv6l
```

Copy Node.js to /usr/local.
```
sudo cp -R * /usr/local/
```

Verify Node is installed and available.
```
node -v
```

### Install wiringPi [[reference](http://wiringpi.com/download-and-install/)]
```
git clone git://git.drogon.net/wiringPi
cd wiringPi
./build
gpio -v
gpio readall
```

### Install codesend and RFSniffer
```
git clone git://github.com/timleland/rfoutlet.git /var/www/rfoutlet
sudo chown root.root /var/www/rfoutlet/codesend
sudo chmod 4755 /var/www/rfoutlet/codesend
sudo /var/www/rfoutlet/RFSniffer
```
```
Received 21811
Received pulse 192
```

### Install Node Lights

### Run Node Lights on Boot

### Hardware Configuration
Solder antenna wire

GPIO Pins used

### Configure Lights & scenes

### Customize
