// import React, { useState, useEffect} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Splash from './Splash/Splash';


// const Stack = createNativeStackNavigator();

// export default function Nav() {

//   const [isLoading, setIsLoading] = useState(true)


//   useEffect(() => {
//     setTimeout(() => {setIsLoading(false)}, 1000)
//   }, []);

  

//   if(isLoading){
//     return <Splash/>
//   }

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="TabNav" component={Home}/>
//       </Stack.Navigator>
//     </NavigationContainer>
// );
// }

