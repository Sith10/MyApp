import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
//import Test from '../screen/screen_1';
import {NavigationScreen} from './NavigationScreen';

import store from '../redux/stores/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
