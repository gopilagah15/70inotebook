import React from 'react'

const Noteitem = ({note,updateNote}) => {
  return (
    <div>
         <div className="col-md-4">
    <div className="card my-3" > 
    <div className="card-body"> 
    <div className=" d-flex align-items-center mx-2">
   <h5 className="card-title">{note.title}</h5>
   <i class="fa-solid fa-trash mx-2"></i>
   <i class="fa-solid fa-pen-to-square" onClick={()=>{updateNote(note)}}></i>   </div> 
   <p className="card-text">{note.description}</p> 

</div>
</div>
</div>

    </div>
  )
}

export default Noteitem