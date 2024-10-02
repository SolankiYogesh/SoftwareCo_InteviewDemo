import {StyleSheet} from "react-native"

import {moderateScale} from "@/Helpers/Responsive"
import {Colors, Fonts} from "@/Theme"

export default StyleSheet.create({
  textStyle: {
    color: Colors.black,
    fontFamily: Fonts.ThemeSemiBold,
    fontSize: moderateScale(26)
  }
})
