import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '@Pages/Home';
import Chapters from '@Pages/Chapters';
import ChapterEdit from '@Pages/ChapterEdit';

const {Navigator, Screen} = createNativeStackNavigator();

const AuthRoutes = () => (
  <Navigator
    screenOptions={{
      contentStyle: {
        backgroundColor: '#403F4C',
      },
    }}>
    <Screen
      name="Home"
      options={{
        headerShown: true,
        title: 'Livros',
        headerTitle: 'Livros',
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}
      component={Home}
    />
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
    <Screen
      name="ChapterDescription"
      //@ts-ignore
      component={ChapterEdit}
      options={{
        headerShown: true,
        title: 'Anotação',
        headerTitle: 'Anotação',
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}
    />
  </Navigator>
);

export default AuthRoutes;
