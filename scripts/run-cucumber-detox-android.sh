#!/usr/bin/env bash

./scripts/echo.sh "DETOX_CONFIGURATION=android.emu.$1 node_modules/.bin/cucumber-js --require-module @babel/register @babel/polyfill ./e2e/features/$2"
DETOX_CONFIGURATION=android.emu.$1 node_modules/.bin/cucumber-js --require-module @babel/register @babel/polyfill ./e2e/features/$2
# -Dcucumber.options="--tags @Smoke"
