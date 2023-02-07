#!/usr/bin/env bash


#export HOST=192.168.1.45
#export ENV=custom

./scripts/echo.sh "env conf custom: HOSTNAME=${HOST} & ENV=${ENV}"

cp .env.staging .env
sed -i -E "s/BASIC_AUTH_CREDENTIALS=6ca11ee0d861462a7db4d1f2300441ddf61dd043104b60ab53a773bb93aa841fa8c8de1a07f9939718d046f0bcee4c2e72ec49005dfc83e6c03c687151e53344e59b17e4b08f00c98ff4ed89415fca//g" .env
sed -i -E "s/BASIC_AUTH_KEY=986f1db8a5ec83d12795d52c79b2564a237866423a94b6c5a9d391912d998731//g" .env
sed -i -E "s/HOSTNAME=recette.shadline.eu/HOSTNAME=${HOST}/g" .env
sed -i -E "s/ENV=staging/ENV=${ENV}/g" .env
