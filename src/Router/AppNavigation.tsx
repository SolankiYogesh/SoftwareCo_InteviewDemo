import {createNativeStackNavigator} from "@react-navigation/native-stack"
import React from "react"

import {Screen} from "@/Helpers"
import * as View from "@/Screens"

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screen.LoginScreen} component={View.LoginScreen} />
      <Stack.Screen name={Screen.UserListScreen} component={View.UserListScreen} />
      <Stack.Screen name={Screen.UserDetailsScreen} component={View.UserDetailsScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation
