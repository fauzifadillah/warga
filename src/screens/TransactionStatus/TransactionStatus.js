import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';
import { Content, Card, CardItem, Body, Left, Right, Row, Col } from 'native-base';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import { Neomorph } from 'react-native-neomorph-shadows';
import Button from '../../components/UI/BackgrounedButton/Button'

const TransactionStatus = ( {navigation} ) => {
  let contents = [];
  let success = navigation.getParam('success');

  if (success) {
    contents.push(
      <View>
        <Text>Berhasil</Text>
      </View>
    )
  }

  else {
    contents.push(
      <View>
        <Text>Gagal</Text>
      </View>
    )
  }
  
  return (
    <Neomorph
      darkShadowColor="#CFD1D4" // <- set this
      lightShadowColor="#FFFFFF" // <- this
      style={styles.neumorphism}
    >
      <View style={styles.containerIDPlayer}>
        {contents}
      </View>
    </Neomorph>
  );
};

const styles = StyleSheet.create({
  containerIDPlayer: {
    flex: 1,
    zIndex: 1,
    height: 95,
    borderRadius: 12,
    width: 320,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 96,
    marginHorizontal: 15,
    marginVertical: 15,
    alignItems: 'center',
  },
  rowMarginVertical: {
    marginTop: 28,
  },
  number: {
    backgroundColor: '#2D54A0',
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#F4F6F9',
    textAlignVertical: "center",
    textAlign: 'center',
    width: 41,
    height: 41,
    color: '#ffffff',
    marginRight: 5,
    marginBottom: 10,
  },
  widthUserID: {
    width: 180,
  },
  widthServerID: {
    width: 100,
  },
  widthUserFull: {
    width: 292,
  },
  neumorphism: {
    shadowOpacity: 1,
    shadowRadius: 5.9,
    borderRadius: 12,
    backgroundColor: '#F4F6F9',
    flex: 1,
    zIndex: 1,
    marginVertical: 20,
    height: 95,
    width: 320,
  },
});

export default TransactionStatus;