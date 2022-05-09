/* eslint-disable no-unused-vars */
import React from 'react';

import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';

import { AppRoutes, AppStackNavigatorParams } from './app.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackNavigatorParams {}
  }
}

export function Routes() {
  const navigationRef = useNavigationContainerRef();

  useReduxDevToolsExtension(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <AppRoutes />
    </NavigationContainer>
  );
}
