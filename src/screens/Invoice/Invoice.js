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
import { createAppContainer} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


const Invoice = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Ini Laman Invoice</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Invoice;