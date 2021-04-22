import { createContext } from "react";

const func=()=>{}
export const AuthContext = createContext({
  login: func(),
  logout: func(),
  isAuthenticated: false, 
})