import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Label = props => (
  <Text {...props} style={[styles.Label, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  Label: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    color: '#2D54A0',
    fontWeight: 'bold'
  },
});

export default Label;
