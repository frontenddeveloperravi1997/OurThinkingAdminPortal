import React from 'react'
import Modal from 'react-bootstrap/Modal';
import {  Button } from "react-bootstrap";
const ChangeDomainModal = ({show,onClose,checkedUsers}) => {
    const handleHideActionPop =() =>{
        onClose()
    }
  return (
    <Modal show={show} onHide={onClose}>
    <Modal.Header closeButton>
      <Modal.Title>Change Domain</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <div>
         Add domains 
        </div>
    </Modal.Body>
    <Modal.Footer>
    <Button   variant="primary"  onClick={handleHideActionPop}>
            Submit
          </Button>
    <Button variant="secondary" onClick={handleHideActionPop}>
            Cancel
          </Button>

    
    </Modal.Footer>
  </Modal>
  )
}

export default ChangeDomainModal