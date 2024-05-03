import { FunctionComponent, useEffect } from "react";
import "./Message.css"
import { format } from "timeago.js";
interface MessageAttributes {
  id: number;
  creationDate: Date;
  message: string;
  senderId: number;
  conversationId: number;
  
}
interface MessageProps {
  message:MessageAttributes;
    own?: boolean;
   
     // Indicateur pour savoir si le message appartient à l'utilisateur actuel
  }
const Message: FunctionComponent <MessageProps> = ({message ,own }) => {
useEffect(()=>{console.log(own)
  console.log(message.message)
  console.log(message.senderId)
},[own,message])
   console.log(message.message)
  return (
    <div className={own ? "message own" : "message"}>
      
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <p className="messageText">{message.message}</p>

      </div>
      <div className="messageBottom">{format(message.creationDate)}</div>
    </div>
  );
};

export default Message;
