#!/bin/bash

set -e;

cd /app;

pm2 startOrGracefulReload npm --name "copayroxy" --interpreter bash -- start;