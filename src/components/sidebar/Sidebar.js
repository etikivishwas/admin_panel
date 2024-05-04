import React from 'react'
import { useState } from 'react'

import './sidebar.css'
import { FaFileContract, FaDollarSign } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { CgDetailsMore } from "react-icons/cg";
import { IoPeople } from "react-icons/io5";
import { MdOutlineReport, MdRequestPage } from "react-icons/md";
import { Link } from 'react-router-dom';



function Sidebar() {
    const[activeLink, setActiveLink] = useState(null);
    const handleClick =(e)=>{
        if(activeLink){
            activeLink.classList.remove("active");
        }
        e.target.classList.add("active")
        setActiveLink(e.target);
    }
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
        <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link className="sidebarListItem" onClick={(e)=>handleClick(e)}>
                        <CgDetailsMore className="sidebarIcon"/>
                        Home
                    </Link>
                    <Link className="sidebarListItem" onClick={(e)=>handleClick(e)}>
                        <FaFileContract className="sidebarIcon"/>
                        Analytics
                    </Link>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Drivers</h3>
                <ul className="sidebarList">
                    <Link className="sidebarListItem" to={'/drivers'} onClick={(e)=>handleClick(e)}>
                        <CgDetailsMore className="sidebarIcon"/>
                        Driver Details
                    </Link>
                    <Link className="sidebarListItem" to={"/contracts"} onClick={(e)=>handleClick(e)}>
                        <FaFileContract className="sidebarIcon"/>
                        Contracts
                    </Link>
                    <Link className="sidebarListItem" to={"/transactions"} onClick={(e)=>handleClick(e)}>
                        <FaDollarSign className="sidebarIcon"/>
                        Transactions
                    </Link>
                    <Link className="sidebarListItem" to={"/reports"} onClick={(e)=>handleClick(e)}>
                        <MdOutlineReport className="sidebarIcon" />
                        Reports
                    </Link>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Control Panel</h3>
                <ul className="sidebarList">
                    <Link className="sidebarListItem">
                        <IoPeople className="sidebarIcon"/>
                        Members
                    </Link>
                    <Link className="sidebarListItem">
                        <MdRequestPage className="sidebarIcon"/>
                        Payment Request
                    </Link>
                    <Link className="sidebarListItem">
                        <SiSimpleanalytics className="sidebarIcon"/>
                        Weekly Reports
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar