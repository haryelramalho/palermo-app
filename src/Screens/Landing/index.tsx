import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import SplashIcon from '../../Assets/Svgs/splash-icon.svg';
import theme from '../../Global/Styles/theme';

export default function Landing() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.purple.shadeOne}
      />

      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: theme.colors.purple.shadeOne,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SplashIcon />
      </SafeAreaView>
    </>
  );
}
