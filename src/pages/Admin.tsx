import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from './Header'
import {NavLink} from 'react-router-dom'

type Props = {}

const AdminPage = (props: Props) => {
    const [code, setCode] = useState<any[]>([])
        useEffect(() => {
            const getCode = async  () => {
               try {
                const {data} = await axios.get("https://buylike.onrender.com/codes");
                setCode(data);
              
               } catch (error) {
               
                  
               }
            }
            getCode()
        },[])
        const removeCode = async (id:any) => {
                const confirm = window.confirm("Bạn có chắc chắn muống xoá không?");
                if(confirm) {
                    const {data} = await axios.delete("https://buylike.onrender.com/codes/"+id);
                    setCode(code.filter(item => item._id !== id))

                }
        }
  return (
    <div>
          
    <div className="container">
  <h2>Danh sách gói</h2>
  <NavLink className="btn btn-info" to="/admin/addcode">Thêm Code</NavLink>
            
  <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Limit</th>
        <th>Sửa </th>
        <th>Xoá</th>
      </tr>
    </thead>
    <tbody>
     {code?.map((item, index) => {
        return  <tr>
        <td>{index +1 }</td>
        <td>{item.name}</td>
        <td>{item.limit}</td>
        <td><NavLink className="btn btn-info" to={`editcode/${item._id}`}>Sửa</NavLink></td>
        <td><button type="submit" className='btn btn-info' onClick={() => removeCode(item._id!)}>Xoá</button></td>
      </tr>;
     })}
   
    </tbody>
  </table>
</div>

      
    </div>
  )
}

export default AdminPage