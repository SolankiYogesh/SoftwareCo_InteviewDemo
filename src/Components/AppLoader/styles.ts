import {StyleSheet} from "react-native"

import {moderateScale, verticalScale} from "@/Helpers/Responsive"
import {Colors, CommonStyle} from "@/Theme"

export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: moderateScale(15),
    elevation: 6,
    height: verticalScale(100),
    justifyContent: "center",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    width: verticalScale(100)
  },
  modalStyle: {
    backgroundColor: Colors.backdrop,
    ...StyleSheet.absoluteFillObject,
    ...CommonStyle.centerFlex,
    display: "none",
    zIndex: 999999999999999
  }
})
