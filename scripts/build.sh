#!/bin/bash

set -e;

sudo chown -R ec2-user /app;

cd /app;

npm ci;

npm run build;