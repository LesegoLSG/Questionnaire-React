import React from 'react';
import '../Stylesheet/Sidebar.css'
import {FaBars, FaTh} from 'react-icons/fa';
import {BsFillQuestionCircleFill} from 'react-icons/bs';
import {MdCreateNewFolder} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {useState} from 'react';

const Sidebar = ({children}) =>{
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const menuItems=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/questionnaire",
            name:"Questionnaire",
            icon:<BsFillQuestionCircleFill/>
        },
        {
            path:"/create",
            name:"Create",
            icon:<MdCreateNewFolder/>
        },
    ]
    return(
        <div className="container">
            <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar" >
                <div className="top-section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="Logo">Logo</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItems.map((item,index) =>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link-text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;