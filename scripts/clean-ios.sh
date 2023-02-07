#!/usr/bin/env bash

cd ./ios

xcodebuild -alltargets clean

rm -rf ~/Library/Developer/Xcode/DerivedData/
rm -rf ./build/*
rm -rf Podfile.lock
rm -rf ./Pods/*
rm -rf shadmobile.xcworkspace
rm -rf shadmobile.ipa

cd ..