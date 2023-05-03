import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import sty from './Modal.module.css'

function Modall(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => 
  {props.onClickHandler();
    setShow(false);
  }
  return (
    <div className={sty.mod}>
      <Modal show={show}  className={sty.mod}>
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:'cursive'}}>{props.instructions.title}</Modal.Title>
        </Modal.Header>
        {
          props.instructions.instruction.map((ele)=><Modal.Body style={{fontFamily:'cursive'}}>{ele}</Modal.Body>)
        }
        <p style={{textAlign:'center',fontFamily:"cursive"}}>{props.instructions.best}</p>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Begin The Game
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Modall;