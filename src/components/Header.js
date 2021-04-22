import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const Header=()=>{
 const {isAuthenticated, logout} = useContext(AuthContext)
 
const logoutHandler = async()=>{
  logout()
}

 const showLink =()=>{
   if(isAuthenticated){
     return <NavLink className="logout" to="/" onClick={logoutHandler}> Выйти</NavLink>
   }

 }

  return(
    <header className="header">
      <div className="header__container container">
        {showLink()}
      </div>
    </header>
  )
}