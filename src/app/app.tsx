import * as React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {styles} from './style.app';
import {Screen1, Screen2, Screen3} from '../drawers';
import {Feed, Detail, Tests} from '../home';
import {Tab1, Tab2, Tab3} from '../tabs';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export const App = (): JSX.Element => {
  type Route = {
    route: any;
  };
  const createStackHomeScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Bottom tab" component={createMaterialBottomTabs} />
        <Stack.Screen name="Top tab" children={createMaterialTopTabs} />
      </Stack.Navigator>
    );
  };

  const createMaterialTopTabs = ({route}: Route) => {
    //const routes = route;
    const {tab1, tab2, tab3} = route.params;
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen
          name="Tab 1"
          component={Tab1}
          options={{title: tab1}}
        />
        <MaterialTopTabs.Screen
          name="Tab 2"
          component={Tab2}
          options={{title: tab2}}
        />
        <MaterialTopTabs.Screen
          name="Tab 3"
          component={Tab3}
          options={{title: tab3}}
        />
      </MaterialTopTabs.Navigator>
    );
  };

  const createMaterialBottomTabs = () => {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen name="Tab 1" component={Tab1} />
        <MaterialBottomTabs.Screen name="Tab 2" component={Tab2} />
        <MaterialBottomTabs.Screen name="Tab 3" component={Tab3} />
      </MaterialBottomTabs.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={createStackHomeScreen} />
        <Drawer.Screen name="Screen one" component={Screen1} />
        <Drawer.Screen name="Screen Two" component={Screen2} />
        <Drawer.Screen name="Screen Three" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
