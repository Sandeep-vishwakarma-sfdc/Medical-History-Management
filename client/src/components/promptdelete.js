import { Modal } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
function DeletePrompt() {
const [showModel, setshowModel] = useState(true);
return (<Modal show={showModel} onHide={() => {
        setshowModel(false)
        window.location.replace('/clinicdashboard');
        }}>
        <Modal.Header closeButton>
            
        </Modal.Header>
        <Modal.Body>
            <div>Are you sure</div>
            <div>You want to delete user</div> 
        </Modal.Body>
    </Modal>   
   )
}
export default DeletePrompt;