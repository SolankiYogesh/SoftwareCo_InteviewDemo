import {StyleSheet} from "react-native"

import {heightPx, scale, verticalScale} from "@/Helpers/Responsive"
import {Colors} from "@/Theme"

export default StyleSheet.create({
  contentContainerStyle: {
    margin: scale(10),
    paddingBottom: verticalScale(50)
  },
  headerViewStyle: {
    alignItems: "center",
    backgroundColor: Colors.whiteShadeF5,
    flex: 1,
    justifyContent: "center",
    maxHeight: heightPx(15)
  },
  separator: {
    margin: scale(5)
  }
})
