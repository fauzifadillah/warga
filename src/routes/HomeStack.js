import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Auth from '../screens/Auth/Auth';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Invoice from '../screens/Invoice/Invoice';
import Payment from '../screens/Payment/Payment';
import Profile from '../screens/Profile/Profile'

const screens = {
  Auth: {
    screen: Auth,
    navigationOptions: {
      title: 'Aktivasi Akun',
    }
  },
  HomeScreen: {
    screen: HomeScreen
  },
  Invoice: {
    screen: Invoice,
    navigationOptions: {
      title: 'History Pemesanan',
    }
  },
  Payment: {
    screen: Payment,
    navigationOptions: {
      title: 'Pembayaran',
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Edit Profil',
    }
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerBackground: (
      <Image
        source={require('../assets/bg-header.png')}
      />
    ),
    headerStyle: {
      backgroundColor: '#2D54A0',
      height: 120,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontFamily: 'Open Sans',
      fontSize: 24,
      fontWeight: 'bold',
      paddingTop: 63,
      paddingBottom: 15,
    },
  }
});

export default createAppContainer(HomeStack);