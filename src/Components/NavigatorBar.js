import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Clue.css'
import { useNavigate } from 'react-router-dom';
function NavigatorBar(props) {
    let navigate=useNavigate();
  const [show, setShow] = useState(true);
  const handleClose = () => 
  {
    setShow(false);
 navigate(`/${props.navigate}`)
    console.log(props.navigate);
  }
  return (
    <div className='lolu'>
      <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:'cursive'}}>{props.state}</Modal.Title>
        </Modal.Header>
    <Modal.Body>
        {props.msg}
       </Modal.Body>
       <p style={{textAlign:'center',fontFamily:"cursive"}}>{props.best}</p>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {props.nextstate}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default NavigatorBar;