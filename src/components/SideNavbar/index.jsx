import {useState} from 'react'
import useToggle from '../../hooks/useToggle'

const SideNavbar = () => {
  const {isOpen,handleToggle} = useToggle()

  return (
    <div className='sidebar'>
       <ul className={`nav ${isOpen ? 'flex' : 'none'}`}>
        <li className="sidebar-item">
          <a href="#">Home</a>
        </li>
        <li className="sidebar-item">
          <a href="#">Home</a>
        </li>
        <li className="sidebar-item">
          <a href="#">Home</a>
        </li>
        <li className="sidebar-item">
          <a href="#">Home</a>
        </li>
        <li className="sidebar-item">
          <a href="#">Home</a>
        </li>
      </ul>
      <div className="close">
        <span onClick={() => handleToggle(true)}>+</span>
      </div>
    </div>
  )
}

export default SideNavbar