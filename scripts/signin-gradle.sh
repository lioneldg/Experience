#!/usr/bin/env bash
cd ./android/app

echo ${STAGING_KEYSTORE} | base64 -d > staging-shadmobile.keystore
echo ${RELEASE_KEYSTORE} | base64 -d > release-shadmobile.keystore

echo ${PLAY_STORE_JSON} | base64 -d > play-store.json

cd ..

echo "*** signing.properties" 
echo "" > signing.properties
echo "RELEASE_STORE_FILE=${RELEASE_STORE_FILE}" >> signing.properties
echo "RELEASE_STORE_PASSWORD=${RELEASE_STORE_PASSWORD}" >> signing.properties
echo "RELEASE_KEY_ALIAS=${RELEASE_KEY_ALIAS}" >> signing.properties
echo "RELEASE_KEY_PASSWORD=${RELEASE_KEY_PASSWORD}" >> signing.properties

echo "" >> signing.properties
echo "STAGING_STORE_FILE="${STAGING_STORE_FILE}"" >> signing.properties
echo "STAGING_KEY_ALIAS=${STAGING_KEY_ALIAS}" >> signing.properties
echo "STAGING_STORE_PASSWORD=${STAGING_STORE_PASSWORD}" >> signing.properties
echo "STAGING_KEY_PASSWORD=${STAGING_KEY_PASSWORD}" >> signing.properties