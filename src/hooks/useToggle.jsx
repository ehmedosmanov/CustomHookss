import { useState } from "react";

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (logic="eks") => {
    if (logic == "eks") {
        setIsOpen(!isOpen)
        return
    }
    if (logic) {
        setIsOpen(true)
    }else{
        setIsOpen(false)
        
    }
  }

  return {isOpen, handleToggle}
}

export default useToggle