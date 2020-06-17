import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

const Payment = ({ navigation }) => {
  let contents = [];

  // Mobile Legends
  if (navigation.getParam('category') === 'Mobile Legends') {
    contents.push(
      <Text>Mobile Legends</Text>
    )
  }

  // Free Fire
  else if (navigation.getParam('category') === 'Free Fire') {
    contents.push(
      <Text>Free Fire</Text>
    )
  }

  // PUBG Mobile
  else if (navigation.getParam('category') === 'PUBG Mobile') {
    contents.push(
      <Text>Free Fire</Text>
    )
  }

  // VALORANT
  else if (navigation.getParam('category') === 'Valorant') {
    contents.push(
      <Text>Free Fire</Text>
    )
  }

  // Point Blank
  else if (navigation.getParam('category') === 'Point Blank') {
    contents.push(
      <Text>Free Fire</Text>
    )
  } 

  // Call of Duty
  else if (navigation.getParam('category') === 'Call of Duty') {
    contents.push(
      <Text>Free Fire</Text>
    )
  } 

  // Steam Wallet
  else if (navigation.getParam('category') === 'Steam Wallet') {
    contents.push(
      <Text>Free Fire</Text>
    )
  }

  // Google Playstore
  else if (navigation.getParam('category') === 'Google Playstore') {
    contents.push(
      <Text>Free Fire</Text>
    )
  } 

  return (
    <ScrollView>
      {contents}
    </ScrollView>
  );
};

export default Payment;