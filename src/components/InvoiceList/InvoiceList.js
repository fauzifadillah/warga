import React from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import MainText from '../../components/UI/MainText/MainText';
import { Content, List, ListItem, Text, Left, Body, Right} from 'native-base'
import MobileLegends from '../../assets/mobile_legends.jpg'

const InvoiceList = () => {
  return (
    <View style={styles.page}>
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Image source={MobileLegends} style={styles.thumbnail} />
            </Left>
            <Body>
              <MainText style={styles.textBold}>3 Diamonds</MainText>
              <MainText note numberOfLines={1}>Tanggal: 07/07/2020</MainText>
            </Body>
            <Right>
              <MainText style={styles.textBold}>Rp2.000</MainText>
              <MainText note numberOfLines={1}>BERHASIL</MainText>
            </Right>
          </ListItem>
        </List>
        <List>
          <ListItem thumbnail>
            <Left>
              <Image source={MobileLegends} style={styles.thumbnail} />
            </Left>
            <Body>
              <MainText style={styles.textBold}>3 Diamonds</MainText>
              <MainText note numberOfLines={1}>Tanggal: 07/07/2020</MainText>
            </Body>
            <Right>
              <MainText style={styles.textBold}>Rp2.000</MainText>
              <MainText note numberOfLines={1}>PENDING</MainText>
            </Right>
          </ListItem>
        </List>
      </Content>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    zIndex: 1,
    width: '100%',
  },
  textBold: {
    fontWeight: 'bold'
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 10
  }
});

export default InvoiceList;
