import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';
import Button from '../../components/UI/BackgrounedButton/Button';
import Container from '../../components/UI/Container/Container';
import IDPlayerInput from '../../components/IDPlayerInput/IDPlayerInput';
import PriceList from '../../components/PriceList/PriceList';

/* Import Image */
import MobileLegends from '../../assets/mobile_legends_banner.png';
import FreeFire from '../../assets/free_fire_banner.png';
import PUBGMobile from '../../assets/PUBG_mobile_banner.jpg';
import Valorant from '../../assets/valorant_banner.jpg';
import PointBlank from '../../assets/point_blank_banner.jpg';
import CallofDuty from '../../assets/call_of_duty_banner.jpg';
import SteamWallet from '../../assets/steam_wallet_banner.png';
import GooglePlaystore from '../../assets/google_playstore_banner.png';

const Payment = ({navigation}) => {
  let contents = [];
  let category = navigation.getParam('category');
  const [success, setSuccess] = useState(true);

  if (category === 'Mobile Legends') {
    /* Mobile Legends */
    contents.push(
      <View>
        <View style={styles.containerImageGames}>
          <Image source={MobileLegends} style={styles.imageGames} />
        </View>
        <Container style={styles.page}>
          <IDPlayerInput category="Mobile Legends" />
          <PriceList category="Mobile Legends" />
        </Container>
      </View>,
    );
  } else if (category === 'Free Fire') {
    /* Free Fire */
    contents.push(
      <View>
        <View style={styles.containerImageGames}>
          <Image source={FreeFire} style={styles.imageGames} />
        </View>
        <Container style={styles.page}>
          <IDPlayerInput category="Free Fire" />
          <PriceList category="Free Fire" />
        </Container>
      </View>,
    );
  } else if (category === 'PUBG Mobile') {
    /* PUBG Mobile */
    contents.push(
      <View>
        <View style={styles.containerImageGames}>
          <Image source={PUBGMobile} style={styles.imageGames} />
        </View>
        <Container style={styles.page}>
          <IDPlayerInput category="PUBG Mobile" />
          <PriceList category="PUBG Mobile" />
        </Container>
      </View>,
    );
  } else if (category === 'Valorant') {
    /* VALORANT */
    contents.push(
      <View>
        <View style={styles.containerImageGames}>
          <Image source={Valorant} style={styles.imageGames} />
        </View>
        <Container style={styles.page}>
          <IDPlayerInput category="Valorant" />
          <PriceList category="Valorant" />
        </Container>
      </View>,
    );
  } else if (category === 'Point Blank') {
    /* Point Blank */
    contents.push(
      <View>
        <View style={styles.containerImageGames}>
          <Image source={PointBlank} style={styles.imageGames} />
        </View>
        <Container style={styles.page}>
          <IDPlayerInput category="Point Blank" />
          <PriceList category="Point Blank" />
        </Container>
      </View>,
    );
  } else if (category === 'Call of Duty') {
    /* Call of Duty */
    contents.push(
      <View>
        <View style={styles.containerImageGames}>
          <Image source={CallofDuty} style={styles.imageGames} />
        </View>
        <Container style={styles.page}>
          <IDPlayerInput category="Call of Duty" />
          <PriceList category="Call of Duty" />
        </Container>
      </View>,
    );
  } else if (category === 'Steam Wallet') {
    /* Steam Wallet */
    contents.push(
      <View>
        <View style={styles.containerImageGames}>
          <Image source={SteamWallet} style={styles.imageGames} />
        </View>
        <Container style={styles.page}>
          <PriceList category="Steam Wallet" />
        </Container>
      </View>,
    );
  } else if (category === 'Google Playstore') {
    /* Google Playstore */
    contents.push(
      <View>
        <View style={styles.containerImageGames}>
          <Image source={GooglePlaystore} style={styles.imageGames} />
        </View>
        <Container style={styles.page}>
          <PriceList category="Google Playstore" />
        </Container>
      </View>,
    );
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
          }>
          Beli Sekarang
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerImageGames: {
    alignItems: 'center',
  },
  imageGames: {
    borderRadius: 10,
    zIndex: 1,
    height: 141,
    width: 340,
    marginTop: 10,
  },
  marginButton: {
    paddingHorizontal: 15,
    backgroundColor: '#F4F6F9',
  },
  page: {
    flex: 1,
    zIndex: 1,
  },
});

export default Payment;
