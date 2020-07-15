import React from 'react';
import {View, Text, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Auth from '../screens/Auth/Auth';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import Invoice from '../screens/Invoice/Invoice';
import Payment from '../screens/Payment/Payment';
import Profile from '../screens/Profile/Profile';
import TransactionStatus from '../screens/TransactionStatus/TransactionStatus';

const screens = {
  Auth: {
    screen: Auth,
    navigationOptions: {
      title: 'Aktivasi Akun',
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerLeft: () => null,
      headerTitle: () => (
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#E6E2E6',
              paddingTop: 60,
            }}>
            Jumlah Setoran
          </Text>
          <Text style={{fontSize: 40, fontWeight: 'bold', color: '#FFFFFF'}}>
            Rp50.000
          </Text>
          <Text style={{fontSize: 12, color: '#E6E2E6', paddingTop: 0}}>
            Saldo Maksimum Rp500.000
          </Text>
        </View>
      ),
      headerTitleStyle: {
        fontSize: 17,
      },
    },
  },
  Invoice: {
    screen: Invoice,
    navigationOptions: {
      title: 'Rekap Pemesanan',
      headerTitleStyle: {
        marginTop: 0,
      },
      headerTitleAlign: 'center',
      headerStyle: {
        height: 70,
      },
    },
  },
  Payment: {
    screen: Payment,
    navigationOptions: {
      title: 'Pembayaran',
      headerTitleStyle: {
        marginTop: 0,
      },
      headerTitleAlign: 'center',
      headerStyle: {
        height: 70,
      },
    },
  },
  TransactionStatus: {
    screen: TransactionStatus,
    navigationOptions: {
      title: 'Pembayaran',
      headerTitleStyle: {
        marginTop: 0,
      },
      headerTitleAlign: 'center',
      headerLeft: null,
      headerStyle: {
        height: 70,
      },
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Edit Profil',
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerBackground: () => (
      <Image source={require('../assets/bg-header.png')} />
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
  },
});

export default createAppContainer(HomeStack);
