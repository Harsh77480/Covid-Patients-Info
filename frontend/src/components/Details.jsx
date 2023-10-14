import { useState } from 'react';
import Modal from "./Modal";
import BackDrop from "./BackDrop";
export default function Details({props}) {

  const [modalIsOpen,setModalIsOpen] = useState(false);

  function detailsHandle() {  //modal opens for detailed info
    setModalIsOpen(true);
  }

  function removeHandler() {
    setModalIsOpen(false);
  }

  return (<div className="card">

    <div  style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}> 

      <div style={{marginLeft :"10%"  }}>
        <h2 >  {props.firstName} {props.lastName}</h2>
        <span>{props.age} {props.gender}</span>
      </div>

      <div >
        <button  className="btn" onClick={detailsHandle}>Show Details</button>
      </div>

    </div>

      {modalIsOpen && <Modal cancel={removeHandler} props = {props} />} 
      {modalIsOpen && <BackDrop />}
      
  </div>);
}

