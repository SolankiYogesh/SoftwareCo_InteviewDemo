import {StyleSheet} from "react-native"

import {moderateScale, scale, verticalScale} from "@/Helpers/Responsive"
import {Colors, Fonts} from "@/Theme"

export default StyleSheet.create({
  containerStyle: {
    paddingHorizontal: scale(15),
    paddingVertical: scale(40),
    rowGap: verticalScale(40)
  },
  inputViewStyle: {
    rowGap: verticalScale(8)
  },
  labelTextStyle: {
    color: Colors.greyShade84,
    fontFamily: Fonts.ThemeSemiBold,
    fontSize: moderateScale(14)
  }
})
