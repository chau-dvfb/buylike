import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import {useNavigate} from 'react-router-dom'
type Props = {}

const VeryAdmin = (props: Props) => {
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()
    const [keys, setKeys] = useState<any[]>([])
    useEffect(() => {
        const getKeys = async () => {
            const {data} = await axios.get("https://buylike.onrender.com/keys");
            setKeys(data)
            
            
        }
        getKeys()
    }, [])
    const onKey = (data: any) => {
            const searchkey = keys.find((item) => item.name === data.name);
            if(searchkey) {
                toastr.success("Đăng nhập thành công");
                localStorage.setItem("keys", JSON.stringify(searchkey));
                navigate('/admin')
            }else {
                toastr.error("Sai key rồi")
            }
            
    }
  return (
    <div>
          <form onSubmit={handleSubmit(onKey)}>
        <div>
            <h2>Mời bạn nhập key:</h2>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
    <input type="text" className="form-control" {...register('name')} id="exampleFormControlInput1" placeholder="Name" />
  </div>
    <div className="mb-3">
        <button className='btn btn-success'>Xác nhận</button>
    </div>
 
</div>

        </form>
    </div>
  )
}

export default VeryAdmin