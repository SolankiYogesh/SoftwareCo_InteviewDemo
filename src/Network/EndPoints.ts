const EndPoints = {
  login: "/login",
  userList: "/user/list",
  userDetails: (id: string) => `/user/${id}`
}

export default EndPoints
