import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useLocale from '../../hooks/useLocale'

const Local = () => {
    //const [todo, setTodo] = useState(localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : [])
    const [localeData, handleData] = useLocale('tood')
    // useEffect(() => {
    
    //     localStorage.setItem('todo', JSON.stringify(todo))
    // }, [todo])
    
    // const addTodo = () => {
    //     setTodo([...todo, 'salam'])
    // }
    return (
    <div>
        {console.log(localeData)}
        <button onClick={()=>handleData("salam")}>+</button>
        <div>
            {localeData.map(x => <li>{x}</li>)}
        </div>
    </div>
  )
}

export default Local