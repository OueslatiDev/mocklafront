import React, { useState, useEffect, FunctionComponent, useRef } from 'react';


import "./Discussion.css"

import Conversation from '../components/Conversation';
import Message from '../components/Message';
import Navbar from '../components/Navbar';
import { ClassNames } from '@emotion/react';
import ChatOnline from '../components/ChatOnline';
import { useParams } from 'react-router-dom';
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
interface UserData {
  id: number;
  last_name: string;
  first_name: string;
  email: string;
  password: string;
  rates?: number;
  creationDate: Date;
  strikesNbr: number;
  status: string;
  nickname?: string;
  role: string;
  resetToken?: string;
  tokenExpiration?: Date;
}
interface UserConversationRelation {
  senderId: number;
  conversationId: number;
  recipientId: number;
}
interface MessageAttributes {
  id: number;
  creationDate: Date;
  message: string;
  senderId: number;
  conversationId: number;
  
}

interface User {
  userId: number;
  socketId: string;
}
 
const Discussion: FunctionComponent = () => {
  const [user, setUser] = useState<UserData>();
 
  const [discussions, setDiscussions] = useState<UserConversationRelation[]>([]);
  const [currentChat, setCurrentChat] = useState<UserConversationRelation>();
  const [userFriend, setUserFriend] = useState<UserData>();
  const [messages, setMessages] = useState<MessageAttributes[]>([]);
  const [arrivalMessage, setArrivalMessage] = useState<MessageAttributes>();
  const [newMessage, setNewMessage] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const Socket   = useRef<any>(null);


  const { id } = useParams();
  useEffect(() => {
    Socket.current = io("ws://localhost:8900");
    Socket.current.on("getMessage", (data: MessageAttributes) => {
      if (currentChat) {
        setArrivalMessage({
          id: 0,
          creationDate: new Date(),
          message:data.message,
          senderId:  data.senderId,
          conversationId:currentChat.conversationId,
        });
      }
    });
    
    }, []);
    useEffect(() => {
      if (arrivalMessage && currentChat) {
        if (
          currentChat.senderId == arrivalMessage.senderId ||
          currentChat.recipientId == arrivalMessage.senderId
        ) {
          setMessages((prev) => [...prev, arrivalMessage]);
        }
      }
    }, [arrivalMessage, currentChat]);
  useEffect(() => {
   
    Socket.current.emit ("addUser", id);
    Socket.current.on("getUsers", (users: User[])=>{
      console.log("gggggggggggg")
    console.log(users)
    })
    }, [user]);

  const fetchuser = async () => {
    try {


      if (!id) {
        console.error('User ID is missing in the URL');
        return;
      }
      const response = await fetch(`http://localhost:3001/api/user/${id}`);
      if (!response.ok) {
        console.error('Failed to fetch user');
      }
      const UserData = await response.json();
   
      setUser(UserData);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  // Appeler la fonction fetchProjects une fois que le composant est monté
  useEffect(() => {
    fetchuser();
  }, [id])
  const fetchuserConversations = async () => {
    try {


      if (!id) {
        console.error('User ID is missing in the URL');
        return;
      }
      const response = await fetch(`http://localhost:3001/api/userConversation/${id}`);
      if (!response.ok) {
        console.error('Failed to fetch user');
      }
      const UserData = await response.json();
      console.log(UserData)
      setDiscussions(UserData);
      console.log(user)
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };
  useEffect(() => {
    fetchuserConversations();
  }, [id])

  // Appeler la fonction fetchProjects une fois que le composant est monté
  useEffect(() => {
    const fetchMessagesByConversation = async () => {
      try {
  
  
        if (!id) {
          console.error('User ID is missing in the URL');
          return;
        }
        const response = await fetch(`http://localhost:3001/api/messages/messages/${currentChat?.conversationId}`);
        if (!response.ok) {
          console.error('Failed to fetch user');
        }
        const UserData = await response.json();
        console.log("yoyoy")
        console.log(UserData)
        setMessages(UserData);
        console.log(user)
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchMessagesByConversation();
  }, [currentChat])

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
   
    let friendId: number | undefined;

   if(currentChat){
if (currentChat.senderId == Number(id)) {
  friendId = currentChat.recipientId;
} else {
  friendId = currentChat.senderId;
}} console.log(friendId)
console.log("lifrienddddddddddddddd")
    Socket?.current.emit("sendMessage", {
      senderId: id,
      receiverId:friendId,
      text: newMessage,
    });
    try { 
      // Vérifiez si la conversation est sélectionnée
      if (!currentChat) {
        console.error('No conversation selected');
        return;
      }

      // Vérifiez si le message est valide
      if (!newMessage.trim()) {
        console.error('Message cannot be empty');
        return;
      }

      // Créez un nouvel objet message avec les données nécessaires
   

      // Envoyez la demande de création du message au backend
      const response = await fetch(`http://localhost:3001/api/messages/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: newMessage,
          senderId: id,
          conversationId: currentChat.conversationId,
      })
      });

      // Vérifiez si la demande a réussi
      if (!response.ok) {
        console.error('Failed to add message');
        return;
      }

      // Si la demande a réussi, mettez à jour la liste des messages localement
      const newMessageResponse = await response.json();
      setMessages([...messages, newMessageResponse]);
      setNewMessage(""); // Effacez le champ de saisie du message
    } catch (error) {
      console.error('Error adding message:', error);
    }
};

const afficher = (id: number) => {
  return <div key={id}>{id}</div>;
};


useEffect(() => {
  scrollRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);

console.log(currentChat)
  return (
    <div className="kol">
      <div className="nav"></div>
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
           
            {discussions.map((c) => (
               <div onClick={() => setCurrentChat(c)}>
            <Conversation conversation={c} userId={id || ''} />
            </div>
          ))}

          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat?
            <>
           <div className="chatBoxTop">
  {messages.map((m) => (
    <div key={m.id} ref={scrollRef}>
     {afficher(m.senderId)}
     {afficher(Number(id))}
      <Message message={m} own={m.senderId == Number(id)} />
    </div>
  ))}
</div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="write something..."
              onChange={(e) => setNewMessage(e.target.value)}
                 value={newMessage}
              ></textarea>
              <button className="chatSubmitButton" onClick={handleSubmit}
              >
                Send
              </button>
            </div>
            </>:<span className="noConversationText">open a conversation to start a chat ...</span>
            }
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper" >
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </div> 
  );
};

export default Discussion;
