import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Neomorph } from 'react-native-neomorph-shadows';

const DefaultInput = props => {
  return (
    <Neomorph
      inner
      darkShadowColor="#CFD1D4" // <- set this
      lightShadowColor="#FFFFFF" // <- this
      style={[
        styles.neumorphism,
        props.style,
      ]}
    >
      <TextInput
        underlineColorAndroid="transparent"
        {...props}
        style={[
          styles.input,
          props.style,
          props.valid || !props.touched ? null : styles.invalid
        ]}
      />
    </Neomorph>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 5,
    height: 35,
  },
  neumorphism: {
    shadowOpacity: 1,
    shadowRadius: 3,
    borderRadius: 6,
    backgroundColor: '#F4F6F9',
    height: 35,
  },
  invalid: {
    backgroundColor: '#f9c0c0',
    borderColor: 'red'
  },
});

export default DefaultInput;