#!/usr/bin/env bash

# === for patch sdkmanager and avdmanager ===
# -> download install java-1.8.0-openjdk-amd64 on your computer
# -> export your current version of java in JAVA_HOME path

# -> patch script sdkmanager:
# # Add default JVM options here. You can also use JAVA_OPTS and AVDMANAGER_OPTS to pass JVM options to this script.
# JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64
# DEFAULT_JVM_OPTS='"-Dcom.android.sdklib.toolsdir=$APP_HOME" -XX:+IgnoreUnrecognizedVMOptions'

# -> patch script avdmanager:
# # Add default JVM options here. You can also use JAVA_OPTS and SDKMANAGER_OPTS to pass JVM options to this script.
# JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64
# DEFAULT_JVM_OPTS='"-Dcom.android.sdkmanager.toolsdir=$APP_HOME" -XX:+IgnoreUnrecognizedVMOptions'

./scripts/echo.sh "download sdk"
sdkmanager --install "system-images;android-30;google_apis;x86"

./scripts/echo.sh "create vm"
echo "no" | avdmanager --verbose create avd --force --name "test_e2e_30" --package "system-images;android-30;google_apis;x86" --tag "google_apis" --abi "x86" --device "pixel_xl"

./scripts/echo.sh "list emulators"
emulator -list-avds

./scripts/echo.sh "emulator -avd test_e2e_30"
emulator -avd test_e2e_30 -no-boot-anim -netdelay none -no-snapshot -wipe-data -skin 1080x1920 &