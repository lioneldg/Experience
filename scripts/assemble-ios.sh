#!/usr/bin/env bash

git add --all # save assemble

react-native bundle --platform ios --dev false --entry-file index.js --bundle-output ios/main.jsbundle --assets-dest ios