import React, { useState,useEffect } from "react";
import '../Components/Home.css';
import { Link, Navigate, Router } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route,Routes } from "react-router-dom";
import Levels from "./Levels";
import FindDifferences from "./FindDifference";
import TableComponent from "../scoresdisplay";
import Level1 from "./Level1";
import Level3 from "./Level3";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Logout from "./Logout";
import Clue from "./Clue";
import { signOut } from "firebase/auth"
import auth from "../firebase";
import { onAuthStateChanged } from 'firebase/auth';
import Log from "./Log";
// import Authent from "./Auth";
import { isElement } from "react-dom/test-utils";
import { scoreActions } from "../store/scores";
import { useDispatch } from "react-redux";
const Home=()=>{
  const [loggedin,setIsloggedin]=useState(false);
  const logoutHandler=()=>{
    signOut(auth).then(()=>{}).catch((er)=>console.log(er));
    alert("succesfully Logged Out");
    window.location.reload(false);
  }
  useEffect(()=>{
    const listen=onAuthStateChanged(auth,(user)=>{
        if(user){
            setIsloggedin(true);
        }
    })
},[])

const dispatch=useDispatch()
useEffect(()=>{  
  
  {console.log(loggedin)}},[loggedin])
  useEffect(()=>{
    const listen=onAuthStateChanged(auth,(user)=>{
        if(user){
          dispatch(scoreActions.setEmail(user.email));
        }
    })
},[])
    return(

        <React.Fragment >
         {/* <Authent.Provider value={{x:loggedin}}> {loggedin && <></>}</Authent.Provider>
        */}

            <div className="header" >
                <div >
                <Navbar bg="light" expand="lg"  >
      <Container >
        <Navbar.Brand to="#home">MEMORY GAME </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto">
            <Link className="navba" to="/">Home</Link>
            <Link className="navba" to="/scoresdisplay">Scores</Link>
            <Link className="navba" to="/login">Login</Link>
            <Link className="navba" to="/signup">Register</Link>
            <Link className="navba" to="#link" onClick={logoutHandler}>Logout</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
                </div>
  
            </div>
            <div>
              <Routes>
              <Route path="/scoresdisplay" element={<TableComponent/>}/>
              <Route path="/signup" element={<SignupForm/>}/>
              <Route path="/logout" element={<Logout/>}/>
                <Route path="" element={<Levels/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/level1" element={<Level1/>}/>
                <Route path="/level2" element={<FindDifferences/>}/>
                <Route path="/level3" element={<Level3/>}/>
                <Route path="/pleaselogin" element={<Log/>}/>
              </Routes>
            </div>
            
        </React.Fragment>
    )
}
export default Home;