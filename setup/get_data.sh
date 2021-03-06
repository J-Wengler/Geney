#!/bin/bash

set -euo pipefail

function download {
  osfID="$1"

  if [ ! -f $osfID.tar.gz ]
  then 
    url="https://osf.io/${osfID}/download?version=1"
    wget -O $osfID.tar.gz "$url"
    tar -zxvf $osfID.tar.gz
    rm $osfID.tar.gz
  fi
}

#currentDir=$(pwd)
cd /root/data
download zqmsc

docker-compose down
docker-compose up -d

#cd $currentDir
