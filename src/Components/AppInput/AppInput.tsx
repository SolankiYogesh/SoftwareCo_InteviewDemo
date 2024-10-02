import React, {forwardRef, useEffect, useState} from "react"
import {TextInput, type TextInputProps, TouchableOpacity, View} from "react-native"
import {SvgFromXml} from "react-native-svg"

import {SVGByteCode} from "@/Helpers"
import {Colors} from "@/Theme"

import styles from "./styles"

export type AppInputProps = {
  isPassword?: boolean
} & TextInputProps

export default forwardRef<TextInput, AppInputProps>((props, ref) => {
  const [isPassword, setIsPassword] = useState(false)

  useEffect(() => {
    if (props.isPassword) {
      setIsPassword(true)
    }
  }, [props.isPassword])

  return (
    <View style={styles.inputContainer}>
      <TextInput
        ref={ref}
        secureTextEntry={isPassword}
        {...props}
        placeholderTextColor={Colors.greyShade84}
        selectionColor={Colors.blue}
        style={styles.input}
      />

      {props?.isPassword && (
        <TouchableOpacity
          style={styles.eyeContainer}
          onPress={() => {
            setIsPassword(!isPassword)
          }}
        >
          <SvgFromXml xml={isPassword ? SVGByteCode.eye : SVGByteCode.closeEye} />
        </TouchableOpacity>
      )}
    </View>
  )
})
