import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Splash from './Splash/Splash';

import Home from './Home';
import Todo from './Todo/Todo';
import Profile from './Profile/Profile';

const Tab = createBottomTabNavigator();

export default function TabNav() {
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {setIsLoading(false)}, 1000)
  }, []);

  
  if(isLoading){
    return <Splash/>
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Tab.Screen name="Todo" component={Todo} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Me" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}