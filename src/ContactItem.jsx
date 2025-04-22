import React from 'react'

function ContactItem({data :{id, name, lastName , email, phone} , deleteHandler}) {
    // console.log(data)

   
  return (
    <div>
      <li key={id}>
       <p>{name} {lastName}</p>
       <p>
         <span></span> {phone}
       </p>
   
       <p>
         <span></span> {email}
       </p>
         
         <button onClick={()=> deleteHandler(id)}>Del </button>
     
      </li>
    </div>
  )
}

export default ContactItem
