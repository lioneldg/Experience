#!/usr/bin/env bash

cd ./ios

sed -i -E "s/PROVISIONING_PROFILE_SPECIFIER = \"Shadline CI\";/PROVISIONING_PROFILE_SPECIFIER = \"Shadline Ad Hoc CI\";/g" shadmobile.xcodeproj/project.pbxproj
sed -i -E "s/PROVISIONING_PROFILE_SPECIFIER = \"Shadline share CI\";/PROVISIONING_PROFILE_SPECIFIER = \"Shadline share Ad Hoc CI\";/g" shadmobile.xcodeproj/project.pbxproj

cd ..