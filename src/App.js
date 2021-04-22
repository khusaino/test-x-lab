import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { Header } from "./components/Header";
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/authHook';
import { useRoutes } from './routes';


function App() {
  const {login, logout, token} = useAuth()
  const isAuthenticated = !!token
  const route = useRoutes(isAuthenticated)

 
  return (
    <AuthContext.Provider value={{login, logout, isAuthenticated, token}}>
    <div className="wrapper">
      <BrowserRouter>
      <Header/>
        {route}
      </BrowserRouter> 
    </div>
    </AuthContext.Provider>
  );
}

export default App;
