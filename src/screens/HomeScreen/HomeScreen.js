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

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Ini laman Home</Text>
        <Button 
          onPress={() =>
            navigation.navigate('Payment', {
              category: 'Mobile Legends', 
            })
          }
          title='Mobile Legends'
        />
        <Button 
          onPress={() =>
            navigation.navigate('Payment', {
              category: 'Free Fire', 
            })
          }
          title='Free Fire'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;