import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Clue.css'
import './Treasue.css'
function Treasure(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => 
  {
    setShow(false);
  }
  return (
    <div className='lolu'>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:'cursive'}}>{props.title}</Modal.Title>
        </Modal.Header>
    <Modal.Body>
       <img className='nokia' src='https://www.washingtonian.com/wp-content/uploads/2020/12/buried-treasure-istock.jpg' alt='sorry'></img>
       </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Treasure;