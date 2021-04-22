import { useEffect, useState } from "react"

export const Users = ({list}) => {
  const [width, setWidth]= useState()

  const getDate=(stringDate)=>{
    let date = new Date(stringDate)
    return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
  }

  const updateDimensions = () =>{
    setWidth(window.innerWidth)
    console.log(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize', updateDimensions)
    return function(){
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  if(width< 575){
    return(
      <div className="main__users users">
      <table className="users__table">
        <thead>
          <tr>
            <th>Иден. №</th>
            <th>логин</th>
            <th>последний вход</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((elem)=>{
              return(
                <tr key={elem.id}>
                  <td>{elem.id}</td>
                  <td>{elem.username}</td>
                  <td>{getDate(elem.last_login)}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    )
  }
  if(width< 1300){
    return(
      <div className="main__users users">
      <table className="users__table">
        <thead>
          <tr>
            <th>Иден. №</th>
            <th>логин</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>последний вход</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((elem)=>{
              return(
                <tr key={elem.id}>
                  <td>{elem.id}</td>
                  <td>{elem.username}</td>
                  <td>{elem.first_name}</td>
                  <td>{elem.last_name}</td>
                  <td>{getDate(elem.last_login)}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    )
  }

  return(
    <div className="main__users users">
      <table className="users__table">
        <thead>
          <tr>
            <th>Иден. №</th>
            <th>логин</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Почта</th>
            <th>суперпользователь</th>
            <th>персонал</th>
            <th>астивный</th>
            <th>присоеденился</th>
            <th>последний вход</th>
            <th>группы</th>
            <th>права пользователя</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((elem)=>{
              return(
                <tr key={elem.id}>
                  <td>{elem.id}</td>
                  <td>{elem.username}</td>
                  <td>{elem.first_name}</td>
                  <td>{elem.last_name}</td>
                  <td>{elem.email}</td>
                  <td>{elem.is_superuser?'да':"нет"}</td>
                  <td>{elem.is_staff?'да':"нет"}</td>
                  <td>{elem.is_active?'да':"нет"}</td>
                  <td>{getDate(elem.date_joined)}</td>
                  <td>{getDate(elem.last_login)}</td>
                  <td>{elem.groups.map((item,i)=>{
                    return <li key={i}>{item}</li>
                  })}</td>
                  <td>{elem.user_permissions.map((item, i)=>{
                    return <li key={i}>{item}</li>
                   })}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}