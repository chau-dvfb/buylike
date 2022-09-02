import axios from 'axios'
import React, { useEffect } from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import Header from './Header'
type Props = {}

const EditToken = (props: Props) => {
    const {register, handleSubmit,reset} = useForm();
    const navigate = useNavigate();
    
    useEffect(() => {
            const getToken = async () => {
                const {data} = await axios.get("https://buylike.onrender.com/tokens/62dd1e8f489e4298068850f5");
                reset(data)
            }
            getToken()
    }, [])
    const onEdit:SubmitHandler<any> = async (data:any) => {
        try {
            await axios.put("https://buylike.onrender.com/tokens/62dd1e8f489e4298068850f5", data);
            toastr.success("Thành công!")
            navigate('/admin/list')
        } catch (error) {
            toastr.warning("Fail")
        }
        
    }
  return (
    <div>
        
        <form onSubmit={handleSubmit(onEdit)}>
        <div>
            <h2>Edit Token</h2>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
    <input type="text" className="form-control" {...register('name')} id="exampleFormControlInput1" placeholder="Name" />
  </div>
 
    <div className="mb-3">
        <button className='btn btn-success'>Edit Token</button>
    </div>
 
</div>

        </form>
    </div>
  )
}

export default EditToken