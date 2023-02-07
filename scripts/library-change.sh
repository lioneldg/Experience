#!/usr/bin/env bash

cp -R ./android/app/src/main/res/drawable ./node_modules/@react-native-firebase/messaging/android/src/main/res/
cp -R ./android/app/src/main/res/drawable-hdpi ./node_modules/@react-native-firebase/messaging/android/src/main/res/
cp -R ./android/app/src/main/res/drawable-mdpi ./node_modules/@react-native-firebase/messaging/android/src/main/res/
cp -R ./android/app/src/main/res/drawable-xhdpi ./node_modules/@react-native-firebase/messaging/android/src/main/res/
cp -R ./android/app/src/main/res/drawable-xxhdpi ./node_modules/@react-native-firebase/messaging/android/src/main/res/
cp -R ./android/app/src/main/res/drawable-xxxhdpi ./node_modules/@react-native-firebase/messaging/android/src/main/res/

sed -i -E "s/\\$\{firebaseJsonAutoInitEnabled\}/true/g" ./node_modules/@react-native-firebase/messaging/android/src/main/AndroidManifest.xml
sed -i -E "s/\\$\{firebaseJsonNotificationChannelId\}/line/g" ./node_modules/@react-native-firebase/messaging/android/src/main/AndroidManifest.xml
# color choosed in color fle from node module @react-native-firebase/messaging (can't match color from shadline)
sed -i -E "s/\\$\{firebaseJsonNotificationColor\}/@color\/mediumpurple/g" ./node_modules/@react-native-firebase/messaging/android/src/main/AndroidManifest.xml
sed -i -E "s/<\/application>/<meta-data android:name=\"com.google.firebase.messaging.default_notification_icon\" android:resource=\"@drawable\/ic_small_icon\"\/> <\/application>/g" ./node_modules/@react-native-firebase/messaging/android/src/main/AndroidManifest.xml

### react-native-touch-id
sed -i -E "s/background/backgroundTint/g" ./node_modules/react-native-touch-id/android/src/main/res/layout/fingerprint_dialog.xml
rm ./node_modules/react-native-touch-id/android/src/main/res/layout/fingerprint_dialog.xml-E
