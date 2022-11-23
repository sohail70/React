import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
    const [name, setName] = useState(''); // string khali bezar - age chizi nazari warning mide
    const [role, setRole] = useState('');
    const [img, setImg] = useState('');


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className='block mx-auto m-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>+ Add Employee</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <form id='editModal' className="w-full max-w-sm" onSubmit={(e)=>{
                    handleClose();//ino nazari vaghti update ro mizani close nemikune modal ro
                    e.preventDefault();
                    setName(''); //age be khali set nakuni vaghti Add mizani asami ghabli hanooz onja neveshte hastan
                    setRole('');
                    setImg('');
                    props.newEmployee(name,role,img);
                    
                    
                }}>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                            Full Name
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" placeholder='Logan' type="text" value={name}  onChange={(e)=>{setName(e.target.value)}}  />
                        </div>
                    </div>
                



                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="role">
                            Role
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="role" placeholder="Killer" type="text" value={role} onChange={(e)=>{setRole(e.target.value)}}/>
                        </div>
                    </div>



                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="img">
                            Image URL
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="img" placeholder="https://google.com" type="text" value={img} onChange={(e)=>{setImg(e.target.value)}}/>
                        </div>
                    </div>




                </form>
        </Modal.Body>
        <Modal.Footer>
            <button onClick={handleClose} className='bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded'>Close</button>

          <button onClick={handleClose} form='editModal' className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default AddEmployee;