import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
       <header>  
            <Header />
       </header>
       
      <Outlet />
       
   
     
    </div>
  )
}
export default AdminLayout;