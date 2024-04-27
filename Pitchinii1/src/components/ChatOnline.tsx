import { FunctionComponent } from "react";
import "./ChatOnline.css"
const ChatOnline: FunctionComponent = () => {

    
  return (
    <div className="chatOnline">
      
        <div className="chatOnlineFriend" //onClick={() => handleClick(o)}
        >
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src="https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-1/301082979_1763990023962819_6506244682626062705_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&_nc_cb=99be929b-1cab6f21&ccb=1-7&_nc_sid=5f2048&_nc_ohc=i8bDx0ExwNIAb6Dc9QC&_nc_ht=scontent.ftun14-1.fna&oh=00_AfDvJ1LvBEY-Af9VqgMUFcKAFWpGZjip4nLDuuMF094JYQ&oe=663012F3"
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">oueslati nour</span>
        </div>
     
    </div>
  );
};

export default ChatOnline;
