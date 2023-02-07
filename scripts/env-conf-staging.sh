#!/usr/bin/env bash

cp .env.staging .env

#iOS -> Firebase Google Cloud Messaging
rm -f ./ios/GoogleService-Info.plist
cp ./ios/firebase/staging/GoogleService-Info.plist ./ios/.