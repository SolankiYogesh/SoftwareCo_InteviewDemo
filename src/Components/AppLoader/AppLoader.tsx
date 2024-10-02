import React, {forwardRef, useImperativeHandle, useRef} from "react"
import {ActivityIndicator, View} from "react-native"

import {Colors} from "@/Theme"

import styles from "./styles"

export default forwardRef<AppLoaderRefType>((_, ref) => {
  const viewRef = useRef<View>(null)

  useImperativeHandle(ref, () => ({
    showLoader(state: boolean) {
      viewRef.current?.setNativeProps({
        style: {
          display: state ? "flex" : "none"
        }
      })
    }
  }))

  return (
    <View ref={viewRef} style={styles.modalStyle}>
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={Colors.blue} />
      </View>
    </View>
  )
})
