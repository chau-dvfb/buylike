import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import Header from './Header';
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
type Props = {}

const ListKey = (props: Props) => {
    const [keys,setKeys] = useState<any[]>([]);
    useEffect(() => {
        const getKeys = async () => {
                const {data} = await axios.get("https://buylike.onrender.com/keys/");
                setKeys(data)
        }
        getKeys()
    }, [])
    const onDel = async (id:any) => {
      const confirm = window.confirm("Bạn có chắc chắn muốn xoá không?");
      if(confirm) {
        await axios.delete("https://buylike.onrender.com/keys/"+id);
        toastr.success("Xoá thành công");
        setKeys(keys.filter(item => item._id !== id))
      }
    }
  return (
    <div>
      
         <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Sửa </th>
        <th>Xoá </th>
        
      </tr>
    </thead>
    <tbody>
        {keys?.map((item,index) => {
            return <tr>
            <td>{index+1}</td>
            <td>{item.name}</td>
            <td><NavLink className="btn btn-info" to={`/admin/key/${item._id}`}>Sửa</NavLink></td>
            <td><button onClick={() => onDel(item._id)} className='btn btn-info'>Xoá</button></td>
            </tr>
        })}
      </tbody>
  </table>
    </div>
  )
}

export default ListKey