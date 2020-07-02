import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  Image
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

// Image
import MobileLegends from '../../assets/mobile_legends.jpg'
import FreeFire from '../../assets/free_fire.jpg'
import PUBGMobile from '../../assets/PUBG_mobile.jpg'
import Valorant from '../../assets/valorant.jpg'
import PointBlank from '../../assets/point_blank.jpg'
import CallOfDutyMobile from '../../assets/call_of_duty_mobile.jpg'
import SteamWallet from '../../assets/steam.jpg'
import GooglePlaystore from '../../assets/google_play.jpg'
import ComingSoon from '../../assets/coming_soon.jpg'

const GamesList = ( props ) => {
  return (
    <ScrollView style={styles.page}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 25, paddingVertical: 15}}>
        <HeadingText>Daftar Games</HeadingText>
        <HeadingText>Rekap</HeadingText>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'Mobile Legends', 
            })
          }
        >
          <Image source={MobileLegends} style={styles.imageGames}/>
          <HeadingText style={styles.textFontSize}>Mobile Legends</HeadingText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'Free Fire', 
            })
          }
        >
          <Image source={FreeFire} style={styles.imageGames}/>
          <HeadingText style={styles.textFontSize}>Free Fire</HeadingText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'PUBG Mobile', 
            })
          }
        >
          <Image source={PUBGMobile} style={styles.imageGames}/>
          <HeadingText style={styles.textFontSize}>PUBG Mobile</HeadingText>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'Valorant', 
            })
          }
        >
          <Image source={Valorant} style={styles.imageGames}/>
          <HeadingText style={styles.textFontSize}>VALORANT</HeadingText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'Point Blank', 
            })
          }
        >
          <Image source={PointBlank} style={styles.imageGames}/>
          <HeadingText style={styles.textFontSize}>Point Blank</HeadingText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'Call of Duty', 
            })
          }
        >
          <Image source={CallOfDutyMobile} style={styles.imageGames}/>
          <HeadingText style={styles.textFontSize}>Call of Duty Mobile</HeadingText>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'Steam Wallet', 
            })
          }
        >
          <Image source={SteamWallet} style={styles.imageGames}/>
          <HeadingText style={styles.textFontSize}>Steam Wallet</HeadingText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'Google Playstore', 
            })
          }
        >
          <Image source={GooglePlaystore} style={styles.imageGames}/>
          <HeadingText style={styles.textFontSize}>Google Playstore</HeadingText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.column}
          onPress={() =>
            props.navigate('Payment', {
              category: 'Mobile Legends', 
            })
          }
        >
          <Image source={ComingSoon} style={styles.imageGames}/>
          <HeadingText style={styles.textComingSoon}>Coming Soon</HeadingText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    borderRadius: 25,
    flex:1,
    zIndex: 1,
    width: '100%',
    backgroundColor: '#F4F6F9'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 96,
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    backgroundColor: 'red'
  },
  textFontSize: {
    fontSize: 9,
  },
  textComingSoon: {
    fontSize: 9,
    color: '#F4F6F9'
  }
});


export default GamesList;