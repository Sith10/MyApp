import React from 'react';
import {Screen_1, FoodForm, FoodList, PostScreen} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const NavigationScreen = (): JSX.Element => {
  const homeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Screen_1" component={Screen_1} />
        <Stack.Screen name="FoodList" component={FoodList} />
        <Stack.Screen name="FoodForm" component={FoodForm} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
      </Stack.Navigator>
    );
  };
  const MainScreen = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeSack" component={homeStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  return <MainScreen />;
};
