#!/usr/bin/env bash
zsh

rm -rf ./node_modules

yarn

#//HACK firebase small icon
./scripts/library-change.sh