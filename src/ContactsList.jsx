import React from 'react'
import ContactItem from './ContactItem'

const ContactsList = ({contacts , deleteHandler}) => {
    console.log({contacts})
  return (
    <div>
   <h1>Contacts List</h1>
   {
    contacts.length ? ( <ul>
      {contacts.map((contact)=> 
      <ContactItem
      key={contact.id} 
      data={contact} 
      deleteHandler={deleteHandler}/>
    )}
      </ul>)
      : <p>No Contacts yet!</p>

   }
  
    </div>
  )
}

export default ContactsList
