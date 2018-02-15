#!/bin/bash

ssh -q mheine.se@ssh.mheine.se exit
STATUS=$?

if [[ "$STATUS" != 0 ]] ; then
	echo "SSH connection refused. Please check the ssh keys."
	exit 0
fi

echo "Starting transfer to beta.mheine.se"

rsync --recursive --progress beta/ mheine.se@ssh.mheine.se:/www/beta/ | tail -n +2

echo "Transfer successful!"


