#!/usr/bin/env bash

# Waiting args: Debug or Stagin or Release

./scripts/echo.sh "./gradlew app:assemble${1^}"
cd ./android
./gradlew app:assemble${1^}
cd ..

./scripts/echo.sh "detox build -c android.emu.$1"
detox build -c android.emu.$1