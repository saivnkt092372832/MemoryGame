import './Levels.css'
import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import auth from "../firebase";
import { onAuthStateChanged } from 'firebase/auth';
const Levels=()=>{
    const [loggedin,setIsloggedin]=useState(false);
    useEffect(()=>{
        const listen=onAuthStateChanged(auth,(user)=>{
            if(user){
                setIsloggedin(true);
            }
        })
     },[])
    return (
        <>
        <div className="bo">
               <div className="child child1"><Link className='child1' to={loggedin ? "/level1" : '/pleaselogin'}>Level-1</Link></div>
              <div className="child child2"><Link className='child2'  to={loggedin ? "/level2" : '/pleaselogin'}>Level-2</Link></div>
              <div className="child child3"><Link className='child3'  to={loggedin ? "/level3" : '/pleaselogin'}>Level-3</Link></div>
            </div>
        </>
    )
}
export default Levels;