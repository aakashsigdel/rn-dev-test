import React from 'react';
import { Image, StyleSheet } from 'react-native';

import logo from '../../assets/images/logo-red.png';

const Logo = ({style, ...props}) =>
  <Image
    source={logo}
    style={[styles.logo, style]}
    {...props}
  />;

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 85,
    margin: 10
  }
});

export default Logo;
