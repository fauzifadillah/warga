import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import {Neomorph} from 'react-native-neomorph-shadows';

const Button = props => {
  const content = (
    <Neomorph
      darkShadowColor="#CFD1D4"
      lightShadowColor="#FFFFFF"
      style={styles.neumorphism}>
      <View
        style={[
          styles.button,
          {backgroundColor: props.bgColor, borderColor: props.brColor},
          props.disabled ? styles.disabled : null,
        ]}>
        <Text
          style={[
            styles.textButton,
            {color: props.color},
            props.disabled ? styles.disabledText : null,
          ]}>
          {props.children}
        </Text>
      </View>
    </Neomorph>
  );
  if (props.disabled) {
    return content;
  }
  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  }
  return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center'
  },
  disabled: {
    backgroundColor: '#eee',
    borderColor: '#aaa'
  },
  disabledText: {
    color: '#aaa'
  },
  neumorphism: {
    shadowOpacity: 1,
    shadowRadius: 5,
    borderRadius: 10,
    backgroundColor: '#F4F6F9',
    height: 47,
    width: 320,
    margin: 5,
    marginTop: 35,
    marginBottom: 100
  },
  textButton: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
});

export default Button;
