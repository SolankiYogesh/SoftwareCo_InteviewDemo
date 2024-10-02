import {useCallback, useEffect, useState} from "react"
import {Alert} from "react-native"

import {Screens} from "@/Helpers"
import {useNavigation} from "@/Hooks"
import {APICall, EndPoints} from "@/Network"

export default () => {
  const [users, setUsers] = useState<UserType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const navigation = useNavigation()

  const onPressUserItem = useCallback(
    (item: UserType) => {
      navigation.navigate(Screens.UserDetailsScreen, {
        id: item._id
      })
    },
    [navigation]
  )

  const getUsers = useCallback(() => {
    APICall(
      "get",
      {
        skip: 1,
        limit: 10
      },
      EndPoints.userList
    )
      .then((resp: any) => {
        if (resp.status === 200 && resp.data?.data) {
          setUsers(resp.data?.data)
        } else {
          Alert.alert("Something went wrong")
        }
      })
      .catch(() => {
        Alert.alert("Something went wrong")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {users, isLoading, onPressUserItem}
}
