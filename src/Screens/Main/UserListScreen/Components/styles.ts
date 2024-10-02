import {StyleSheet} from "react-native"

import {moderateScale, scale, verticalScale} from "@/Helpers/Responsive"
import {Colors, Fonts} from "@/Theme"

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    elevation: 5,
    flexDirection: "row",
    padding: scale(10),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  imageStyle: {
    borderColor: Colors.greyShadeB6,
    borderWidth: 1,
    height: verticalScale(80),
    width: verticalScale(80)
  },
  textStyle: {
    alignSelf: "center",
    color: Colors.black,
    flex: 1,
    fontFamily: Fonts.ThemeSemiBold,
    fontSize: moderateScale(18),
    textAlign: "center"
  }
})
