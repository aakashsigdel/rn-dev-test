import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { loadAuthFromAsyncStorage } from '../actions/login';
import colors from '../colors';

class App extends Component {
  static navigationOptions = {
    header: null
  }

  componentDidMount () {
    const {state, navigation} = this.props;
    const resetAction = routeName => NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName })
      ]
    });
    this.props.dispatch(loadAuthFromAsyncStorage())
      .then((res) => {
        if (res.auth) {
          this.props.navigation.dispatch(resetAction('app'));
        } else {
          this.props.navigation.dispatch(resetAction('login'));
        }
      });
  }

  componentWillReceiveProps (nextProps) {
    // const {state, navigation} = nextProps;
    // const resetAction = routeName => NavigationActions.reset({
    //   index: 0,
    //   actions: [
    //     NavigationActions.navigate({ routeName })
    //   ]
    // });
    // if (!state.login.auth) {
    //   this.props.navigation.dispatch(resetAction('login'));
    // } else {
    //   this.props.navigation.dispatch(resetAction('app'));
    // }
  }

  render () {
    return (
      <View style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY
  }
})

const mapStateToProps = state => ({ state: state });
export default connect(mapStateToProps)(App);
