import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({style, ...otherProps}) => {
  return (
    <Text {...otherProps} style={[styles.baseStyles, styles.default, style]} />
  );
};

const styles = StyleSheet.create({
  baseStyles: {
    color: 'black',
    letterSpacing: -0.5,
  },
  default: {
    fontSize: 25,
    marginBottom: 30,
  },
  medium: {
    fontSize: 20,
    marginBottom: 30,
  },
  small: {
    fontSize: 15,
    marginBottom: 20,
  },
});

Title.displayName = 'Title';
export default Title;
