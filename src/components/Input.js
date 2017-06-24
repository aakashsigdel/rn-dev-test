import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../colors';
import lock from '../../assets/images/lock.png';
import user from '../../assets/images/user.png';

class Input extends Component {
  _renderImage (type) {
    if (type === 'password') {
      return <Image source={lock} style={styles.icon} />
    } else if (type === 'email') {
      return <Image source={user} style={styles.icon} />
    } else {
      return null;
    }
  }

  render() {
    const { placeholder, style, type, ...props } = this.props;
    return (
      <View style={styles.container}>
        {this._renderImage(type)}
        <TextInput
          placeholderTextColor="gray"
          placeholder={placeholder}
          style={[styles.textInput, style]} {...props}
          tintColor={colors.PRIMARY}
          underlineColorAndroid="transparent"
          {...props}
        />
      </View>
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.SECONDARY,
    paddingLeft: 15,
    paddingRight: 10,
    paddingBottom: 4,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 15
  },
  textInput: {
    width: '100%',
    height: 45,
    paddingTop: 6
  }
});

export default Input;
