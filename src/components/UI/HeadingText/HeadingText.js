import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HeadingText = props => (
  <Text {...props} style={[styles.headingText, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  headingText: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    color: '#2D54A0',
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 15,
  }
});

export default HeadingText;