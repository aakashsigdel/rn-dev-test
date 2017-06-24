import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import logo from '../../assets/images/logo-red.png';

const Logo = ({style, ...props}) =>
  <View style={style}>
    <Image
      source={logo}
      style={styles.logo}
      {...props}
    />
  </View>;

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 85,
    margin: 10
  }
});

export default Logo;
