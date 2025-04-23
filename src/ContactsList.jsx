import React from 'react'
import ContactItem from './ContactItem'
import styles from './ContactsList.module.css'


const ContactsList = ({contacts , deleteHandler}) => {
    console.log({contacts})
  return (
    <div className={styles.container}>
   <h1>Contacts List</h1>
   {
    contacts.length ? ( 
    <ul className={styles.contacts}>
      {contacts.map((contact)=> 
      <ContactItem
      key={contact.id} 
      data={contact} 
      deleteHandler={deleteHandler}/>
    )}
      </ul>)
      : <p className={styles.message}>No Contacts yet!</p>

   }
  
    </div>
  )
}

export default ContactsList
