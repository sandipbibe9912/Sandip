import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

  const role = useSelector(state => state.auth.user.roles);
  const [isHovered, setIsHovered] = useState(null);

  const adminSidebar = [
    {
      id: 1,
      name: "Add Store",
      path: "/add-store"
    },
    {
      id: 2,
      name: "Store List",
      path: "/store-list"
    }
  ];

  const storeAdminSidebar = [
    {
      id: 1,
      name: "Add User",
      path: "/add-user"
    },
    {
      id: 2,
      name: "User List",
      path: "/user-list"
    }
  ];


let sidebar = [];
  // const sidebar = role === 'ROLE_ADMIN' ? adminSidebar : role === 'ROLE_STORE_ADMIN' ? storeAdminSidebar : [];

  if(role.includes('ROLE_ADMIN')) {
    sidebar = adminSidebar;
  } else if(role.includes('ROLE_STORE_ADMIN')) {
    sidebar = storeAdminSidebar;
  }




  return (
    <div style={{minWidth:"13vw" , width: "13vw",  background:"#fff" , height:"100vh" , position:"fixed",  }}>

     {sidebar.map((data , index) => (

        <div key={index} style={{position:"relative" , marginBottom: "20px" ,
      background: isHovered === index ? '#ddebf0' : "#fff",
      borderRight: isHovered === index ? "5px solid #e6be63" : "5px solid transparent" ,
          marginTop:"20px", 
          padding: "5px 10px",
        }}
        onMouseEnter={() => setIsHovered(index)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <Link to={data.path} style={{textDecoration:"none"}}>
            <h6 className='para'>{data.name}</h6>
           </Link>
            </div>
     ))}


    </div>
  )
}

export default Sidebar