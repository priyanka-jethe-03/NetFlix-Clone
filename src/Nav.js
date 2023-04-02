import React, { useEffect, useState } from 'react';
import './App.css'


function Nav() {
    const [show,handleShow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY >120) {
                handleShow(true);
            }else handleShow(false);
        });
        return  ()=>{
            window.removeEventListener("scroll");
        };
    },[])

  return (
    <div className={`navbar ${show && "navbar-black"}`}>
        <div className='nav'>
        <img className='nav-logo' src='https://tse1.mm.bing.net/th?id=OIP.ofZz599xXxba5J9IdACQggHaEK&pid=Api&P=0'/>
        <img className='nav-avatar' src='https://tse3.mm.bing.net/th?id=OIP.XQ-com-ULw7aaf_U3BcQ3AHaHa&pid=Api&P=0'/>
        </div>
        
        
    </div>
  )
}

export default Nav