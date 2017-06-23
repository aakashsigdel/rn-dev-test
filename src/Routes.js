import { StackNavigator } from 'react-navigation';

import App from './containers';
import Login from './containers/Login';

const Routes = StackNavigator({
  login: { screen: Login },
  home: { screen: App },
});

export default Routes;
