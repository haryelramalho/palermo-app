import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../Screens/Landing';
import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
import CheckoutSuccess from '../Screens/CheckoutSuccess';

export type AppStackNavigatorParams = {
  Landing: undefined;
  Home: undefined;
  Cart: undefined;
  CheckoutSuccess: undefined;
};

const Stack = createStackNavigator<AppStackNavigatorParams>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Landing" component={Landing} />

      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Cart" component={Cart} />

      <Stack.Screen name="CheckoutSuccess" component={CheckoutSuccess} />
    </Stack.Navigator>
  );
}
