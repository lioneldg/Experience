/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import '@haskkor/react-native-pincode';
import '@loadable/component';
import '@notifee/react-native';
import '@react-native-async-storage/async-storage';
import '@react-native-community/blur';
import '@react-native-community/checkbox';
import '@react-native-community/clipboard';
import '@react-native-community/datetimepicker';
import '@react-native-community/netinfo';
import '@react-native-community/progress-bar-android';
import '@react-native-community/progress-view';
import '@react-native-community/slider';
import '@react-native-firebase/analytics';
import '@react-native-firebase/app';
import '@react-native-firebase/messaging';
import '@react-native-masked-view/masked-view';
import '@react-native-picker/picker';
import '@react-navigation/core';
import '@react-navigation/devtools';
import {createDrawerNavigator} from '@react-navigation/drawer';
import '@react-navigation/material-top-tabs';
import '@react-navigation/native';
import '@react-navigation/routers';
import '@react-navigation/stack';
import 'base-64';
import 'buffer';
import 'comma-separated-values';
import 'filesize';
import 'i18next';
import 'lottie-react-native';
import 'moment';
import 'moment-timezone';
import 'neverthrow';
import 'path-parser';
import 'react-i18next';
import 'react-native-blob-util';
import 'react-native-color-picker';
import 'react-native-config';
import 'react-native-device-info';
import 'react-native-document-picker';
import 'react-native-exit-app';
import 'react-native-fab';
import 'react-native-fs';
import 'react-native-gesture-handler';
import 'react-native-image-crop-picker';
import 'react-native-image-zoom-viewer';
import 'react-native-keychain';
import 'react-native-localize';
import 'react-native-logs';
import 'react-native-modal';
import 'react-native-pager-view';
import 'react-native-pdf';
import 'react-native-permissions';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import 'react-native-safe-area-context';
import 'react-native-screens';
import 'react-native-shared-group-preferences';
import 'react-native-snackbar-component';
import 'react-native-svg';
import 'react-native-swiper';
import 'react-native-tab-view';
import 'react-native-table-component';
import 'react-native-touch-id';
import 'react-native-vector-icons';
import 'react-native-version-check';
import 'react-native-webview';
import 'react-redux';
import 'redux';
import 'redux-logger';
import 'regenerator-runtime';
import 'reselect';
import 'socket.io-client';
import 'url';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
