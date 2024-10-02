import {StyleSheet} from "react-native"

import {heightPx, INPUT_HEIGHT, moderateScale, scale, verticalScale} from "@/Helpers/Responsive"
import {Colors, Fonts} from "@/Theme"
export default StyleSheet.create({
  eyeContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    color: Colors.black,
    flex: 1,
    fontFamily: Fonts.ThemeRegular,
    fontSize: moderateScale(15),
    height: INPUT_HEIGHT,
    zIndex: 0
  },

  inputContainer: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderColor: Colors.greyShadeE0,
    borderRadius: moderateScale(10),
    borderWidth: 1,
    flexDirection: "row",
    height: INPUT_HEIGHT,
    padding: scale(10),
    width: "100%",
    zIndex: 0
  },
  multiStyle: {
    height: heightPx(40),
    paddingTop: verticalScale(15),
    textAlignVertical: "top",
    zIndex: 0
  },
  parentStyle: {
    justifyContent: "center",
    marginVertical: verticalScale(12)
  }
})
