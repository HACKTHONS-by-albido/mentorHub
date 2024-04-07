'use client'
import LandingNavbar from "@/components/Landingnavbar";
import { axiosInstance } from "@/components/axiosInstance";
import Landing from "@/components/landing";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router=useRouter()
  const pathname = usePathname()
  useEffect(
    ()=>{
           axiosInstance.get("/profile").then(
            (res)=>{
                const {data}=res.data
                console.log(data);
                
                if (data.role=="mentor") {
                    router.push('/mentor/home')
                }
                else if(data.role=="mentee"){
                  router.push('/mentee/home')
   
                }
            }
           ).catch(
                (err:any)=>{
                    console.log(err.message);
                    
                }
            )
            
        
    
        
    },[]
)
  return (
   <>
   <LandingNavbar/>
   <Landing/>
   </>
  );
}
