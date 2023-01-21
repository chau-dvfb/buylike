import axios from 'axios'
import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import Header from './Header'
type Props = {}

const AddCode = (props: Props) => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onAdd:SubmitHandler<any> = async (data:any) => {
        try {
            await axios.post("https://http://hanghi.vidieu.net/codes", data);
            toastr.success("Thành công!")
            navigate('/admin')
        } catch (error) {
            toastr.warning("Fail")
        }
        
    }
  return (
    <div>
        
        <form onSubmit={handleSubmit(onAdd)}>
        <div>
            <h2>Thêm Code</h2>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
    <input type="text" className="form-control" {...register('name')} id="exampleFormControlInput1" placeholder="Name" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Limit</label>
    <input type="number" className="form-control" {...register('limit')}  id="exampleFormControlInput1" placeholder="Limit" />
  </div>
    <div className="mb-3">
        <button className='btn btn-success'>Thêm Code</button>
    </div>
 
</div>

        </form>
    </div>
  )
}

export default AddCode
