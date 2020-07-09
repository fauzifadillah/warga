import React, { useState, useEffect } from 'react';
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
import axios from 'axios';

const PriceList = ( props ) => {
  
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'

    axios.get(url)
      .then(users => {
        setUsers(users.data);
      })
  })

  let contents = [];
  let [heightContainer, setHeightContainer] = useState(155);
  const [users, setUsers] = useState([]);

  if (props.category === 'Mobile Legends') {
    contents.push(
      <View>
        <View style={styles.row}>
          <Neomorph
            darkShadowColor="#CFD1D4" // <- set this
            lightShadowColor="#FFFFFF" // <- this
            style={styles.neumorphismNumber}
          >
            <Text style={styles.number}>2</Text>
          </Neomorph>
          <HeadingText>Pilih Nominal Top Up</HeadingText>
        </View>
        { users.map( (user,idx) => {
          return (     
            <View style={[styles.row, styles.rowMarginVertical]}>
              <Col size={1}>
                <Neomorph
                  darkShadowColor="#CFD1D4" // <- set this
                  lightShadowColor="#FFFFFF" // <- this
                  style={styles.neumorphismPrice}
                >
                  <Text>{users.length}</Text>
                </Neomorph>
              </Col>
              <Col size={1}>
                <Neomorph
                  darkShadowColor="#CFD1D4" // <- set this
                  lightShadowColor="#FFFFFF" // <- this
                  style={styles.neumorphismPrice}
                >
                  <Text>{heightContainer + idx}</Text>
                </Neomorph>
              </Col>
            </View>
          );
        })}
      </View>
    )
  }

  else if (props.category === 'Free Fire') {
    contents.push(
      
    )
  }
  
  return (
    <View style={styles.containerPriceList}>
      {contents}
    </View>
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
    marginHorizontal: 5,
    alignItems: 'center',
  },
  rowMarginVertical: {
    // marginTop: 58,
    // marginBottom: 35
    height: 90,
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
  neumorphism: {
    shadowOpacity: 1,
    shadowRadius: 5.9,
    borderRadius: 12,
    backgroundColor: '#F4F6F9',
    flex: 1,
    zIndex: 1,
    marginVertical: 20,
    width: 320,
  },
  neumorphismPrice: {
    shadowOpacity: 0.6,
    shadowRadius: 4,
    borderRadius: 12,
    backgroundColor: '#F4F6F9',
    flex: 1,
    zIndex: 1,
    marginLeft: 10,
    height: 68,
    width: 133,
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

export default PriceList;