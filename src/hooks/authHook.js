import {  useEffect, useState } from "react"

const storageKey = 'userToken'

export const useAuth = () =>{
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)

  const login=(token)=>{
    setToken(token)

    localStorage.setItem(storageKey, JSON.stringify({userToken: token}))
  }

  const logout=()=>{
    setToken(null)

    localStorage.removeItem(storageKey)
  }

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem(storageKey))
    if(data && data.userToken){
      login(data.userToken)
    }
    setReady(true)
  }, [])

  return{login, logout, token, ready}
}