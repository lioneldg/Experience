#!/usr/bin/env bash

cd ./ios

rm -r /Users/cimobile/Library/Developer/Xcode/DerivedData/
rm -r build
rm -rf Podfile.lock
rm -r Pods
rm -rf shadmobile.xcworkspace
rm -rf shadmobile.ipa

if [ -f ./Podfile ]; then
  arch -x86_64 pod install --repo-update
fi

sigh -a com.shadmobile -u ci-mobile@shadline.com
sigh -a com.shadmobile.shadmobileShare -u ci-mobile@shadline.com

if [ -d shadmobile.xcworkspace ]; then
  ./scripts/echo.sh "clean"
  xcodebuild clean  

  ./scripts/echo.sh "build"
  xcodebuild build \
    -workspace shadmobile.xcworkspace \
    -scheme shadmobile \
    archive \
    -configuration Release \
    -sdk iphoneos  \
    -derivedDataPath ./build \
    -UseModernBuildSystem=NO \
    -archivePath "${PWD}/shadmobile.xcarchive" \
    | xcpretty

  ./scripts/echo.sh "archive"
    xcodebuild \
      -exportArchive \
      -archivePath "${PWD}/shadmobile.xcarchive"  \
      -exportOptionsPlist "${PWD}/ExportOptions.plist" \
      -exportPath shadmobile.ipa
fi

cd ..

echo -e '\n ==> ./build/app-release.zip'