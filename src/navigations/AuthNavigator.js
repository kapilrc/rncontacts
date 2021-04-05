import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { Text, View } from 'react-native';
import { LOGIN, REGISTER } from '../constants/routeNames';

const Signup = () => {
  return (
    <View>
      <Text>Hi from Signup</Text>
    </View>
  )
}

const Login = () => {
  return (
    <View>
      <Text>Hi from Login</Text>
    </View>
  )
}

const AuthNavigator = props => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={Signup}></AuthStack.Screen>
    </AuthStack.Navigator>
  )
}

export default AuthNavigator
