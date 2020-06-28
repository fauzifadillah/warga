import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Button, Container, Content, Form, Item, Input, Label } from 'native-base';
import color from 'color'

const BACKGROUND = '#F4F6F9';

const Morph = ({ children }) => {
  return (
    <View style={styles.morphTop}>
      <View style={styles.morphBottom}>
        {children}
      </View>
    </View>
  )
}

const Auth = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Content padder>
            <Morph>
              <Text style={styles.neumorphismForm}>HEHE</Text>
            </Morph>
            <Form>
              <Item regular>
                <Input placeholder='Regular Textbox'/>
              </Item>
              <Item regular>
                <Input placeholder='Regular Textbox'/>
              </Item>
              <Item regular>
                <Input placeholder='Regular Textbox'/>
              </Item>
              <Item regular>
                <Input placeholder='Regular Textbox'/>
              </Item>
              <Item regular>
                <Input placeholder='Regular Textbox'/>
              </Item>
              <Item regular>
                <Input placeholder='Regular Textbox'/>
              </Item>
            </Form>
            <Button block>
              <Text>Primary</Text>
            </Button>
          </Content>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: '#F4F6F9',
  },
  neumorphismForm: {
    margin: 24,
    fontSize: 15,
    backgroundColor: BACKGROUND,
  },
  morphTop: {
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: BACKGROUND,
  },
  morphBottom: {
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: BACKGROUND,
  },
});

export default Auth;