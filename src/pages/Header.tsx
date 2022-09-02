import React from 'react'
import {NavLink} from 'react-router-dom'
type Props = {}

const Header = (props: Props) => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Admin Page</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
       
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mã xác thực
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          
            <li><NavLink className="dropdown-item" to="/admin/addcode">Thêm code</NavLink></li>
            <li><NavLink className="dropdown-item" to={`/admin/`}>Danh sách code</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Key
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          
            <li><NavLink className="dropdown-item" to="/admin/addkey">Thêm key</NavLink></li>
            <li><NavLink className="dropdown-item" to={`/admin/listkey`}>Danh sách keys</NavLink></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Token
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><NavLink className="dropdown-item" to={`/admin/list`}>Danh sách Token</NavLink></li>
         
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Header