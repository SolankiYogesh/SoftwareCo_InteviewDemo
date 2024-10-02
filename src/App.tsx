import {NavigationContainer} from "@react-navigation/native"
import React from "react"
import {GestureHandlerRootView} from "react-native-gesture-handler"
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/integration/react"

import {AppLoader} from "./Components"
import Loader from "./Components/AppLoader/Loader"
import {persistor, store} from "./Redux/Store"
import {AppNavigation} from "./Router"
import {CommonStyle} from "./Theme"

export default () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GestureHandlerRootView style={CommonStyle.flex}>
          <NavigationContainer>
            <AppNavigation />
            <AppLoader ref={(ref) => Loader.setLoader(ref)} />
          </NavigationContainer>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  )
}
