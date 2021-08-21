import React, { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './Splash/Splash';
import TabNav from './TabNav';
import SignUp from './Login/SignUp';
import NickName from './Login/NickName';
import RandomTodo from './Todo/RandomTodo';


const Stack = createNativeStackNavigator();

export default function Nav() {

  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {setIsLoading(false)}, 1000)
  }, []);

  

  if(isLoading){
    return <Splash/>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "SignUp" component={SignUp}/>
        <Stack.Screen name = "NickName" component={NickName}/>
        <Stack.Screen name="TabNav" component={TabNav}/>
        <Stack.Screen name="RandomTodo" component={RandomTodo}/>
      </Stack.Navigator>
    </NavigationContainer>
);
}

