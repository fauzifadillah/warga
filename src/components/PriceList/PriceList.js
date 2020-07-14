import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import axios from 'axios';
import {Col} from 'native-base';
import Label from '../../components/UI/Label/Label';
import MainText from '../../components/UI/MainText/MainText';
import {Neomorph} from 'react-native-neomorph-shadows';

const PriceList = props => {
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    axios.get(url).then(users => {
      setUsers(users.data);
    });
  });

  let contents = [];
  const [users, setUsers] = useState([]);

  if (props.category === 'Mobile Legends') {
    /* Mobile Legends */
    contents.push(
      <View>
        {/* Price */}
        {/* { users.map( (user,idx) => {
          return (      */}
        <View style={[styles.row, styles.rowMarginVertical]}>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>3 Diamonds</MainText>
              <MainText style={styles.boldText}>Rp2.200</MainText>
            </Neomorph>
          </Col>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>3 Diamonds</MainText>
              <MainText style={styles.boldText}>Rp2.200</MainText>
            </Neomorph>
          </Col>
        </View>
        {/* );
        })} */}
      </View>,
    );
  } else if (props.category === 'Free Fire') {
    /* Free Fire */
    contents.push(
      <View>
        {/* Price */}
        {/* { users.map( (user,idx) => {
          return (      */}
        <View style={[styles.row, styles.rowMarginVertical]}>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>3 Diamonds</MainText>
              <MainText style={styles.boldText}>Rp2.200</MainText>
            </Neomorph>
          </Col>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>3 Diamonds</MainText>
              <MainText style={styles.boldText}>Rp2.200</MainText>
            </Neomorph>
          </Col>
        </View>
        {/* );
        })} */}
      </View>,
    );
  } else if (props.category === 'PUBG Mobile') {
    /* PUBG Mobile */
    contents.push(
      <View>
        {/* Price */}
        {/* { users.map( (user,idx) => {
          return (      */}
        <View style={[styles.row, styles.rowMarginVertical]}>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>150 Cash</MainText>
              <MainText style={styles.boldText}>Rp2.200</MainText>
            </Neomorph>
          </Col>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>150 Cash</MainText>
              <MainText style={styles.boldText}>Rp2.200</MainText>
            </Neomorph>
          </Col>
        </View>
        {/* );
        })} */}
      </View>,
    );
  } else if (props.category === 'Valorant') {
    /* Valorant */
    contents.push(
      <View>
        {/* Price */}
        {/* { users.map( (user,idx) => {
          return (      */}
        <View style={[styles.row, styles.rowMarginVertical]}>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>300 Points</MainText>
              <MainText style={styles.boldText}>Rp2.200</MainText>
            </Neomorph>
          </Col>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>625 Points</MainText>
              <MainText style={styles.boldText}>Rp2.200</MainText>
            </Neomorph>
          </Col>
        </View>
        {/* );
        })} */}
      </View>,
    );
  } else if (props.category === 'Point Blank') {
    /* Point Blank */
    contents.push(
      <View>
        {/* Price */}
        {/* { users.map( (user,idx) => {
          return (      */}
        <View style={[styles.row, styles.rowMarginVertical]}>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>1200 CASH</MainText>
              <MainText style={styles.boldText}>Rp2.200</MainText>
            </Neomorph>
          </Col>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>24000 CASH</MainText>
              <MainText style={styles.boldText}>Rp2.200</MainText>
            </Neomorph>
          </Col>
        </View>
        {/* );
        })} */}
      </View>,
    );
  } else if (props.category === 'Call of Duty') {
    /* Call of Duty */
    contents.push(
      <View>
        {/* Price */}
        {/* { users.map( (user,idx) => {
          return (      */}
        <View style={[styles.row, styles.rowMarginVertical]}>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>31 CP</MainText>
              <MainText style={styles.boldText}>Rp2.200</MainText>
            </Neomorph>
          </Col>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>75000 CP</MainText>
              <MainText style={styles.boldText}>Rp2.200</MainText>
            </Neomorph>
          </Col>
        </View>
        {/* );
        })} */}
      </View>,
    );
  } else if (props.category === 'Steam Wallet') {
    /* Steam Wallet */
    contents.push(
      <View>
        {/* Price */}
        {/* { users.map( (user,idx) => {
          return (      */}
        <View style={[styles.row, styles.rowMarginVertical]}>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>IDR 12.000</MainText>
              <MainText style={styles.boldText}>Rp15.000</MainText>
            </Neomorph>
          </Col>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>IDR 600.000</MainText>
              <MainText style={styles.boldText}>Rp698.000</MainText>
            </Neomorph>
          </Col>
        </View>
        {/* );
        })} */}
      </View>,
    );
  } else if (props.category === 'Google Playstore') {
    /* Google Playstore */
    contents.push(
      <View>
        {/* Price */}
        {/* { users.map( (user,idx) => {
          return (      */}
        <View style={[styles.row, styles.rowMarginVertical]}>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>5.000 IDR</MainText>
              <MainText style={styles.boldText}>Rp5.900</MainText>
            </Neomorph>
          </Col>
          <Col size={1}>
            <Neomorph
              darkShadowColor="#CFD1D4"
              lightShadowColor="#FFFFFF"
              style={[styles.neumorphismPrice, styles.price]}>
              <MainText>500.000 IDR</MainText>
              <MainText style={styles.boldText}>Rp550.000</MainText>
            </Neomorph>
          </Col>
        </View>
        {/* );
        })} */}
      </View>,
    );
  }

  return (
    <View style={styles.containerPriceList}>
      <View style={styles.row}>
        <Neomorph
          darkShadowColor="#CFD1D4"
          lightShadowColor="#FFFFFF"
          style={styles.neumorphismNumber}>
          {props.category === 'Steam Wallet' ||
          props.category === 'Google Playstore' ? (
            <MainText style={styles.number}>1</MainText>
          ) : (
            <MainText style={styles.number}>2</MainText>
          )}
        </Neomorph>
        {props.category === 'Steam Wallet' ||
        props.category === 'Google Playstore' ? (
          <Label>Pilih Voucher</Label>
        ) : (
          <Label>Pilih Nominal Top Up</Label>
        )}
      </View>
      {contents}
    </View>
  );
};

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
  },
  containerPriceList: {
    flex: 1,
    zIndex: 1,
    borderRadius: 12,
    width: 320,
    marginTop: 20,
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
    height: 75,
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
  number: {
    backgroundColor: '#2D54A0',
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#F4F6F9',
    textAlignVertical: 'center',
    textAlign: 'center',
    width: 41,
    height: 41,
    fontWeight: 'bold',
    color: '#ffffff',
    marginRight: 5,
    marginBottom: 5,
  },
  price: {
    padding: 15,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
    alignItems: 'center',
  },
  rowMarginVertical: {
    height: 90,
  },
});

export default PriceList;
