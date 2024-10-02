import {useMemo} from "react"
import {Image, Text, TouchableOpacity} from "react-native"

import {moderateScale} from "@/Helpers/Responsive"

import styles from "./styles"

type UserItemProps = {
  item: UserType
  onPress: () => void
}

export default ({item, onPress}: UserItemProps) => {
  const image = useMemo(() => `https://picsum.photos/id/${item._id}/200/300`, [item._id])
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: image
        }}
        borderRadius={moderateScale(6)}
        style={styles.imageStyle}
      />
      <Text style={styles.textStyle}>{item.name}</Text>
    </TouchableOpacity>
  )
}
