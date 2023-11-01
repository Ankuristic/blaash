import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const SideBar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"ProductPlayList",
            icon:<FaTh/>
        },
        {
            path:"/shoppable video",
            name:"ShoppableVideo",
            icon:<FaUserAlt/>
        },
        {
            path:"/story",
            name:"Story",
            icon:<FaRegChartBar/>
        },
        {
            path:"/LiveCommerce",
            name:"LiveCommerce",
            icon:<FaCommentAlt/>
        },
        {
            path:"/Revenue",
            name:"Revenue",
            icon:<FaShoppingBag/>
        },
        {
            path:"/One Click Post",
            name:"OneClickPost",
            icon:<FaThList/>
        },
        {
            path:"/Calendar",
            name:"calendar",
            icon:<FaThList/>
        },

        {
            path:"/Hire Influencar",
            name:"HireInfulencar",
            icon:<FaThList/>
        },


        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Blaash</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default SideBar;