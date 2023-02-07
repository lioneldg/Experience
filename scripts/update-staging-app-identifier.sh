#!/usr/bin/env bash

cd ./ios

sed -i -E "s/PRODUCT_BUNDLE_IDENTIFIER = com.shadmobile.shadmobileShare;/PRODUCT_BUNDLE_IDENTIFIER = com.shadmobile.staging.shadmobileShare;/g" shadmobile.xcodeproj/project.pbxproj

cd ..