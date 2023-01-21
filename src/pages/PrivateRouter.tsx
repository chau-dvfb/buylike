import axios from 'axios';
import React, {Children, useEffect, useState} from 'react'
import {Navigate} from 'react-router-dom'
import { isAuthenticate } from './utils/Local';
type PrivateRouterProps = {
    children: JSX.Element;
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const [key, setKey] = useState<any[]>([])
   
    
    useEffect(() => {
       
        const getKey =  async () => {
                const {data} = await axios.get("https://http://hanghi.vidieu.net/keys");
                setKey(data)
                
                 
        }
        getKey()
    },[])
    const keys = isAuthenticate()
    
    

    
    
    
    
    if(keys) {
        return props.children
    }else {
        return <Navigate to="/key"/>
       
    }
    
 
}

export default PrivateRouter
