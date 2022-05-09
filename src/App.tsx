'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/lib/integration/react';

import { Routes } from './Routes';
import theme from './Global/Styles/theme';
import { persistor, store } from './Redux';
import Landing from './Screens/Landing';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Landing />}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
