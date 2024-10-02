import {NavigationContainer} from "@react-navigation/native"
import React from "react"
import {GestureHandlerRootView} from "react-native-gesture-handler"
import {KeyboardProvider} from "react-native-keyboard-controller"

import {AppLoader} from "./Components"
import Loader from "./Components/AppLoader/Loader"
import {AppNavigation} from "./Router"
import {CommonStyle} from "./Theme"

export default () => {
  return (
    <KeyboardProvider>
      <GestureHandlerRootView style={CommonStyle.flex}>
        <NavigationContainer>
          <AppNavigation />
          <AppLoader ref={(ref) => Loader.setLoader(ref)} />
        </NavigationContainer>
      </GestureHandlerRootView>
    </KeyboardProvider>
  )
}
