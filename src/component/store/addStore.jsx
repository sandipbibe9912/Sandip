import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const AddStore = () => {


  const storeId = useSelector(state => state.auth.user._id)

   const user = {
    
    storeName: '',
    storeEmail: "",
    password: '',
    confirmPassword: '',
    adminId : storeId

   }

   const [formData , setFormData] = useState(user)

   const handleInputChange = (e) => {

    const {name , value} = e.target;
  
    setFormData({...formData , [name] : value}  )
   }

  const handleSubmit = async(e) => {
    
     e.preventDefault()
  console.log(formData)
     await axios.post('https://sandip-node-4.onrender.com/api/store/save' , formData)
     .then((response) => {
   
        alert(response.data.msg)
     }).catch((error) => {
        alert(error.response.data.msg)
     })
  }

  return (
    <div class="container d-flex justify-content-center align-items-center vh-100 " >
     
        <div class="col-4 bg-light h-70 rounded-3 p-4 d-flex flex-column align-items-center gap-3"  >
              <h3 className='bg-light fw-bold'>Signup</h3>
              <div className=' d-flex flex-column  justify-content-left '>
                <h5  style={{marginRight: "30px" , color:"#3d3c3c"}}>Name</h5>   
                <input className='' 
                 name='storeName'
                 onChange={handleInputChange}
                style={{background : "#D9D9D9", border:"none" , borderRadius:"10px" , minWidth:"17vw" , padding:"10px"}}></input>
             </div>
             <div className=' d-flex flex-column  justify-content-left '>
                <h5  style={{marginRight: "30px" , color:"#3d3c3c"}}>Email</h5> 
                <input className='' 
                 name='storeEmail'
                 onChange={handleInputChange}
                style={{background : "#D9D9D9", border:"none" , borderRadius:"10px" , minWidth:"17vw" , padding:"10px"}}></input>
             </div>
             <div className='d-flex flex-column  justify-content-left'>
                <h5  style={{marginRight: "30px" , color:"#3d3c3c"}}>Password</h5> 
                <input className='' 
                 name='password'
                 onChange={handleInputChange}
                style={{background : "#D9D9D9", border:"none" , borderRadius:"10px" , minWidth:"17vw" , padding:"10px"}}></input>
             </div>
             <div className='d-flex flex-column  justify-content-left'>
                <h5  style={{marginRight: "30px" , color:"#3d3c3c"}}>Confirm Password</h5> 
                <input 
                 name='confirmPassword'
                 onChange={handleInputChange}
                style={{background : "#D9D9D9", border:"none" , borderRadius:"10px" , minWidth:"17vw" , padding:"10px"}}></input>
             </div>
            
             <div>
                <button onClick={handleSubmit} type='submit' className=' border-0 p-2 rounded-3' style={{minWidth:"10vw" , color:"white", background:"#d4910f"}}>Submit</button>
             </div>
        
          
            
    
        </div>
       
       </div>
    
  )
}

export default AddStore