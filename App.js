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
import PINCode from '@haskkor/react-native-pincode';
import loadable from '@loadable/component';
import notifee, {AndroidImportance} from '@notifee/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BlurView} from '@react-native-community/blur';
import CheckBox from '@react-native-community/checkbox';
import Clipboard from '@react-native-community/clipboard';
import DateTimePicker from '@react-native-community/datetimepicker';
import NetInfo from '@react-native-community/netinfo';
import '@react-native-community/progress-bar-android';
import '@react-native-community/progress-view';
import '@react-native-community/slider';
import analytics from '@react-native-firebase/analytics';
import '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import '@react-native-masked-view/masked-view';
import {Picker} from '@react-native-picker/picker';
import {
  NavigationProp,
  NavigationState,
  ParamListBase,
} from '@react-navigation/core';
import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer, CommonActions} from '@react-navigation/native';
import * as myModule1 from '@react-navigation/routers';
import * as myModule2 from '@react-navigation/stack';
import * as myModule3 from 'base-64';
import * as myModule4 from 'buffer';
import * as myModule5 from 'comma-separated-values';
import * as myModule6 from 'filesize';
import * as myModule7 from 'i18next';
import * as myModule8 from 'lottie-react-native';
import * as myModule9 from 'moment';
import * as myModule10 from 'moment-timezone';
import * as myModule11 from 'neverthrow';
import * as myModule12 from 'path-parser';
import * as myModule13 from 'react-i18next';
import * as myModule14 from 'react-native-blob-util';
import * as myModule15 from 'react-native-color-picker';
import * as myModule16 from 'react-native-config';
import * as myModule17 from 'react-native-device-info';
import * as myModule18 from 'react-native-document-picker';
import * as myModule19 from 'react-native-exit-app';
import * as myModule20 from 'react-native-fab';
import * as myModule21 from 'react-native-fs';
import * as myModule22 from 'react-native-gesture-handler';
import * as myModule23 from 'react-native-image-crop-picker';
import * as myModule24 from 'react-native-image-zoom-viewer';
import * as myModule25 from 'react-native-keychain';
import * as myModule26 from 'react-native-localize';
import * as myModule27 from 'react-native-logs';
import * as myModule28 from 'react-native-modal';
import * as myModule29 from 'react-native-pager-view';
import * as myModule30 from 'react-native-pdf';
import * as myModule31 from 'react-native-permissions';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import * as myModule32 from 'react-native-safe-area-context';
import * as myModule33 from 'react-native-screens';
import * as myModule34 from 'react-native-shared-group-preferences';
import * as myModule35 from 'react-native-snackbar-component';
import * as myModule36 from 'react-native-svg';
import * as myModule37 from 'react-native-swiper';
import * as myModule38 from 'react-native-tab-view';
import * as myModule39 from 'react-native-table-component';
import * as myModule40 from 'react-native-touch-id';
import * as myModule41 from 'react-native-vector-icons';
import * as myModule42 from 'react-native-version-check';
import * as myModule43 from 'react-native-webview';
import * as myModule44 from 'react-redux';
import * as myModule45 from 'redux';
import * as myModule46 from 'redux-logger';
import * as myModule47 from 'regenerator-runtime';
import * as myModule48 from 'reselect';
import * as myModule49 from 'socket.io-client';
import * as myModule50 from 'url';

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
