import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateStore = () => {
 
    const {id} = useParams()
 
  

    const [formData , setFormData] = useState({
        storeName: '',
        storeEmail: '',
        password: '',
        confirmPassword: '',
    })

    const fetchData = async() => {

        await axios.get(`https://sandip-node-4.onrender.com/api/store/getone/${id}`)
        .then((response) => {
           
            setFormData({
                storeName: response.data.storeName,
                storeEmail: response.data.storeEmail,
                password: response.data.password,
                confirmPassword: response.data.confirmPassword,
            })
        })

    }
 
    useEffect(() => {
        fetchData()
    }, [])

    const handleInputChange = (e) => {
        const {name , value} = e.target
       
        setFormData({...formData , [name] : value})
    }

     const handleUpdate = async(e) => {
           console.log('formData' , formData)     
        e.preventDefault()

        await axios.patch(`https://sandip-node-4.onrender.com/api/store/update/${id}` , formData)
        .then((response) => {
            alert(response.data.msg)
            console.log(response)
        }).catch((error) => {
            alert(error.response.data.msg)
        })
     }


  return (
    <div class="container d-flex justify-content-center align-items-center vh-100 " >
     
    <div class="col-4 bg-light h-70 rounded-3 p-4 d-flex flex-column align-items-center gap-3"  >
          <h3 className='bg-light fw-bold'>Update</h3>
          <div className=' d-flex flex-column  justify-content-left '>
            <h5  style={{marginRight: "30px" , color:"#3d3c3c"}}>Name</h5>   
            <input className='' 
             name='storeName'
             value={formData.storeName}
             onChange={handleInputChange}
            style={{background : "#D9D9D9", border:"none" , borderRadius:"10px" , minWidth:"17vw" , padding:"10px"}}></input>
         </div>
         <div className=' d-flex flex-column  justify-content-left '>
            <h5  style={{marginRight: "30px" , color:"#3d3c3c"}}>Email</h5> 
            <input className='' 
             name='storeEmail'
             onChange={handleInputChange}
              value={formData.storeEmail}
            style={{background : "#D9D9D9", border:"none" , borderRadius:"10px" , minWidth:"17vw" , padding:"10px"}}></input>
         </div>
         <div className='d-flex flex-column  justify-content-left'>
            <h5  style={{marginRight: "30px" , color:"#3d3c3c"}}>Password</h5> 
            <input className='' 
             name='password'
             readOnly
            value={formData.password}
            style={{background : "#D9D9D9", border:"none" , borderRadius:"10px" , minWidth:"17vw" , padding:"10px"}}></input>
         </div>
         <div className='d-flex flex-column  justify-content-left'>
            <h5  style={{marginRight: "30px" , color:"#3d3c3c"}}>Confirm Password</h5> 
            <input 
             name='confirmPassword'
             value={formData.confirmPassword}
             readOnly
            style={{background : "#D9D9D9", border:"none" , borderRadius:"10px" , minWidth:"17vw" , padding:"10px"}}></input>
         </div>
        
         <div>
            <button onClick={handleUpdate}  type='submit' className=' border-0 p-2 rounded-3' style={{minWidth:"10vw" , color:"white", background:"#d4910f"}}>Submit</button>
         </div>
    
      
        

    </div>
   
   </div>
  )
}

export default UpdateStore