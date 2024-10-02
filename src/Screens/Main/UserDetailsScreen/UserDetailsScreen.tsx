import {ScrollView, Text, View} from "react-native"
import WebView from "react-native-webview"

import {AppContainer, LoadingView, TitleTextView} from "@/Components"
import {heightPx} from "@/Helpers/Responsive"
import {Colors, CommonStyle} from "@/Theme"

import styles from "./styles"
import useUserDetails from "./useUserDetails"

export default () => {
  const {isLoading, userDetails} = useUserDetails()

  return (
    <AppContainer topBackgroundColor={Colors.whiteShadeF5}>
      <View style={styles.headerViewStyle}>
        <TitleTextView>Details</TitleTextView>
      </View>
      {isLoading ? (
        <LoadingView />
      ) : userDetails ? (
        <ScrollView style={CommonStyle.flex} contentContainerStyle={styles.contentContainerStyle}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{userDetails.name}</Text>

          <Text style={styles.label}>Father Name:</Text>
          <Text style={styles.value}>{userDetails.otherDetails.father}</Text>

          <Text style={styles.label}>Father Name:</Text>
          <Text style={styles.value}>{userDetails.otherDetails.mother}</Text>

          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{userDetails.mobile}</Text>

          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{userDetails.address}</Text>
          <View style={CommonStyle.flex}>
            <WebView
              source={{
                html: `<iframe   style="border:0; width:100%; height:${heightPx(60)}px;" 
              allowfullscreen  src="https://www.google.com/maps?q=${userDetails.address}&output=embed"></iframe>`
              }}
              style={styles.webViewStyle}
            />
          </View>
        </ScrollView>
      ) : (
        <View style={CommonStyle.centerFlex}>
          <TitleTextView>No Data Found</TitleTextView>
        </View>
      )}
    </AppContainer>
  )
}
