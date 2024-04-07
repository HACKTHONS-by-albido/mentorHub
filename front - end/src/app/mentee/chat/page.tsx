'use client'
import Footer from "@/components/mentee/Footer";
import Navbar from "@/components/Navbar";
import { axiosInstance } from "@/components/axiosInstance";
import MessageComponent from "@/components/chat/bubble";
import { socket } from "@/components/socket";
import { useMediaQuery } from "@uidotdev/usehooks";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useSearchParams } from "next/navigation";
import { IoArrowBackCircle } from "react-icons/io5";
import { useEffect, useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useBetterMediaQuery } from "@/components/ui/useBetterHooks";
export default function Page() {
  const isWideScreen = useBetterMediaQuery('only screen and (max-width : 767px)');
  console.log(isWideScreen);
  
  const searchParams = useSearchParams()
  const cookie=getCookie('token')
 const [currentId,setCurrentId]=useState<any>("")
 const [chats,setChat]=useState<any>("")
 const [history,sethistory]=useState<any>("")
 const [Tab,setTab]=useState<any>(true)

console.log(chats);

 console.log(currentId);
 const handleSubmit=async (e:any)=>{
   e.preventDefault()
   await axiosInstance.post("/sendMessage",{msg:e.target.chat.value,id:currentId._id})
  
   socket.emit('privateMsg',cookie,currentId._id)
   
   
  }
  const search = searchParams.get('id')
  const findMentor=(id:any)=>{
    axiosInstance.get(`/getDetails/${id}`).then(
      (res)=>{
        setCurrentId(res.data.data)
        //to get access to the room
        socket.emit('privateMsg',cookie,id)
         
      }
      )
    }
    
    useEffect(
      ()=>{
        
        if(search){
          findMentor(search)
        }
        socket.emit('joinRoom',cookie)
           socket.on('joinRoom',(msgs)=>{
          sethistory(msgs)
       })
        socket.on('privateMsg',(privat)=>{
          setChat(privat)
          })

      
    }
  ,[])
  return (
    <>
    <Navbar/>

    {isWideScreen?(<div className="flex mt-16">
     { Tab?<div className="w-full bg-white h-screen">
        <ul className="w-full h-screen p-2 divide-y divide-gray-200 dark:divide-gray-700">
          {history && history.chats.reverse().map((item:any,i:any)=>(
          <li className="pb-3 p-4 cursor-pointer hover:bg-amber-200" onClick={()=>{
            findMentor(item.peoples.filter((i:any)=>i._id!=history._id)[0]._id)
            setTab(false)
            }} key={i}>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0">
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {item.peoples.filter((i:any)=>i._id!=history._id)[0].username || item.peoples.filter((i:any)=>i._id!=history._id)[0].email}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {item.messages[item.messages.length-1].message}
                  
                </p>
              </div>
              <div className="inline-flex bg-green-400 p-2 rounded-full items-center  font-semibold text-gray-900 dark:text-white">
                1
              </div>
            </div>
          </li>))}
          
        </ul>
      </div>:
      <div className="w-full  p-5 ">
        <div className="h-128 bg-neutral-800 rounded-3xl   ">
          {currentId?<div className="w-full h-full flex flex-col">
            <div className="w-full h-1/6  bg-slate-600 rounded-ss-3xl rounded-se-3xl flex  items-center">
            <div className="justify-self-start w-1/2 ps-3 flex items-center cursor-pointer" onClick={()=>setTab(true)}><IoMdArrowRoundBack className="w-10 h-10"/></div>
              <div className="justify-self-center w-1/2">{currentId.username || currentId.email}</div>
            </div>
            <div className="w-full flex flex-col gap-3  overflow-auto">

              {chats ? chats.map((item:any,i:any)=>(
                <MessageComponent item={item} key={i}/>
              )):null}
            </div>
          </div>:<div className="w-full h-full flex items-center justify-center">Start Chating</div>}
        </div>

        <form className="h-1/6" onSubmit={handleSubmit}>
          <label htmlFor="chat" className="sr-only">
            Your message
          </label>
          <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
            <button
              type="button"
              className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  fill="currentColor"
                  d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                />
              </svg>
              <span className="sr-only">Upload image</span>
            </button>
            <button
              type="button"
              className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
                />
              </svg>
              <span className="sr-only">Add emoji</span>
            </button>
            <textarea
              id="chat"
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."

            ></textarea>
            <button
              type="submit"
              className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            >
              <svg
                className="w-5 h-5 rotate-90 rtl:-rotate-90"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
              </svg>
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div>}
    </div>):<div className="flex mt-16">
      <div className="w-2/6 bg-white h-screen">
        <ul className="w-full h-screen p-2 divide-y divide-gray-200 dark:divide-gray-700">
          {history && history.chats.reverse().map((item:any,i:any)=>(
          <li className="pb-3 p-4 cursor-pointer hover:bg-amber-200" onClick={()=>findMentor(item.peoples.filter((i:any)=>i._id!=history._id)[0]._id)} key={i}>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0">
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {item.peoples.filter((i:any)=>i._id!=history._id)[0].username || item.peoples.filter((i:any)=>i._id!=history._id)[0].email}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                {item.messages[item.messages.length-1].message}
                  
                </p>
              </div>
              <div className="inline-flex bg-green-400 p-2 rounded-full items-center  font-semibold text-gray-900 dark:text-white">
                1
              </div>
            </div>
          </li>))}
          
        </ul>
      </div>
      <div className="w-4/6  p-5 ">
        <div className="h-128 bg-neutral-800 rounded-3xl   ">
          {currentId?<div className="w-full h-full flex flex-col">
            <div className="w-full h-1/6 bg-slate-600 rounded-ss-3xl rounded-se-3xl flex justify-center items-center">
              <div>{currentId.username || currentId.email}</div>
            </div>
            <div className="w-full flex flex-col gap-3  overflow-auto">

              {chats ? chats.map((item:any,i:any)=>(
                <MessageComponent item={item} key={i}/>
              )):null}
            </div>
          </div>:<div className="w-full h-full flex items-center justify-center">Start Chating</div>}
        </div>

        <form className="h-1/6" onSubmit={handleSubmit}>
          <label htmlFor="chat" className="sr-only">
            Your message
          </label>
          <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
            <button
              type="button"
              className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  fill="currentColor"
                  d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                />
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
                />
              </svg>
              <span className="sr-only">Upload image</span>
            </button>
            <button
              type="button"
              className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
                />
              </svg>
              <span className="sr-only">Add emoji</span>
            </button>
            <textarea
              id="chat"
              className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your message..."

            ></textarea>
            <button
              type="submit"
              className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
            >
              <svg
                className="w-5 h-5 rotate-90 rtl:-rotate-90"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
              </svg>
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div>
    </div>}
    <Footer/>
    </>
  );
}
