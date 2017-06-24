import React, { Component } from 'react';
import {
  ActivityIndicator,
  Animated,
  StyleSheet
} from 'react-native';

import colors from '../colors';

class AnimatedLoader extends Component {
  constructor () {
    super();
    this.state = {
      load: false
    };
    this.anim = new Animated.Value(0);
    this.width = this.anim.interpolate({
      inputRange: [0, 1],
      outputRange: [200, 50]
    });
    this.translate = this.anim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 80]
    });
    this.borderRadius = this.anim.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 25]
    })
  }

  componentDidMount () {
    this._animate();
  }

  _animate = () => {
    this.anim.setValue(0)
    Animated.timing(this.anim, {
      toValue: 1,
      duration: 200
    }).start(() => this.setState({ load: true }));
  }

  _renderActivityIndicator = load =>
    load ? <ActivityIndicator /> : null

  render () {
    return (
      <Animated.View style={[styles.button,
        {width: this.width, transform: [{translateX: this.translate}], borderRadius: this.borderRadius}]}>
        {this._renderActivityIndicator(this.state.load)}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderWidth: 2,
    borderColor: colors.PRIMARY,
    justifyContent: 'center'
  }
});

export default AnimatedLoader;
