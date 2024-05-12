import React from 'react';
import { View, StyleSheet } from 'react-native';

const CircleImage = ({ diameter, color, children }) => {
  const circleStyle = {
    width: diameter,
    height: diameter,
    borderRadius: diameter / 2,
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return <View style={[styles.circle, circleStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  circle: {
  },
});

export default CircleImage;