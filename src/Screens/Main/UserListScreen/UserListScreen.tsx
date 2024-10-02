import React, {useCallback, useMemo} from "react"
import {FlatList, StatusBar, View} from "react-native"

import {AppContainer, LoadingView, TitleTextView} from "@/Components"
import {Colors, CommonStyle} from "@/Theme"

import UserItem from "./Components/UserItem"
import styles from "./styles"
import useUserList from "./useUserList"

export default () => {
  const {isLoading, onPressUserItem, users} = useUserList()

  const renderItem = useCallback(
    ({item}: ListItem<any>) => <UserItem onPress={() => onPressUserItem(item)} item={item} />,
    [onPressUserItem]
  )

  const renderSeparator = useMemo(() => {
    return <View style={styles.separator} />
  }, [])

  return (
    <AppContainer topBackgroundColor={Colors.whiteShadeF5}>
      <StatusBar backgroundColor={Colors.whiteShadeF5} animated />
      <View style={styles.headerViewStyle}>
        <TitleTextView>List</TitleTextView>
      </View>
      {isLoading ? (
        <LoadingView />
      ) : users.length > 0 ? (
        <FlatList
          data={users}
          ItemSeparatorComponent={() => renderSeparator}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={renderItem}
          style={CommonStyle.flex}
        />
      ) : (
        <View style={CommonStyle.centerFlex}>
          <TitleTextView>No Data Found</TitleTextView>
        </View>
      )}
    </AppContainer>
  )
}
