import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/httpHook"

export const Auth=()=>{
  const {loading, request,  clearError} = useHttp()
  const {login} = useContext(AuthContext)
  const [usernameError, setUsernameError] = useState('')
  const [body, setBody] = useState({
    password: '',
    username: '',
  })

  
  const handleSubmit = async(event)=>{
    event.preventDefault()
   
    if(usernameError || !body.password || !body.username){
      return false
    }
    try {
      clearError()
      const data = await request('https://agile-garden-50413.herokuapp.com/api/token/login/', 'POST', body,{ accept: 'application/json'})
      login(data.auth_token)
    } catch (error) {}
  }

  const handleUsername = (event)=>{
    let value = event.target.value
    if(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/.test(value) === false){
      setUsernameError('логин не валидный')
    }else{
      setBody({
        ...body,
        [event.target.name]:value
      })
      setUsernameError('')
    }
  }
  const handlePassword = (event)=>{
    let value = event.target.value
    setBody({
      ...body,
      [event.target.name]:value
    })
  }

  return(
    <section className="auth">
      <div className="auth__container container">
        <form className="auth__form" onSubmit={handleSubmit}>

          <div className="auth__username">
            <div>{usernameError}</div>
            <input 
            className="auth__input" 
            type="text" 
            id="auth__username" 
            name='username' 
            placeholder="введите логин"
            onChange={handleUsername}/>
            <label className="auth__label" htmlFor="auth__username"></label>
          </div>    
          <div className="auth__password">
            <input 
            className="auth__input" 
            type="password" 
            id="auth__password" 
            name='password' 
            placeholder="введите пароль"
            onChange={handlePassword}/>
            <label className="auth__label" htmlFor="auth__password"></label>
          </div>
            <button className="auth__submit" type="submit" disabled={loading}>войти</button>    
        </form>
      </div>
    </section>
  )
}