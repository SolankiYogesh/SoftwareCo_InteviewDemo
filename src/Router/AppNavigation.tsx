import {createNativeStackNavigator} from "@react-navigation/native-stack"
import React, {useMemo} from "react"

import {Constant, Screens, StorageMMKV} from "@/Helpers"
import * as View from "@/Screens"

const Stack = createNativeStackNavigator()

export default () => {
  const isLoginUser = useMemo(() => StorageMMKV.getString(Constant.StorageKeys.token), [])
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={isLoginUser ? Screens.UserListScreen : Screens.LoginScreen}
    >
      <Stack.Screen name={Screens.LoginScreen} component={View.LoginScreen} />
      <Stack.Screen name={Screens.UserListScreen} component={View.UserListScreen} />
      <Stack.Screen name={Screens.UserDetailsScreen} component={View.UserDetailsScreen} />
    </Stack.Navigator>
  )
}
