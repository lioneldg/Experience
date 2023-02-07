#!/usr/bin/env bash

jsonValue() {
    KEY=$1
    num=$2
    awk -F"[,:}]" '{for(i=1;i<=NF;i++){if($i~/'$KEY'\042/){print $(i+1)}}}' | tr -d '"' | sed -n ${num}p
}

export versionName=$( cat $1 | jsonValue versionName 1 | cut -f1 -d " ")

echo versionName:$versionName
