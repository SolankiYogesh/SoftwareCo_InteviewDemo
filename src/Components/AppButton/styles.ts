import {StyleSheet} from "react-native"

import {INPUT_HEIGHT, moderateScale, scale, verticalScale} from "@/Helpers/Responsive"
import {Colors, Fonts} from "@/Theme"

export default StyleSheet.create({
  container: {
    alignSelf: "center",
    borderColor: Colors.greyShadeE0,
    borderRadius: moderateScale(15),
    borderWidth: 0,
    height: INPUT_HEIGHT,
    marginVertical: verticalScale(10),
    overflow: "hidden",
    width: "100%"
  },

  innerStyle: {
    alignItems: "center",
    columnGap: scale(10),
    flexDirection: "row",
    flex: 1,
    justifyContent: "center"
  },

  titleTextStyle: {
    fontFamily: Fonts.ThemeSemiBold,
    fontSize: moderateScale(15)
  }
})
