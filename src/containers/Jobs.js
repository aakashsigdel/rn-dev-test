import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { fetchJobs } from '../actions/jobs';

class Jobs extends Component {
  componentDidMount () {
    this.props.dispatch(fetchJobs(1));
  }
  render () {
    return (
    <Text>inpoli</Text>
    );
  }
}

export default connect(state => ({state: state}))(Jobs);
