import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import colors from '../colors';

const getImageURL = props => {
  const option = 'c_thumb,h_120,w_120';
  const version = props.job ? props.job.employer_img_v : '';
  const name = props.job ? props.job.employer_img : '';
  const imageLink = `https://res.cloudinary.com/chris-mackie/image/upload/${option}/v${version}/${name}`;
  return imageLink;
}

const getJobType = props => {
  const jobType = props.job_term === 'ft' ? 'Full-Time' : 'Part-Time';
  return '(' + jobType + ')'
}

const Job = props =>
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={{uri: getImageURL(props)}}
        style={styles.logo}
      />
    </View>
    <View style={styles.descContainer}>
      <Text style={styles.jobTitle}>
        {props.job ? props.job.role : ''}
      </Text>
      <Text style={styles.desc}>
        {props.job ? props.job.company : ''}
      </Text>
      <View style={styles.locContainer}>
        <Text style={styles.desc}>
          {props.job ? props.job.location_city : ''}
        </Text>
        <Text style={[styles.desc, styles.jobTerm]}>
          {props.job ? ' ' + getJobType(props) : ''}
        </Text>
      </View>
      <Text style={styles.desc}>
        {props.job ? '£' + props.job.rate + ' ' + props.job.rate_type : ''}
      </Text>
    </View>
  </View>;

const shadowProps = {
  ios: {
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#DADADA',
    shadowOpacity: 0.5
  },
  android: {
    elevation: 2
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '90%',
    height: 185,
    backgroundColor: '#FFF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ...shadowProps
    })
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ...shadowProps
    })
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain'
  },
  descContainer: {
    height: 120,
    width: 200,
    padding: 8,
    paddingLeft: 15
  },
  jobTitle: {
    color: colors.FONTPRIMARY,
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 15
  },
  desc: {
    color: colors.FONTMEDIUM,
    marginBottom: 1
  },
  locContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  jobTerm: {
    fontSize: 10
  }
});
export default Job;
