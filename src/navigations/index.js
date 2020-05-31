import {createAppContainer, createSwitchNavigator} from 'react-navigation';

// import AppNavigator from './app-nav';
import TaskScreen from '../screens/task';

const RootNavigator = createSwitchNavigator(
  {
    Task: TaskScreen,
  },
  {
    initialRouteName: 'Task',
  },
);

export default createAppContainer(RootNavigator);