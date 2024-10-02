import type {TextProps} from "react-native"
import {Text} from "react-native"

import styles from "./styles"

export default (props: TextProps) => {
  return <Text style={styles.textStyle}>{props.children}</Text>
}
