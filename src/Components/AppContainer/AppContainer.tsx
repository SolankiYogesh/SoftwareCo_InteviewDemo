import React from "react"
import {SafeAreaView, StatusBar, View} from "react-native"

import {Colors, CommonStyle} from "@/Theme"

import styles from "./styles"

type AppContainerProps = {
  isTopSafeArea?: boolean
  isBottomSafeArea?: boolean
  children: React.ReactNode
  topBackgroundColor?: string
}

export default (props: AppContainerProps) => {
  const {
    isTopSafeArea = true,
    isBottomSafeArea,
    children,
    topBackgroundColor = Colors.white
  } = props
  const TopComponent = isTopSafeArea ? SafeAreaView : View
  const BottomComponent = isBottomSafeArea ? SafeAreaView : View

  return (
    <View style={CommonStyle.flex}>
      <TopComponent
        style={{
          backgroundColor: topBackgroundColor
        }}
      />
      <StatusBar barStyle={"dark-content"} backgroundColor={Colors.white} />
      <View style={styles.container}>{children}</View>
      <BottomComponent />
    </View>
  )
}
