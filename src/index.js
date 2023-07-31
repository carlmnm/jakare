
import InitialPage from './InitialPage';
import Home from './Home';

import { createAppContainer, createStackNavigator } from 'react-navigation';


const Routes = createAppContainer(
  createStackNavigator({
    InitialPage: InitialPage,
    Home: Home,
  })
);

export default Routes;