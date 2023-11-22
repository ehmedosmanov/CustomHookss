import {useState} from 'react'

const useCounter = (quant) => {
    const [count, setCount] = useState(quant)
    const inc = () => {
        setCount(count + 1)
    }

    const dec = () => {
        setCount(count - 1)
    }

    const res = () => {
        setCount(0)
    }
    return [count, inc, dec, res]
}

export default useCounter