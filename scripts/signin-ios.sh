#!/usr/bin/env bash
cd ./ios

echo ${APP_STORE_KEY} | base64 -d > AuthKey_WVZ3B42223.p8

cd ..
