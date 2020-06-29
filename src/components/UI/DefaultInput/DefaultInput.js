import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Morph = props => {
  return (
    <View style={styles.morphTop}>
      <View style={styles.morphBottom}>
        {props.children}
      </View>
    </View>
  )
}

const DefaultInput = props => {
  return (
    <Morph>
      <TextInput
        underlineColorAndroid="transparent"
        {...props}
        style={[
          styles.input,
          props.style,
          props.valid || !props.touched ? null : styles.invalid
        ]}
      />
    </Morph>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#CFD1D4',
    backgroundColor: '#FFFFFF',
    padding: 5,
    height: 35
  },
  invalid: {
    backgroundColor: '#f9c0c0',
    borderColor: 'red'
  },
  neumorphismForm: {
    margin: 24,
    fontSize: 15,
    backgroundColor: '#F4F6F9',
  },
  morphTop: {
    padding: 2,
    borderRadius: 6,
    shadowOffset: {width:12, height:12},
    shadowColor: '#CFD1D4',
    shadowRadius: 12
  },
  morphBottom: {
    padding: 2,
    borderRadius: 6,
    shadowOffset: {width:-12, height:-12},
    shadowColor: '#FFFFFF',
    shadowRadius: 12
  },
});

export default DefaultInput;