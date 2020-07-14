import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import {Left, Right} from 'native-base';
import Label from '../../components/UI/Label/Label';
import {Neomorph} from 'react-native-neomorph-shadows';
// import Icon from 'react-native-vector-icons/FontAwesome';

/* Import Image */
import CallOfDutyMobile from '../../assets/call_of_duty_mobile.jpg';
import ComingSoon from '../../assets/coming_soon.jpg';
import FreeFire from '../../assets/free_fire.jpg';
import GooglePlaystore from '../../assets/google_play.jpg';
import MobileLegends from '../../assets/mobile_legends.jpg';
import PointBlank from '../../assets/point_blank.jpg';
import PUBGMobile from '../../assets/PUBG_mobile.jpg';
import SteamWallet from '../../assets/steam.jpg';
import Valorant from '../../assets/valorant.jpg';

const GamesList = props => {
  return (
    <ScrollView style={styles.page}>
      <View style={styles.title}>
        <Left>
          <HeadingText>Daftar Games</HeadingText>
        </Left>
        <Right>
          <Label>
            Rekap
            {/* <Icon
              iconStyle={{margin: 100}}
              name="arrow-right"
              size={15}
              color="#2D54A0"
            /> */}
          </Label>
        </Right>
      </View>
      <View style={styles.row}>
        {/* Mobile Legends */}
        <TouchableOpacity
          style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'Mobile Legends',
            })
          }>
          <Neomorph
            darkShadowColor="#CFD1D4"
            lightShadowColor="#FFFFFF"
            style={styles.neumorphism}>
            <Image source={MobileLegends} style={styles.imageGames} />
          </Neomorph>
          <Label style={styles.textFontSize}>Mobile Legends</Label>
        </TouchableOpacity>

        {/* Free Fire */}
        <TouchableOpacity
          style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'Free Fire',
            })
          }>
          <Neomorph
            darkShadowColor="#CFD1D4"
            lightShadowColor="#FFFFFF"
            style={styles.neumorphism}>
            <Image source={FreeFire} style={styles.imageGames} />
          </Neomorph>
          <Label style={styles.textFontSize}>Free Fire</Label>
        </TouchableOpacity>

        {/* PUBG Mobile */}
        <TouchableOpacity
          style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'PUBG Mobile',
            })
          }>
          <Neomorph
            darkShadowColor="#CFD1D4"
            lightShadowColor="#FFFFFF"
            style={styles.neumorphism}>
            <Image source={PUBGMobile} style={styles.imageGames} />
          </Neomorph>
          <Label style={styles.textFontSize}>PUBG Mobile</Label>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        {/* Valorant */}
        <TouchableOpacity
          style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'Valorant',
            })
          }>
          <Neomorph
            darkShadowColor="#CFD1D4"
            lightShadowColor="#FFFFFF"
            style={styles.neumorphism}>
            <Image source={Valorant} style={styles.imageGames} />
          </Neomorph>
          <Label style={styles.textFontSize}>VALORANT</Label>
        </TouchableOpacity>

        {/* Point Blank */}
        <TouchableOpacity
          style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'Point Blank',
            })
          }>
          <Neomorph
            darkShadowColor="#CFD1D4"
            lightShadowColor="#FFFFFF"
            style={styles.neumorphism}>
            <Image source={PointBlank} style={styles.imageGames} />
          </Neomorph>
          <Label style={styles.textFontSize}>Point Blank</Label>
        </TouchableOpacity>

        {/* Call of Duty */}
        <TouchableOpacity
          style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'Call of Duty',
            })
          }>
          <Neomorph
            darkShadowColor="#CFD1D4"
            lightShadowColor="#FFFFFF"
            style={styles.neumorphism}>
            <Image source={CallOfDutyMobile} style={styles.imageGames} />
          </Neomorph>
          <Label style={styles.textFontSize}>Call of Duty Mobile</Label>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        {/* Steam Wallet */}
        <TouchableOpacity
          style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'Steam Wallet',
            })
          }>
          <Neomorph
            darkShadowColor="#CFD1D4"
            lightShadowColor="#FFFFFF"
            style={styles.neumorphism}>
            <Image source={SteamWallet} style={styles.imageGames} />
          </Neomorph>
          <Label style={styles.textFontSize}>Steam Wallet</Label>
        </TouchableOpacity>

        {/* Google Playstore */}
        <TouchableOpacity
          style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'Google Playstore',
            })
          }>
          <Neomorph
            darkShadowColor="#CFD1D4"
            lightShadowColor="#FFFFFF"
            style={styles.neumorphism}>
            <Image source={GooglePlaystore} style={styles.imageGames} />
          </Neomorph>
          <Label style={styles.textFontSize}>Google Playstore</Label>
        </TouchableOpacity>

        {/* Coming Soon */}
        <View style={styles.column}>
          <Neomorph
            darkShadowColor="#CFD1D4"
            lightShadowColor="#FFFFFF"
            style={styles.neumorphism}>
            <Image source={ComingSoon} style={styles.imageGames} />
          </Neomorph>
          <Label style={styles.textComingSoon}>Coming Soon</Label>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  column: {
    width: 96,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageGames: {
    borderRadius: 10,
    height: 96,
    width: 96,
  },
  neumorphism: {
    shadowOpacity: 1,
    shadowRadius: 4,
    borderRadius: 10,
    backgroundColor: '#F4F6F9',
    height: 96,
    width: 96,
  },
  page: {
    borderRadius: 25,
    flex: 1,
    zIndex: 1,
    width: '100%',
    backgroundColor: '#F4F6F9',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 96,
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFontSize: {
    fontSize: 9,
    marginTop: 2,
  },
  textComingSoon: {
    fontSize: 9,
    marginTop: 2,
    color: '#F4F6F9',
  },
  title: {
    flexDirection: 'row',
    marginHorizontal: 25,
    paddingVertical: 20,
  },
});

export default GamesList;
