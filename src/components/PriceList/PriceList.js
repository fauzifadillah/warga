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
import Autocomplete from 'react-native-autocomplete-input';

const PriceList = ( props ) => {
  let contents = [];

  if (props.category === 'Mobile Legends') {
    contents.push(
      <View>
        <View style={styles.row}>
          <Text style={styles.number}>2</Text>
          <HeadingText>Pilih Nominal Top Up</HeadingText>
        </View>
        <View style={[styles.row, styles.rowMarginVertical]}>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4" // <- set this
              lightShadowColor="#FFFFFF" // <- this
              style={styles.neumorphismPrice}
            >
            </Neomorph>
          </Col>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4" // <- set this
              lightShadowColor="#FFFFFF" // <- this
              style={styles.neumorphismPrice}
            >
            </Neomorph>
          </Col>
        </View>
        <View style={[styles.row, styles.rowMarginVertical]}>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4" // <- set this
              lightShadowColor="#FFFFFF" // <- this
              style={styles.neumorphismPrice}
            >
            </Neomorph>
          </Col>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4" // <- set this
              lightShadowColor="#FFFFFF" // <- this
              style={styles.neumorphismPrice}
            >
            </Neomorph>
          </Col>
        </View>
      </View>
    )
  }

  else if (props.category === 'Free Fire') {
    contents.push(
      
    )
  }
  
  return (
    <Neomorph
      darkShadowColor="#CFD1D4" // <- set this
      lightShadowColor="#FFFFFF" // <- this
      style={styles.neumorphism}
    >
      <View style={styles.containerPriceList}>
        {contents}
      </View>
    </Neomorph>
  );
};

const styles = StyleSheet.create({
  containerPriceList: {
    flex: 1,
    zIndex: 1,
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
    marginTop: 58,
    marginBottom: 35
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
  neumorphism: {
    shadowOpacity: 1,
    shadowRadius: 5.9,
    borderRadius: 12,
    backgroundColor: '#F4F6F9',
    height: 195,
    flex: 1,
    zIndex: 1,
    marginVertical: 20,
    width: 320,
  },
  neumorphismPrice: {
    shadowOpacity: 1,
    shadowRadius: 4,
    borderRadius: 12,
    backgroundColor: '#F4F6F9',
    flex: 1,
    zIndex: 1,
    marginLeft: 10,
    height: 68,
    width: 131,
  },
});

export default PriceList;