import {StyleSheet} from "react-native"

import {heightPx, scale, verticalScale, widthPx} from "@/Helpers/Responsive"
import {Colors, Fonts} from "@/Theme"

export default StyleSheet.create({
  contentContainerStyle: {
    margin: scale(15)
  },
  headerViewStyle: {
    alignItems: "center",
    backgroundColor: Colors.whiteShadeF5,
    flex: 1,
    justifyContent: "center",
    maxHeight: heightPx(15)
  },
  label: {
    color: Colors.greyShade33,
    fontFamily: Fonts.ThemeBold,
    marginBottom: verticalScale(5)
  },
  value: {
    color: Colors.greyShade55,
    fontFamily: Fonts.ThemeMedium,
    marginBottom: verticalScale(15)
  },
  webViewStyle: {
    height: heightPx(40),
    width: widthPx(100)
  }
})
