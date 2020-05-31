import React, {Component} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import Moment from 'moment';

import {Common, Task} from '../styles';

import StatusIndicator from '../components/status-indicator';
import UsersThumbnail from '../components/users-thumbnail';

import {TaskData} from '../Constants';

class TaskScreen extends Component {
  getTaskStatus = (task) => {
      const isCompleted = task.statusId === 3;
      const isOverDue = task.statusId === 4;
      return (
        <Text style={[Task.statusHeader, {color: isOverDue ? 'red' : '#7c7c7c'}]}>
          {isCompleted ? 'Completed By:' : 'Due On'} 
          <Text style={[Task.statusValue , {color: isOverDue ? 'red' : '#404040'}]}>{isCompleted ? task.completedBy : Moment(task.dueDate).format('DD [/] MM [/] YYYY h:mm:a')}</Text>
        </Text>
      )
  }
  renderCard = (task) => {
    return (
      <View style={Common.card}>
        <View style={Task.statusContainer}>
          <StatusIndicator statusId={task.statusId} total={task.total} completed={task.completed}/>
          {task.users && <UsersThumbnail users={task.users}/>}
        </View>
        <Text style={Common.title}>{task.title}</Text>
        {this.getTaskStatus(task)}
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView style={Common.container}>
        <FlatList
          data={TaskData}
          renderItem={({ item }) => this.renderCard(item)}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
};

export default TaskScreen;