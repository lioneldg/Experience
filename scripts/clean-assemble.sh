#!/usr/bin/env bash

echo "*** clean assemble" 

git status --porcelain | while read -r status file; do
  case "$status" in 
    M) git add "$file" && git clean -f -d;;
  esac
done