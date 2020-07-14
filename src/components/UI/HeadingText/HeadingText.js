import React from 'react';
import {Text, StyleSheet} from 'react-native';

const HeadingText = props => (
  <Text {...props} style={[styles.HeadingText, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  HeadingText: {
    fontFamily: 'Open Sans',
    fontSize: 18,
    color: '#081A59',
    fontWeight: 'bold',
  },
});

export default HeadingText;
