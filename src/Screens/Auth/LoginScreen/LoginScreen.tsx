import React from "react"
import {Image, Text, View} from "react-native"
import {KeyboardAwareScrollView} from "react-native-keyboard-controller"

import {AppButton, AppContainer, AppInput, TitleTextView} from "@/Components"
import {Images} from "@/Helpers"

import styles from "./styles"
import useLogin from "./useLogin"

export default () => {
  const {userName, onPressLogin, password, setUsername, setPassword} = useLogin()
  return (
    <AppContainer>
      <KeyboardAwareScrollView>
        <Image source={Images.authLog} />
        <View style={styles.containerStyle}>
          <TitleTextView>Login</TitleTextView>
          <View style={styles.inputViewStyle}>
            <Text style={styles.labelTextStyle}>Username</Text>
            <AppInput placeholder="Enter User Name" value={userName} onChangeText={setUsername} />
            <Text style={styles.labelTextStyle}>Password</Text>
            <AppInput placeholder="Enter Password" value={password} onChangeText={setPassword} />
          </View>
          <AppButton title="Log In" onPress={onPressLogin} />
        </View>
      </KeyboardAwareScrollView>
    </AppContainer>
  )
}
