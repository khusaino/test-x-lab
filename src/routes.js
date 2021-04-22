import React from "react"
import {Switch, Route, Redirect} from 'react-router-dom'
import { Main } from "./components/Main";
import { Auth } from "./components/Auth";


export  const useRoutes = isAuthenticated =>{
  if(isAuthenticated){
    return(
      <Switch>
          <Route path="/users" exact>
            <Main/>
          </Route>
        <Redirect to="/users" />
      </Switch>
    )
  }
  return(
    <Switch>
      <Route path="/" exact >
        <Auth/>
      </Route>
      <Redirect to="/"/> 
    </Switch>
  )
}