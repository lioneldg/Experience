#!/usr/bin/env bash

./scripts/signin-gradle.sh

cd ./android

# add local.properties
localFile=$PWD/local.properties
if [[ ! -e $localFile ]]; then
    touch $localFile
    echo "sdk.dir=/Users/cimobile/Library/Android/sdk" >> $localFile
fi

cd ..

./scripts/clean-manifest.sh

./scripts/clean-gradle.sh

./scripts/assemble-android.sh