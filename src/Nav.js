import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Todo from './Todo/Todo';
import Profile from './Profile/Profile';

const Tab = createBottomTabNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Todo" component={Todo} />
        <Tab.Screen name="Me" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}