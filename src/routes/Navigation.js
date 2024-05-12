import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';
import RegisterScreen from '../screens/Register';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"  screenOptions={{
            cardStyle: { backgroundColor: '#2D3033' }
        }}> 
        <Stack.Screen name="Login" component={ LoginScreen } options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={ HomeScreen } options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={ RegisterScreen } options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
