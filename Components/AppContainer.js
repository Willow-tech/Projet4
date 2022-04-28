import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login'
import Inscrire from './Screens/Inscrire'
import Home from './Screens/Home'
import Jouet from './Screens/Jouet'
import Vendre from './Screens/Vendre'
import Chat from './Screens/Chat'
import Settings from './Screens/Settings'

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Inscrire" component={Inscrire} />
        <Stack.Screen name="Home" component={Home} />
		<Stack.Screen name="Jouet" component={Jouet} />
		<Stack.Screen name="Vendre" component={Vendre} />
		<Stack.Screen name="Chat" component={Chat} />
		<Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




