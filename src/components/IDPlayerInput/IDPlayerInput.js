import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Button
} from 'react-native';
import { Content, Card, CardItem, Body, Left, Right, Row, Col } from 'native-base';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import { Neomorph } from 'react-native-neomorph-shadows';

const IDPlayerInput = ( props ) => {
  let contents = [];

  if (props.category === 'Mobile Legends') {
    contents.push(
      <View>
        <View style={styles.row}>
          <Neomorph
            darkShadowColor="#CFD1D4" // <- set this
            lightShadowColor="#FFFFFF" // <- this
            style={styles.neumorphismNumber}
          >
            <Text style={styles.number}>1</Text>
          </Neomorph>
          <HeadingText>Masukkan User ID</HeadingText>
        </View>
        <View style={[styles.row, styles.rowMarginVertical]}>
          <Col size={2}>
            <DefaultInput style={styles.widthUserID}/>
          </Col>
          <Col size={1}>
            <DefaultInput style={styles.widthServerID}/>
          </Col>
        </View>
      </View>
    )
  }

  else if (props.category === 'Free Fire') {
    contents.push(
      <View>
        <View style={styles.row}>
          <Text style={styles.number}>1</Text>
          <HeadingText>Masukkan User ID</HeadingText>
        </View>
        <View style={[styles.row, styles.rowMarginVertical]}>
          <DefaultInput style={styles.widthUserFull}/>
        </View>
      </View>
    )
  }
  
  return (
    <View style={styles.containerIDPlayer}>
      {contents}
    </View>
  );
};

const styles = StyleSheet.create({
  containerIDPlayer: {
    flex: 1,
    zIndex: 1,
    height: 95,
    borderRadius: 12,
    width: 320,
    marginTop: 20,
    marginBottom: 5
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 96,
    marginHorizontal: 5,
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
    marginBottom: 5,
  },
  widthUserID: {
    width: 195,
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
  neumorphismNumber: {
    shadowOpacity: 1,
    shadowRadius: 4,
    borderRadius: 50,
    backgroundColor: '#F4F6F9',
    flex: 1,
    zIndex: 1,
    marginRight: 15,
    marginBottom: 5,
    height: 40,
    width: 40,
  },
});

export default IDPlayerInput;