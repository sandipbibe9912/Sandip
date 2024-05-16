import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StoreList = () => {

    const [storeList , setStoreList] = useState([])
    const fetchData = async() => {
   
     await axios.get('https://sandip-node-4.onrender.com/api/getall')
     .then((response) => {

        console.log(response.data)
        setStoreList(response.data.data)
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
      <th scope="col">tc</th>
    </tr>
  </thead>
  {storeList.map((store , index) => (

  
  <tbody key={index}>
     <tr  className={bgcolor[index % bgcolor.length].color}>
      <th scope="row">{store._id}</th>
      <td>{store.name}</td>
      <td>{store.email}</td>
      <td>{store.tc}</td>
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