import './topbar.css'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoSettingsSharp } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";

export default function Topbar(){
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div clasName="topbarLeft">
                    <div className="logo">
                        Admin Dashboard
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarIcon">
                        <IoIosNotificationsOutline />
                        <span className="notificationNo">2</span>
                    </div>
                    <div className="topbarIcon">
                        <MdLanguage />
                        <span className="notificationNo">2</span>
                    </div>
                    <div className="topbarIcon">
                        <IoSettingsSharp />
                    </div>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}