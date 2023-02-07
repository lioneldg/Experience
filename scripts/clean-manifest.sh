#!/usr/bin/env bash

# This script will take all manifest in node_modules to delete deprecated declaration
# Execute on /main path of project ex:/shadmobile path

echo "*** clean manifest" 

ANDROID_DIRS=($(find node_modules -name 'AndroidManifest.xml' -printf "%h\n" | sort -u))

for path in "${ANDROID_DIRS[@]}"
do
    FILE_NAME="$path/AndroidManifest.xml"
    ls -ld $FILE_NAME
    sed -i -E "s/<uses-sdk android:minSdkVersion=\".+\/>/ /g" $FILE_NAME
done