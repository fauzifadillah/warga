import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';
import Container from '../../components/UI/Container/Container'
import IDPlayerInput from '../../components/IDPlayerInput/IDPlayerInput'
import PriceList from '../../components/PriceList/PriceList'
import MobileLegends from '../../assets/mobile_legends_banner.png';
import Button from '../../components/UI/BackgrounedButton/Button'

const Payment = ({ navigation }) => {
  let contents = [];
  let category = navigation.getParam('category');
  const [success, setSuccess] = useState(true);

  // Mobile Legends
  if (category === 'Mobile Legends') {
    contents.push(
      <View>
        <View style={styles.containerImageGames}>
          <Image source={MobileLegends} style={styles.imageGames}/>
        </View>
        <Container style={styles.page}>
          <IDPlayerInput category='Mobile Legends'/>
          <PriceList category='Mobile Legends'/>
        </Container>
      </View>
    )
  }

  // Free Fire
  else if (category === 'Free Fire') {
    contents.push(
      <View>
        <View style={styles.containerImageGames}>
          <Image source={MobileLegends} style={styles.imageGames}/>
        </View>
        <Container style={styles.page}>
          <IDPlayerInput category='Free Fire'/>
          <PriceList category='Free Fire'/>
        </Container>
      </View>
    )
  }

  // PUBG Mobile
  else if (category === 'PUBG Mobile') {
    contents.push(
      <Text>Free Fire</Text>
    )
  }

  // VALORANT
  else if (category === 'Valorant') {
    contents.push(
      <Text>Free Fire</Text>
    )
  }

  // Point Blank
  else if (category === 'Point Blank') {
    contents.push(
      <Text>Free Fire</Text>
    )
  } 

  // Call of Duty
  else if (category === 'Call of Duty') {
    contents.push(
      <Text>Free Fire</Text>
    )
  } 

  // Steam Wallet
  else if (category === 'Steam Wallet') {
    contents.push(
      <Text>Free Fire</Text>
    )
  }

  // Google Playstore
  else if (category === 'Google Playstore') {
    contents.push(
      <Text>Free Fire</Text>
    )
  } 

  return (
    <ScrollView style={styles.page}>
      {contents}
      <View style={styles.marginButton}>
        <Button
          bgColor="#2D54A0"
          color="#FFFFFF"
          brColor="transparent"
          onPress={() =>
            navigation.navigate('TransactionStatus', {
              success: success,
            })
          }
          >
          Beli Sekarang
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    zIndex: 1,
  },
  imageGames: {
    borderRadius: 10,
    zIndex: 1,
    height: 141,
    width: 340,
    marginTop: 30,
  },
  containerImageGames: {
    alignItems: 'center',
  },
  marginButton: {
    paddingHorizontal: 15,
    backgroundColor: '#F4F6F9'
  },
});

export default Payment;