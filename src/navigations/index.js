import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { Text } from 'react-native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';

const AppNavContainer = _ => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default AppNavContainer;