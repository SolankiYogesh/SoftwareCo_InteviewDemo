import {CommonActions} from "@react-navigation/native"
import {useCallback, useState} from "react"
import {Alert, Keyboard} from "react-native"

import Loader from "@/Components/AppLoader/Loader"
import {Constant, Screens} from "@/Helpers"
import {useNavigation} from "@/Hooks"
import {APICall, EndPoints} from "@/Network"
import storage from "@/Redux/storage"

export default () => {
  const [userName, setUsername] = useState(__DEV__ ? "user1" : "")
  const [password, setPassword] = useState(__DEV__ ? "password" : "")
  const navigation = useNavigation()
  const onPressLogin = useCallback(() => {
    Keyboard.dismiss()
    if (!userName.trim()) {
      Alert.alert("Please enter email")
      return
    }
    if (!password.trim()) {
      Alert.alert("Please enter password")
      return
    }

    Loader.isLoading(true)
    APICall("post", {username: userName, password}, EndPoints.login)
      .then((resp: any) => {
        if (resp.status === 200 && resp.data?.token) {
          storage.set(Constant.StorageKeys.token, resp.data.token)

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: Screens.UserListScreen
                }
              ]
            })
          )
        } else {
          Alert.alert("Something went wrong")
        }
      })
      .catch(() => {
        Alert.alert("Something went wrong")
      })
      .finally(() => {
        Loader.isLoading(false)
      })
  }, [navigation, password, userName])

  return {onPressLogin, userName, password, setUsername, setPassword}
}
