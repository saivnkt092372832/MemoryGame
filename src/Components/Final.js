import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Clue.css'
import { useNavigate } from 'react-router-dom';
function Final(props) {
    const navigate=useNavigate();
  const [show, setShow] = useState(true);
  const handleClose = () => 
  {
    setShow(false);
    navigate(`/${props.navigate}`)
  }
  return (
    <div className='lolu'>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:'cursive'}}>{props.title}</Modal.Title>
        </Modal.Header>
    <Modal.Body>
        {props.msg}
       </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Lets Go To The treasure
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Final;