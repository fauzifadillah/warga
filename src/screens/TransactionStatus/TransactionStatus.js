import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {
  Content,
  Card,
  CardItem,
  Body,
  Left,
  Right,
  Row,
  Col,
} from 'native-base';
import Label from '../../components/UI/Label/Label';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import {Neomorph} from 'react-native-neomorph-shadows';
import Container from '../../components/UI/Container/Container';
import Button from '../../components/UI/BackgrounedButton/Button';
import SuccessImage from '../../assets/SuccessImage.png';
import FailedImage from '../../assets/FailedImage.png';

const TransactionStatus = ({navigation}) => {
  let contents = [];
  let success = navigation.getParam('success');

  if (success) {
    contents.push(
      <View style={styles.containerInfo}>
        <HeadingText style={styles.marginTopHeadingText}>
          Terima Kasih!
        </HeadingText>
        <MainText style={[styles.textAlignCenter, styles.paddingVertical]}>
          Transaksi telah berhasil dan silahkan {'\n'} tunggu beberapa saat
        </MainText>
        <Image source={SuccessImage} style={styles.imageGames} />
        <MainText style={[styles.textAlignCenter, styles.paddingVertical]}>
          Jumlah setoran akan ditambahkan pada {'\n'} warung Anda setelah
          voucher masuk
        </MainText>
      </View>,
    );
  } else {
    contents.push(
      <View style={styles.containerInfo}>
        <Label>Maaf!</Label>
        <Text style={styles.textAlignCenter}>
          Transaksi gagal karena jumlah setoran Anda melebihi maksimum
        </Text>
        <Image source={FailedImage} style={styles.imageGames} />
        <Text style={styles.textAlignCenter}>
          Silahkan ulangi pembelian setelah Anda memberikan setoran kepada agen
          kami!
        </Text>
      </View>,
    );
  }

  return (
    <View style={styles.page}>
      <Container style={styles.marginTopContainer}>
        {contents}
        <View style={styles.marginButton}>
          <Button
            bgColor="#2D54A0"
            color="#FFFFFF"
            brColor="transparent"
            onPress={() =>
              navigation.navigate('HomeScreen', {
                success: success,
              })
            }>
            OK
          </Button>
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  containerInfo: {
    alignItems: 'center',
  },
  marginTopContainer: {
    marginTop: 20,
  },
  marginTopHeadingText: {
    marginTop: 50,
  },
  marginButton: {
    paddingHorizontal: 15,
    backgroundColor: '#F4F6F9',
    width: '100%',
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
  paddingVertical: {
    paddingVertical: 20,
  },
  page: {
    flex: 1,
    zIndex: 1,
  },
  rowMarginVertical: {
    marginTop: 28,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    height: 96,
    marginHorizontal: 15,
    marginVertical: 15,
    alignItems: 'center',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
});

export default TransactionStatus;
