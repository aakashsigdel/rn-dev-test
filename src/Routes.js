import { StackNavigator } from 'react-navigation';

import Home from './containers';
import Login from './containers/Login';
import App from './containers/App';

const Routes = StackNavigator({
  home: { screen: Home },
  app: { screen: App },
  login: { screen: Login },
}, {
  cardStyle: {backgroundColor: 'white'}
});

export default Routes;
