import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '@Pages/Home';

const {Navigator, Screen} = createNativeStackNavigator();

const AuthRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: '#fff',
      },
    }}>
    <Screen name="Home" component={Home} />
  </Navigator>
);

export default AuthRoutes;
