import React, { PureComponent } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../colors';

const Touchable = Platform.OS === 'android'
  ? TouchableNativeFeedback
  : TouchableOpacity;

class Button extends PureComponent {
  render () {
    const { backgroundColor, color, disabled, onPress, title } = this.props;

    const buttonStyle = [styles.buttonStyle];
    if (backgroundColor) {
      buttonStyle.push({ backgroundColor })
    }

    const textStyle = [styles.text];
    if (color) {
      textStyle.push({ color });
    }

    if (disabled) {
      buttonStyle.push(styles.disabled);
      textStyle.push(styles.disabledText);
    }

    return(
      <Touchable onPress={onPress} disabled={disabled} style={styles.container}>
        <View style={buttonStyle}>
          <Text style={textStyle}>
            { title.toUpperCase() }
          </Text>
        </View>
      </Touchable>
    )
  }
}

Button.defaultProps = {
  title: 'Button',
};

Button.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch'
  },
  buttonStyle: {
    height: 50,
    justifyContent: 'center',
    elevation: 4,
    backgroundColor: colors.PRIMARY,
    shadowColor: '#999999',
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 1}
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    padding: 8,
    fontWeight: '500'
  },
  disabled: {
    elevation: 0,
    backgroundColor: '#dfdfdf'
  },
  disabledText: Platform.select({
    ios: {
      color: '#cdcdcd'
    },
    android: {
      color: '#a1a1a1'
    }
  })
});

export default Button;
