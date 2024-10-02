const EndPoints = {
  login: "/login",
  userList: "/user/list",
  userDetails: (id: number) => `/user/${id}`
}

export default EndPoints
