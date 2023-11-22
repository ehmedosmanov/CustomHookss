import { useEffect } from 'react'
import { useState } from 'react'

const useLocale = (key) => {
    const [localeData, setLocaleData] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [])

    useEffect(() => {
      localStorage.setItem(key,JSON.stringify(localeData))
    }, [localeData])

    const handleData = (text) => {
        setLocaleData([...localeData,text])
    }
    return [localeData, handleData]
}

export default useLocale