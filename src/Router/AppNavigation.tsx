import {createNativeStackNavigator} from "@react-navigation/native-stack"
import React from "react"

import {Screens} from "@/Helpers"
import * as View from "@/Screens"

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.LoginScreen} component={View.LoginScreen} />
      <Stack.Screen name={Screens.UserListScreen} component={View.UserListScreen} />
      <Stack.Screen name={Screens.UserDetailsScreen} component={View.UserDetailsScreen} />
    </Stack.Navigator>
  )
}
