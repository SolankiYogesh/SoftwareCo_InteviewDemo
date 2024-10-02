type UserType = {
  _id: number
  mobile: number
  name: string
  username: string
}
type UserDetailsType = {
  _id: number
  address: string
  mobile: number
  name: string
  otherDetails: {
    father: string
    mother: string
  }
  username: string
}
