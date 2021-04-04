import { Button, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import {MdDelete} from 'react-icons/md';
import { useToasts } from 'react-toast-notifications';
function DeletePrompt() {
let params = useParams();
const { addToast } = useToasts();
const [showModel, setshowModel] = useState(true);
let handleDelete = e =>{
    console.log('qury ',params);
    setshowModel(false)
    addToast('Deleted Successfully', { appearance: 'success', autoDismiss: true});
    setTimeout(() => {
        window.location.replace('/clinicdashboard');
    }, 2000);
}
return (<Modal show={showModel} onHide={() => {
        setshowModel(false)
        window.location.replace('/clinicdashboard');
        }}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-xs-6 col-sm-8 col-md-9">
                    <div>Are you sure</div>
                    <div>You want to delete user </div> 
                </div>
                <div className="col-xs-6 col-sm-4 col-md-3">
                <Button variant="danger" onClick={handleDelete}>Delete<MdDelete size="20"/></Button>
                </div>
            </div>
        </Modal.Body>
    </Modal>   
   )
}
export default DeletePrompt;