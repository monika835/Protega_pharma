#!/bin/bash

set -e;

NODE_VERSION=16

if ! command -v curl &> /dev/null
then
    echo "Installing 'curl'"
    sudo yum -y install curl;
fi

if ! command -v node &> /dev/null
then
  echo "Installing 'node'"
  curl -sL https://rpm.nodesource.com/setup_${NODE_VERSION}.x | sudo bash -;

  sudo yum install -y gcc-c++ make;
  sudo yum install -y nodejs;
fi

if ! command -v yarn &> /dev/null
then
  echo "Installing 'yarn'"
  curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo;

  sudo yum -y install yarn;
fi

if ! command -v pm2 &> /dev/null
then
  echo "Installing 'pm2'"
  sudo yarn global add pm2;
fi

