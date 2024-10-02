import React, {memo} from "react"
import type {TouchableOpacityProps} from "react-native"
import {type StyleProp, Text, type TextStyle, TouchableOpacity, type ViewStyle} from "react-native"

import styles from "./styles"

type AppButtonProps = {
  title?: string
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  onPress?: () => void
  disabled?: boolean
} & TouchableOpacityProps

export default memo((props: AppButtonProps) => {
  const {style = {}, textStyle = {}, title = "", ...rest} = props

  return (
    <TouchableOpacity style={[styles.innerStyle, style]} {...rest}>
      <Text style={[styles.titleTextStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
})
