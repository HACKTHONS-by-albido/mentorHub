'use client'
import { getCookie } from 'cookies-next'
import React, { memo, useEffect, useState } from 'react'
import { axiosInstance } from './axiosInstance'

const Authprovider = ({children}:any) => {

const [state,setState]=useState<any>(true)
const [child,setchild]=useState<any>(<div>{children}</div>)


    useEffect(
        ()=>{
               axiosInstance.get("/profile").then(
                (res)=>{
                    const {data}=res.data
                    if (data.role=="mentor") {
                        window.location.href='/Home'
                    }
                    else if(data.role=="mentee"){
                        window.location.href='/Home'
                    }
                }
               ).catch(
                    (err)=>{
                        console.log(err.response.status);
                        if(err.response.status==500){
                            setchild(<div>notallowed</div>)
                            setState(false)
                            window.location.href='/'
                            
                        }
                    }
                )
                
            
        
            
        },[state]
    )
    
    return child
        

}

export default Authprovider