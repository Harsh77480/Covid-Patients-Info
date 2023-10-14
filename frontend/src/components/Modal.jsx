export default function Modal({cancel,props}){ //here a function is passed as props

 return <div className="modal">
      <h2>{props.firstName} {props.lastName}</h2>
     <div className="center">
         <p> {props.age} , <span> {props.gender}</span>  </p>
         <p> <span >Blood Group</span> : {props.bloodGroup} </p>
         <p><span >Height</span> : {props.height}cm</p>
         <p> <span >Weight</span> : {props.weight}kg</p>
         <p> <span >Job</span> : {props.company.title}</p>
         <p> <span >City</span> : {props.address.city}</p>
         <p> <span >State</span> : {props.address.state}</p>
         <p><span>{props.email}</span></p>

     </div> 

    <button className="btn btn--alt" onClick={cancel} >Back</button>
 </div>
}