#!/usr/bin/env bash

export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8
export LANGUAGE=en_US:en

./scripts/signin-ios.sh

cd ./ios

if [ -f ./Podfile ]; then
  arch -x86_64 pod install --repo-update
fi

cd ..

./scripts/assemble-ios.sh