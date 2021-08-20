import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Splash from './Splash/Splash';

import Home from './Home/Home';
import Todo from './Todo/Todo';
import Profile from './Profile/Profile';

const Tab = createBottomTabNavigator();

export default function TabNav() {

  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarInactiveTintColor: '#555555',
          tabBarActiveTintColor: '#FF9A9A',
        }}
        >
        <Tab.Screen name="Todo" component={Todo} options={{headerShown: false}}/>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Me" component={Profile} options={{headerShown: false}} />
      </Tab.Navigator>
  );
}