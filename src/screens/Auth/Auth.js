import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {Content, Form} from 'native-base';
import {Neomorph} from 'react-native-neomorph-shadows';
import Autocomplete from 'react-native-autocomplete-input';
import Button from '../../components/UI/BackgrounedButton/Button';
import Container from '../../components/UI/Container/Container';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import Label from '../../components/UI/Label/Label';

const BACKGROUND = '#F4F6F9';

const Auth = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Container>
        <Content padder>
          <Form style={styles.form}>
            <Label style={styles.paddingLabel}>Nama Penjual Warung</Label>
            <DefaultInput style={styles.form} />
            <Label style={styles.paddingLabel}>No. KTP</Label>
            <DefaultInput style={styles.form} />
            <Label style={styles.paddingLabel}>No. HP</Label>
            <DefaultInput style={styles.form} />
            <Label style={styles.paddingLabel}>Nama Warung</Label>
            <Neomorph
              inner
              darkShadowColor="#CFD1D4" // <- set this
              lightShadowColor="#FFFFFF" // <- this
              style={styles.neumorphism}>
              <Autocomplete
                style={styles.roundedInput}
                autoCapitalize="none"
                autoCorrect={false}
                inputContainerStyle={styles.autocompleteContainer}
              />
            </Neomorph>
            <Label style={styles.paddingLabel}>Kode Aktivator</Label>
            <DefaultInput secureTextEntry={true} style={styles.form} />
          </Form>
          <Button
            bgColor="#2D54A0"
            color="#FFFFFF"
            brColor="transparent"
            onPress={() => navigation.navigate('HomeScreen')}>
            Daftarkan Akun
          </Button>
        </Content>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  autocompleteContainer: {
    width: '97.3%',
    borderRadius: 6,
    borderWidth: 0,
    borderColor: 'red',
    backgroundColor: 'transparent',
    marginLeft: 1
  },
  form: {
    width: 320
  },
  neumorphism: {
    shadowOpacity: 1,
    shadowRadius: 3,
    borderRadius: 6,
    backgroundColor: '#F4F6F9',
    height: 35,
    width: 320
  },
  paddingLabel: {
    paddingVertical: 15
  },
  page: {
    flex: 1,
    zIndex: 1
  },
  roundedInput: {
    height: 37
  },
});

export default Auth;
