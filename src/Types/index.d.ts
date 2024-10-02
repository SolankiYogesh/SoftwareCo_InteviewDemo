type ResponseTypeAXIOS<T> = {
  status: number
  data: T
}
type RootStackParamList = {
  LoginScreen: undefined
  UserListScreen: undefined
  UserDetailsScreen: {
    id: number
  }
}
type AppLoaderRefType = {
  showLoader: (state: boolean) => void
}
type ListItem<T> = {
  item: T
  index: number
}
