/**
 * Warga App
 * https://github.com/fauzifadillah/warga
 */

import React from 'react';
import Navigator from './routes/HomeStack';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <Navigator />
    </>
  );
};

export default App;
