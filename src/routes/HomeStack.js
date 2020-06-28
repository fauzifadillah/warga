import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Auth from '../screens/Auth/Auth';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Invoice from '../screens/Invoice/Invoice';
import Payment from '../screens/Payment/Payment';
import Profile from '../screens/Profile/Profile'

const screens = {
  // HomeScreen: {
  //   screen: HomeScreen
  // },
  Auth: {
    screen: Auth
  },
  Invoice: {
    screen: Invoice
  },
  Payment: {
    screen: Payment
  },
  Profile: {
    screen: Profile
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);