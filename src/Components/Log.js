import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Clue.css'
import { useNavigate } from 'react-router-dom';
function Log(props) {
  const navigate=useNavigate();
  const [show, setShow] = useState(true);
  const handleClose = () => 
  {
    setShow(false);
  }
  const gotologin=(e)=>{
    e.preventDefault();
    navigate('../login')
  }
  
    
  return (
   <>
   <Button className='d-block mx-auto' onClick={gotologin}> Please Log In To Play</Button>
    </>
  );
}

export default Log;