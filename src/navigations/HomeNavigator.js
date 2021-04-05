import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { Text, View } from 'react-native';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/routeNames';

const Contacts = () => {
  return (
    <View>
      <Text>Hi from contacts</Text>
    </View>
  )
}

const ContactDetails = () => {
  return (
    <View>
      <Text>Hi from ContactDetails</Text>
    </View>
  )
}

const CreateContact = () => {
  return (
    <View>
      <Text>Hi from CreateContact</Text>
    </View>
  )
}

const Settings = () => {
  return (
    <View>
      <Text>Hi from Settings</Text>
    </View>
  )
}

const HomeNavigator = props => {
  const HomeStack = createStackNavigator();

  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetails}></HomeStack.Screen>
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
      <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
