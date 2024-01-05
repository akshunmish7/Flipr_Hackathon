import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const ChatPage = () => {
  const [chats, setchats] = useState([]);
  const fetchChats = async ()=>{
    const {data}= await axios.get("/api/chat");
    setchats(data.chats);
  }
  useEffect(() => {
    fetchChats();
  }, [])
  
  return (
    <div>
    {chats.map((chat)=>(
        <div>{chat.chatName}</div>
    ))}
    </div>
  )
}

export default ChatPage