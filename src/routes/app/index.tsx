import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '@Pages/Home';
import Chapters from '@Pages/Chapters';

const {Navigator, Screen} = createNativeStackNavigator();

const AuthRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      contentStyle: {
        backgroundColor: '#403F4C',
      },
    }}>
    <Screen name="Home" component={Home} />
    <Screen
      name="Chapters"
      //@ts-ignore
      component={Chapters}
      options={{
        headerShown: true,
        title: 'Capitulos',
        headerTitle: 'Capitulos',
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}
    />
  </Navigator>
);

export default AuthRoutes;
