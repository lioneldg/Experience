#!/usr/bin/env bash

# This script will take all gradle in node_modules to replace all deprecated usage
# Execute on /main path of project ex:/shadmobile path

echo "*** clean gradle" 

ANDROID_DIRS=($(find node_modules -name 'build.gradle' -printf "%h\n" | sort -u))

for path in "${ANDROID_DIRS[@]}"
do
    FILE_NAME="$path/build.gradle"
    ls -ld $FILE_NAME
    sed -i -E "s/compile /implementation /g" $FILE_NAME
done