import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {StatusBar} from "expo-status-bar"
import { HomePage } from './screens';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {


  return (
    <SafeAreaView style={styles.safeArea}>
    <HomePage/>
   </SafeAreaView>
  );
}

const styles  = StyleSheet.create({
  safeArea:{
    flex:1
  }
})
