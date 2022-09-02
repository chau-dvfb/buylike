import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import AddCode from './pages/AddCode'
import AddKey from './pages/AddKey'
import AdminPage from './pages/Admin'
import AdminLayout from './pages/AdminLayout'
import EditCode from './pages/EditCode'
import EditKey from './pages/EditKey'
import EditToken from './pages/EditToken'
import Header from './pages/Header'
import HomePage from './pages/Home'
import ListKey from './pages/ListKey'
import ListToken from './pages/ListToken'
import PrivateRouter from './pages/PrivateRouter'
import VeryAdmin from './pages/VeryAdmin'

function App() {


  return (
    <div className="App">
       
       <Routes>
         
         <Route path='/'>
           <Route index element={<HomePage />}/>
           <Route path='/key' element={<VeryAdmin />} />
             
           </Route>
           <Route path='admin' element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
               <Route index element={<AdminPage/>} />
               <Route path='addcode' element={<AddCode />} />
               <Route path='addkey' element={<AddKey />} />
               <Route path='listkey' element={<ListKey />} />
               <Route path='key/:id' element={<EditKey />} />
               <Route path='editcode/:id' element={<EditCode />} />
               <Route path='list' element={<ListToken />} />
               <Route path='edit' element={<EditToken />} />
           </Route>
         
       </Routes>
      
    </div>
  )
}

export default App
