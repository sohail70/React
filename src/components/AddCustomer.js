import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';
import Modal from 'react-bootstrap/Modal';

export default function AddCustomer(props) {
    const [name, setName] = useState(''); // string khali bezar - age chizi nazari warning mide
    const [industry, setIndustry] = useState('');

  const [show, setShow] = useState(props.show);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={props.toggleShow} className='block  m-2 bg-green-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>+ Add Customer</button>

      <Modal
        show={props.show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <form id='editModal' className="w-full max-w-sm" onSubmit={(e)=>{
                    handleClose();//ino nazari vaghti update ro mizani close nemikune modal ro
                    e.preventDefault();
                    setName(''); //age be khali set nakuni vaghti Add mizani asami ghabli hanooz onja neveshte hastan
                    setIndustry('');
                    props.newCustomer(name,industry);
                    
                    
                }}>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                            Name
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" placeholder='Google' type="text" value={name}  onChange={(e)=>{setName(e.target.value)}}  />
                        </div>
                    </div>
                



                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="industry">
                            Industry
                        </label>
                        </div>
                        <div className="md:w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="industry" placeholder="Computing" type="text" value={industry} onChange={(e)=>{setIndustry(e.target.value)}}/>
                        </div>
                    </div>



                </form>
        </Modal.Body>
        <Modal.Footer>
            <button onClick={props.toggleShow} className='bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded'>Close</button>

          <button form='editModal' className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'>Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

