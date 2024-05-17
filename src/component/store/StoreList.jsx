import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { faTrash , faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const StoreList = () => {

  const storeId = useSelector(state => state.auth.user._id)

    const [storeList , setStoreList] = useState([])
    const fetchData = async() => {
    console.log("storeId" , storeId)
     await axios.get(`https://sandip-node-4.onrender.com/api/store/findbyAdminId/${storeId}`)
     .then((response) => {

        console.log(response.data)
        setStoreList(response.data)
     })

    }

   useEffect(() => {
    fetchData()
   }, [])





   const bgcolor = [
    {
      color : 'table-primary',
    },
    {
      color : 'table-secondary',
    },
    {
      color : 'table-success',
    },
    {
      color : 'table-danger',
    },
    {
      color : 'table-warning',
    },
    {
      color : 'table-info',
    },
   ]

   const handleDelete = async(storeId) => {
       console.log(storeId)
         await axios.delete(`https://sandip-node-4.onrender.com/api/store/delete/${storeId}`)
         .then((response) => {
            alert(response.data.msg)
            fetchData()
         }).catch((error) => {
          alert(error.response.data.msg)
         })

   }
  return (
    <div className='container'>
    <div className='row justify-content-center align-items-center mt-5'>
    <div className='col-lg col-md-8 col-sm-12 col-xs-12'>
  <div className='table-responsive ' style={{padding: "10px" , background: "#fff"}}>
    <div style={{marginBottom: "2vh" , background: "#ed9d80" , width: "20%" , fontSize: "clamp(1.2rem, 0.4737rem + 2.1053vw, 1.4rem) " , padding: "5px" , borderRadius:"8px", border:"2px solid #eba53b"}}>Store List</div>
  <table className="table" >
  <thead class="thead-dark" style={{padding: "10px" , background: "#32e662"}}>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">Created Date</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  {storeList.map((store , index) => (

  
  <tbody key={index}>
     <tr >
      <th scope="row">{store._id}</th>
      <td>{store.storeName}</td>
      <td>{store.storeEmail}</td>
      <td>{store.createdDate}</td>
      <td>
        <div onClick={() => handleDelete(store._id)}>
        <FontAwesomeIcon icon={faTrash} />
        </div>
      </td>
      <td>
        <Link to={`/update-store/${store._id}`} >
      <FontAwesomeIcon icon={faPenToSquare} />
      </Link>
      </td>
    </tr>
   
  </tbody>
  ))}
</table>
</div>
</div>
</div>
</div>
  )
}

export default StoreList