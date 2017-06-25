import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';

import { fetchJobs } from '../actions/jobs';
import Job from '../components/Job';
import colors from '../colors';

class Jobs extends Component {
  constructor () {
    super();
    this.count = 1;
  }

  static navigationOptions = {
    headerStyle: {backgroundColor: colors.PRIMARY},
    headerTitle: 'inPloi',
    headerTintColor: 'white'
  }

  componentDidMount () {
    StatusBar.setBarStyle('light-content');
    this.props.dispatch(fetchJobs(this.count));
  }

  // if the page number would be included on the
  // response it would be far easier to handle 
  // onEndReached of the list
  _onEndReached = props => {
    ++this.count;
    this.props.dispatch(fetchJobs(this.count));
  }

  render () {
    const { jobs } = this.props.state.jobs;
    if (this.props.state.jobs.isLoading) {
      return (
        <View style={[styles.container, styles.fakeContainer]}>
          <Job />
          <Job />
          <Job />
        </View>
      )
    }
    return (
        <FlatList
          data={jobs}
          renderItem={item => <Job job={item.item} index={item.index} />}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentContainer}
          onEndReached={this._onEndReached}
          style={styles.container}
        />
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    backgroundColor: '#F6F7FB',
    paddingBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#F6F7FB'
  },
  fakeContainer: {
    alignItems: 'center'
  }
});

export default connect(state => ({state: state}))(Jobs);
