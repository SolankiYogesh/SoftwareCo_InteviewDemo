import {useCallback, useEffect, useState} from "react"
import {Alert} from "react-native"

import type {Screens} from "@/Helpers"
import {useRoute} from "@/Hooks"
import {APICall, EndPoints} from "@/Network"
export default () => {
  const {id} = useRoute<Screens.UserDetailsScreen>().params
  const [userDetails, setUserDetails] = useState<UserDetailsType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const getUserDetails = useCallback(() => {
    APICall(
      "get",
      {
        skip: 1,
        limit: 10
      },
      EndPoints.userDetails(id)
    )
      .then((resp: any) => {
        if (resp.status === 200 && resp.data?.data) {
          setUserDetails(resp.data?.data)
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
  }, [id])

  useEffect(() => {
    getUserDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return {
    isLoading,
    userDetails
  }
}
