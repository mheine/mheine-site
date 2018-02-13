#!/bin/bash

read -s -p "Type your SSH password for mheine.se: " SSHPASS
eval "export SSHPASS='""$SSHPASS""'"

echo ""

sshpass -e rsync --recursive --progress beta/ mheine.se@ssh.mheine.se:/www/beta/ | tail -n +2

echo "Transfer successful!"


