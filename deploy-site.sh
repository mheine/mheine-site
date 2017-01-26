#!/bin/bash

read -s -p "Type your SSH password for mheine.se: " SSHPASS
eval "export SSHPASS='""$SSHPASS""'"

echo ""

sshpass -e rsync --recursive --progress css/ mheine.se@ssh.mheine.se:/www/css/ | tail -n +2
sshpass -e rsync --recursive --progress files/ mheine.se@ssh.mheine.se:/www/files/ | tail -n +2
sshpass -e rsync --recursive --progress fonts/ mheine.se@ssh.mheine.se:/www/fonts/ | tail -n +2
sshpass -e rsync --recursive --progress images/ mheine.se@ssh.mheine.se:/www/images/ | tail -n +2
sshpass -e rsync --recursive --progress js/ mheine.se@ssh.mheine.se:/www/js/ | tail -n +2
sshpass -e rsync --recursive --progress index.html mheine.se@ssh.mheine.se:/www/ | tail -n +2

echo "Transfer successful!"


