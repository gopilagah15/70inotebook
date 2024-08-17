import React, { useState } from 'react'
import noteContext from './noteContext';

const NoteState = (props) => {
    const host = "http://localhost:5000" 
    const notesInitials = [];
    const [notes, setnotes] = useState(notesInitials);
    const getAllnotes=async(id)=>{
       
  //API CALL

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",    
         headers: {
          "Content-Type": "application/json",
        "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjMDA1YzMwMjcxNzRhZjk0YTliNTAzIn0sImlhdCI6MTcyMzg2MDQzMX0.UQrC_jkTA5BFXLFQ3uz8NVx8l5Cq20DZvZ9SuhwfXi4'
         },
                });
    const json = await response.json();   
    console.log(json);
    setnotes(json);
    }
    const addNote=async(title,description,tag)=>{

         //API CALL

    const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",    
           headers: {
            "Content-Type": "application/json",
          "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjMDA1YzMwMjcxNzRhZjk0YTliNTAzIn0sImlhdCI6MTcyMzg2MDQzMX0.UQrC_jkTA5BFXLFQ3uz8NVx8l5Cq20DZvZ9SuhwfXi4'
           },
               body: JSON.stringify({title,description,tag}),  
               });
      const json = await response.json();   
      console.log(json);
      setnotes(notes.concat(json))
    }
    const editNote=async(id,title,description,tag)=>{

         //API CALL

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",    
           headers: {
            "Content-Type": "application/json",
          "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjMDA1YzMwMjcxNzRhZjk0YTliNTAzIn0sImlhdCI6MTcyMzg2MDQzMX0.UQrC_jkTA5BFXLFQ3uz8NVx8l5Cq20DZvZ9SuhwfXi4'
           },
               body: JSON.stringify({title,description,tag}),  
               });
      const json = await response.json();   
      console.log(json)
        const newNotes = JSON.parse(JSON.stringify(notes));
        for(let index = 0; index<newNotes.length; index++){
            let element = newNotes[index];
            if(element._id === id){
                element.title = title;
                element.description = description;
                element.tag = tag;
                break;
            }
        }
        setnotes(newNotes)
    }
    const deleteNote=async(id)=>{

         //API CALL

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",    
           headers: {
            "Content-Type": "application/json",
          "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjMDA1YzMwMjcxNzRhZjk0YTliNTAzIn0sImlhdCI6MTcyMzg2MDQzMX0.UQrC_jkTA5BFXLFQ3uz8NVx8l5Cq20DZvZ9SuhwfXi4'
           },
                 
               });
      const json = await response.json();   
      console.log(json)
        const deleted = notes.filter((note)=>{
            return note._id!==id
        })
        setnotes(deleted)
    }
  return (
    <noteContext.Provider value={{notes,getAllnotes,addNote,editNote,deleteNote}}>
        {props.children}
    </noteContext.Provider>
  )
}

export default NoteState