import {createBottomTabNavigator} from 'react-navigation-tabs';

import TaskScreen from '../screens/task';
import OtherScreen from '../screens/other';

const TabNavigatorConfig = {
  initialRouteName: 'Task',
  header: null,
  headerMode: 'none',
};

const RouteConfigs = {
  Task:{
    screen:TaskScreen,
  },
  Other:{
    screen:OtherScreen,
  },
};

const AppNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

export default AppNavigator;