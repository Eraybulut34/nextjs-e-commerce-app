import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

interface authContextType {
  login: boolean;
  signup: boolean;
}

const AuthContext: any = createContext<authContextType | null>(null);

export const AuthProvider = ({ children }: any) => {
  const initialState: authContextType = {
    login: false,
    signup: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
