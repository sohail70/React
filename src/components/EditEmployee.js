import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
    const [name, setName] = useState(props.name); //maghadir default az props az hierarchy bala(parent component) yani Employee.js mian --> dar kol dar in khat darim state ro maintain mikunim 
    const [role, setRole] = useState(props.role);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Update</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update X-men</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <form id='editModal' className="w-full max-w-sm" onSubmit={(e)=>{
                    handleClose();//ino nazari vaghti update ro mizani close nemikune modal ro
                    e.preventDefault();
                    console.log('Hello from edit employee');
                    console.log(props.id,name,role); //chera avali props dare baghie nadare chun name va rule refere mikunan be state e ke bala tarif shode - vase id state ndarim niazi ham nist chun update esh nemikunim ke!
                    props.updateEmployee(props.id,name,role);
                }}>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                            Full Name
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" value={name}  onChange={(e)=>{setName(e.target.value)}}  />
                        </div>
                    </div>
                



                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="role">
                            Role
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" value={role} onChange={(e)=>{setRole(e.target.value)}}/>
                        </div>
                    </div>



                </form>
        </Modal.Body>
        <Modal.Footer>
            <button onClick={handleClose} className='bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded'>Close</button>

          <button form='editModal' className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>Update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default EditEmployee;