export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN_OPEN":
      return {
        ...state,
        login: true
      }
    case "LOGIN_CLOSE":
      return {
        ...state,
        login: false
      }
    case "SIGNUP_OPEN":
      return {
        ...state,
        signup: true
      }
    case "SIGNUP_CLOSE":
      return {
        ...state,
        signup: false
      }
    case "LOGIN_TO_SIGNUP":
      return {
        ...state,
        login: false,
        signup: true
      }
    case "SIGNUP_TO_LOGIN":
      return {
        ...state,
        login: true,
        signup: false
      }
  }
}
