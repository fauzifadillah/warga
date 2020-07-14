import React from 'react';
import {StyleSheet, View} from 'react-native';

const Container = props => {
  return (
    <View style={{...styles.boxContainer, ...props.style}}>
      {props.children}
    </View>
  );
};
const styles = StyleSheet.create({
  boxContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: '#f4f6f9',
    margin: 0,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
export default Container;
