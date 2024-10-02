type ResponseTypeAXIOS<T> = {
  status: number
  data: T
}
type RootStackParamList = {
  LoginScreen: undefined
  UserListScreen: undefined
  UserDetailsScreen: undefined
}
type AppLoaderRefType = {
  showLoader: (state: boolean) => void
}
