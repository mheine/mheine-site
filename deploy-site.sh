#!/bin/bash

ssh -q mheine.se@ssh.mheine.se exit
STATUS=$?

if [[ "$STATUS" != 0 ]] ; then
	echo "SSH connection refused. Please check the ssh keys."
	exit 0
fi

echo "Starting transfer to mheine.se"

rsync --recursive --progress css/ mheine.se@ssh.mheine.se:/www/css/ | tail -n +2
rsync --recursive --progress files/ mheine.se@ssh.mheine.se:/www/files/ | tail -n +2
rsync --recursive --progress fonts/ mheine.se@ssh.mheine.se:/www/fonts/ | tail -n +2
rsync --recursive --progress images/ mheine.se@ssh.mheine.se:/www/images/ | tail -n +2
rsync --recursive --progress js/ mheine.se@ssh.mheine.se:/www/js/ | tail -n +2
rsync --recursive --progress index.html mheine.se@ssh.mheine.se:/www/ | tail -n +2
rsync --recursive --progress 404.html mheine.se@ssh.mheine.se:/www/ | tail -n +2
rsync --recursive --progress 403.html mheine.se@ssh.mheine.se:/www/ | tail -n +2
rsync --recursive --progress .htaccess mheine.se@ssh.mheine.se:/www/ | tail -n +2

echo "Transfer successful!"


