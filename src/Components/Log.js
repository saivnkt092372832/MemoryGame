import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Clue.css'
function Log(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => 
  {
    setShow(false);
  }
  return (
    // <div className='lolu'>
    //   <Modal show={show} onHide={handleClose} >
    //     <Modal.Header closeButton>
    //       <Modal.Title style={{fontFamily:'cursive'}}>"STATUS"</Modal.Title>
    //     </Modal.Header>
    // <Modal.Body>
    //     "PLEASE LOGIN TO PLAY THE GAME"
    //    </Modal.Body>
    //     <Modal.Footer>
    //       <Button variant="secondary" onClick={handleClose}>
    //         Close
    //       </Button>
    //     </Modal.Footer>
    //   </Modal>
    // </div>
    alert("please log in to play ")
  );
}

export default Log;