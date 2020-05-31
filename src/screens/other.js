import React from 'react';
import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

const OtherScreen = ({navigation}) => (
  <SafeAreaView>
    <TouchableHighlight onPress={() => navigation.navigate('Task')}>
      <Text>Go to home</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default OtherScreen;