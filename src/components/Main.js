import { useCallback, useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { useHttp } from "../hooks/httpHook"
import { usersData } from "../usersData"
import { Filter } from "./Filter"
import { Users } from "./Users"

export const Main=()=>{
  const [userList, setUserList] = useState([])
  const {request, loading} = useHttp()
  const {token} = useContext(AuthContext)
  const [modelList, setModelList] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [sortId, setSortId] = useState(false)

  // обработка запроса
  const fetchUsers = useCallback(async()=>{
    try {
      const data = await request('https://agile-garden-50413.herokuapp.com/api/users/', "GET", null,  { accept: 'application/json', 'Authorization': token,'X-CSRFToken': '6iDRUqOCcXSnKBGFFyiGdFQHDM7D71SWAp4EG7p6FgchHF75bfY3yMmrbqKpdZs6'})

      //при проблеме с запросом данные берутся с файла usersData.js
      if(data){
        setUserList(data)
        setModelList(data)
      }else{
        setUserList(usersData) 
        setModelList(usersData)
      }
  
    } catch (error) {}
  }, [token])

  useEffect(()=>{
    fetchUsers()
  }, [fetchUsers])

  // сортировка и фильтр
  const handleSearch = (event)=>{
    setSearchValue(event.target.value)
  }
  const handleSort = (event)=>{
    setSortId(event.target.checked)
  }

  const searchAndSortUsername = useCallback(()=>{
    let res = modelList.filter((elem)=>{
      return elem.username.toLowerCase().match(searchValue.toLowerCase())
    })
    if(sortId){
      res.sort((a, b) => a.id > b.id ? 1 : -1)
    }
    return res
  }, [searchValue, sortId])

  useEffect(()=>{
    setUserList(searchAndSortUsername()) 
  }, [searchAndSortUsername])



  if(loading){
    return <h3>Загрузка...</h3>
  }
  return(
    <section className="main">
            <div className="main__container container">
                <Filter onChange={handleSearch} sortId={handleSort}/>
                <Users list={userList}/>
            </div> 
        </section> 
  )
}