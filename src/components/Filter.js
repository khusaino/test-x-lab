
export const Filter =(props)=>{

  return(
    <div className="main__filter">
      <div className="main__search search">
        <input type="text" className="search__nickname" placeholder="поиск по логину" onChange={props.onChange}/>
      </div>
      <div className="main__sort sort">
        <label htmlFor="sort--id" className="sort__text">
          <input type="checkbox" id="sort--id" onChange={props.sortId}/>
          Сортировать по иден. №
        </label>
      </div>
    </div>
  )
}