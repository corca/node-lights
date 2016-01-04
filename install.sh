#!/bin/bash
wget https://nodejs.org/dist/v4.2.4/node-v4.2.4-linux-armv6l.tar.gz
tar -xvf node-v4.2.4-linux-armv6l.tar.gz
sudo cp -R node-v4.2.4-linux-armv6l /usr/local/
node -v
git clone git://git.drogon.net/wiringPi
./wiringPi/build
gpio -v
gpio readall
