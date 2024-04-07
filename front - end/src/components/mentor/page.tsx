'use client'
import { axiosInstance } from '@/components/axiosInstance'
import UserInformation from '@/components/mentee/UserDetials'
import React, { useEffect } from 'react'

const page = () => {
//   useEffect(
//     ()=>{
//            axiosInstance.get("/profile").then(
//             (res)=>{
//                 const {data}=res.data
//                 if (data.role=="mentor") {
//                     window.location.href='/mentor/home'
//                 }
//                 else if(data.role=="mentee"){
//                     window.location.href='/mentee/home'
//                 }else{
//                   window.location.href='/mentee/home'

//                 }
//             }
//            ).catch(
//                 (err:any)=>{
//                     alert(err.message);
//                     if (window.location.pathname!='/') {
                      
//                       window.location.href='/'
//                     }
//                 }
//             )
            
        
    
        
//     },[]
// )
  return (
    <div><UserInformation/></div>
  )
}

export default page