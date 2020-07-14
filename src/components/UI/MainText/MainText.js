import React from 'react';
import {Text, StyleSheet} from 'react-native';

const MainText = props => (
  <Text {...props} style={[styles.MainText, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  MainText: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    color: '#081A59',
    lineHeight: 25,
  },
});

export default MainText;
