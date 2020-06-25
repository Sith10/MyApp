import React from 'react';
import {Screen_1, FoodForm, FoodList} from '../screens';
//import Screen_1 from '../screen/screen_1';
//import FoodForm from '../screen/foodForm';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import FoodForm from '../screen/foodForm';
// import FoodList from '../screen/foodList';
const Stack = createStackNavigator();

export const NavigationScreen = (): JSX.Element => {
  const homeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Screen_1" component={Screen_1} />
        <Stack.Screen name="FoodList" component={FoodList} />
        <Stack.Screen name="FoodForm" component={FoodForm} />
      </Stack.Navigator>
    );
  };
  const MainScreen = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomeSack" component={homeStack} />
        </Stack.Navigator>
        {/* <Stack.Navigator>
            <Stack.Screen name="FoodForm" component={FoodForm} />
            <Stack.Screen name="Screen_1" component={Screen_1} />
            <Stack.Screen name="FoodList" component={FoodList} />
          </Stack.Navigator> */}
      </NavigationContainer>
    );
  };
  return <MainScreen />;
  //   return (
  //     <NavigationContainer>
  //       {/* <Stack.Navigator screenOptions={{headerShown: false}}>
  //           <Stack.Screen name="HomeSack" component={homeStack} />
  //         </Stack.Navigator> */}
  //       <Stack.Navigator>
  //         <Stack.Screen name="Screen_1" component={Screen_1} />
  //         <Stack.Screen name="FoodForm" component={FoodForm} />
  //         {/* <Stack.Screen name="FoodList" component={FoodList} /> */}
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   );
};
