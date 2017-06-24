import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../components/Button';
import Input from '../components/Input';
import Logo from '../components/Logo';
import AnimatedLoader from '../components/AnimatedLoader';
import colors from '../colors';
import {
  login,
  setEmail,
  setPassword
} from '../actions/login';

const TextButton = ({onPress, style, title}) =>
  <TouchableOpacity style={[styles.textButton, style]} onPress={onPress}>
    <Text>
      {title}
    </Text>
  </TouchableOpacity>;

TextButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: PropTypes.any,
  title: PropTypes.string.isRequired
};

const renderLoginButton = props =>
  !props.state.login.isLoading
    ? <Button
      title="login"
      onPress={() => props.dispatch(login())}
      backgroundColor="white"
      color={colors.FONTCOLOR}
    />
    : <AnimatedLoader />;
const Login = props =>
  <View style={styles.container}>
    <StatusBar backgroundColor={colors.PRIMARY} />
    <Logo style={styles.logo} />
    <View sytle={styles.form}>
      <Input
        type="email"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email address"
        keyboardType="email-address"
        onChangeText={(email) => props.dispatch(setEmail('aakash.sigdel@gmail.com'))}
      />
      <Input
        type="password"
        placeholder="Password"
        secureTextEntry
        onChangeText={password => props.dispatch(setPassword('dk5j4uafcF9dabEIpjjbOPTP'))}
      />
      <TextButton
        onPress={() => null} title="Forgot Password?"
        style={styles.forgotPassword}
      />
    </View>
    <View style={styles.buttons}>
      {renderLoginButton(props)}
      <TextButton
        onPress={() => null}
        title="Don't have an account?"
        style={styles.noAccount}
      />
      <Button title="register" onPress={() => null} />
    </View>
  </View>;

Login.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  form: {
    flex: 2,
    justifyContent: 'flex-end'
  },
  textButton: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 50
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginRight: 15
  },
  buttons: {
    flex: 1,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  noAccount: {
    alignItems: 'center',
  }
});

export default connect(state => ({state: state}))(Login);
