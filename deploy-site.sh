#!/bin/bash
echo "Tranferring files to mheine.se."
rsync --recursive --progress css/ files/ fonts/ images/ js/ index.html mheine.se@ssh.mheine.se:/www/
echo "Transfer successful!"