import React from 'react';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

const metrics = {
  screenWidth,
  screenHeight,
  smallMargin: 5,
  baseMargin: 10,
  semiMargin: 15,
  doubleBaseMargin: 20,
  doubleSemiMargin: 30,
  tripleBaseMargin: 40,
  doubleSection: 50,
  icons: {
    tiny: 15,
    small: 20,
    normal: 24,
    medium: 30,
    large: 45,
    xl: 60,
    xxl: 70
  }
};

export default metrics;
