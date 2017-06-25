import { StackNavigator } from 'react-navigation';

import Home from './containers';
import Login from './containers/Login';
import Jobs from './containers/Jobs';

const Routes = StackNavigator({
  home: { screen: Home },
  jobs: { screen: Jobs },
  login: { screen: Login },
}, {
  cardStyle: {backgroundColor: 'white'}
});

export default Routes;
