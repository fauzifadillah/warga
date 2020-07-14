import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import Button from '../../components/UI/BackgrounedButton/Button';
import Container from '../../components/UI/Container/Container';
import IDPlayerInput from '../../components/IDPlayerInput/IDPlayerInput';
import PriceList from '../../components/PriceList/PriceList';

/* Import Image */
import MobileLegends from '../../assets/mobile_legends_banner.png';

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
          <Image source={MobileLegends} style={styles.imageGames} />
        </View>
        <Container style={styles.page}>
          <IDPlayerInput category="Free Fire" />
          <PriceList category="Free Fire" />
        </Container>
      </View>,
    );
  } else if (category === 'PUBG Mobile') {
    /* PUBG Mobile */
    contents.push(<Text>Free Fire</Text>);
  } else if (category === 'Valorant') {
    /* VALORANT */
    contents.push(<Text>Free Fire</Text>);
  } else if (category === 'Point Blank') {
    /* Point Blank */
    contents.push(<Text>Free Fire</Text>);
  } else if (category === 'Call of Duty') {
    /* Call of Duty */
    contents.push(<Text>Free Fire</Text>);
  } else if (category === 'Steam Wallet') {
    /* Steam Wallet */
    contents.push(<Text>Free Fire</Text>);
  } else if (category === 'Google Playstore') {
    /* Google Playstore */
    contents.push(<Text>Free Fire</Text>);
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
    alignItems: 'center'
  },
  imageGames: {
    borderRadius: 10,
    zIndex: 1,
    height: 141,
    width: 340,
    marginTop: 30
  },
  marginButton: {
    paddingHorizontal: 15,
    backgroundColor: '#F4F6F9'
  },
  page: {
    flex: 1,
    zIndex: 1
  },
});

export default Payment;
