import React from 'react';
import {
  Screen_1,
  FoodForm,
  FoodList,
  PostScreen,
  RegisterScreen,
  LoginScreen,
  HomeScreen
} from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createSwitchNavigator } from '@react-navigation/compat';


const Stack = createStackNavigator();

export const NavigationScreen = (): JSX.Element => {
  const homeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
        <Stack.Screen name="Screen_1" component={Screen_1} />
        <Stack.Screen name="FoodList" component={FoodList} />
        <Stack.Screen name="FoodForm" component={FoodForm} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
      </Stack.Navigator>
    );
  };
  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    );
  };
  const RouteScreen = createSwitchNavigator({
    Auth: { screen: AuthStack },
    Home: { screen: homeStack },
  });
  const MainScreen = () => {
    return (
      <NavigationContainer>
        <RouteScreen />
        {/* <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeSack" component={homeStack} />
        </Stack.Navigator> */}
      </NavigationContainer>
    );
  };
  return <MainScreen />;
};
