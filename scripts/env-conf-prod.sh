#!/usr/bin/env bash

cp .env.prod .env

#iOS -> Firebase Google Cloud Messaging
rm -f ./ios/GoogleService-Info.plist
cp ./ios/firebase/release/GoogleService-Info.plist ./ios/.