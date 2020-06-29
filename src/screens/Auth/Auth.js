import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Content, Form, Item, Input, Label } from 'native-base';
import color from 'color'
import Container from '../../components/UI/Container/Container'
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import Button from '../../components/UI/BackgrounedButton/Button'
import Autocomplete from 'react-native-autocomplete-input';

import { useLinkProps } from '@react-navigation/native';

const BACKGROUND = '#F4F6F9';

const Auth = () => {
  return (
    <View style={styles.page}>
      <Container>
        <Content padder>
          {/* <Morph>
            <Text style={styles.neumorphismForm}>HEHE</Text>
          </Morph> */}
          <Form style={styles.form}>
            <HeadingText>Nama Penjual Warung</HeadingText>
              <DefaultInput/>
            <HeadingText>No. KTP</HeadingText>
              <DefaultInput/>
            <HeadingText>No. HP</HeadingText>
              <DefaultInput/>
            <HeadingText>Nama Warung</HeadingText>
              <Autocomplete style={styles.roundedInput}
                autoCapitalize="none"
                autoCorrect={false}
                inputContainerStyle={styles.autocompleteContainer}
              />
            <HeadingText>Kode Aktivator</HeadingText>
              <DefaultInput secureTextEntry={true}/>
          </Form>
          <Button
            bgColor="#2D54A0"
            color="#FFFFFF"
            brColor="transparent"
            >
            Daftarkan Akun
          </Button>
        </Content>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex:1,
    zIndex: 1
  },
  form: {
    width: 320
  },
  autocompleteContainer: {
    width: '97.3%',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#CFD1D4',
    backgroundColor: '#FFFFFF',
    marginLeft: 4
  },
  roundedInput: {
    borderRadius: 6,
    height: 35
  }
});

export default Auth;