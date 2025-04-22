import React, { useState } from 'react'
import ContactsList from './ContactsList'
import inputs from './constants/inputs'
import {v4} from 'uuid'
import styles from './Contacts.module.css'


const Contacts = () => {
  const [alert , setAlert] = useState("")
  const [contacts , setContacts] = useState([])
const [contact, setContact] = useState({
  id:"",
  name:"",
  lastName:"",
  email:"",
  phone:""
})

const changeHandler =(event)=>{
 const name = event.target.name
 const value = event.target.value
//  console.log({name , value})
 setContact((contact) => ({...contact,[name] : value}))
}


const addHandler =()=>{

  if(!contact.name ||
    !contact.lastName||
    !contact.email||
    !contact.phone
   ) {
    setAlert("Please Enter Valid Data")
    return;
   }
   setAlert("")
  // console.log(contact)
  const newContact = {...contact , id:v4()}
  setContacts((contacts)=> ([...contacts , newContact]))
  setContact({
    name:"",
    lastName:"",
    email:"",
    phone:""
  })
  // console.log(contacts)
  }

    const deleteHandler = (id)=>{
      const newContacts= contacts.filter(contact =>contact.id !== id )
      setContacts(newContacts)
    }

  return (
    <div className={styles.container}>
     <div className={styles.form}>
     {
        inputs.map((input)=> <input
        key={input.id} 
        name={input.name} 
        placeholder={input.placeholder} 
        type={input.type}
        value={contact[input.name]}
        onChange={changeHandler}
        />)
      }
      <button onClick={addHandler}>Add Contacts</button>
     </div>
      <div>
        {/* <input type="text"  name="name"   placeholder='Name'  value={contact.name} onChange={changeHandler}/>
        <input type="text"   name="lastName"  placeholder='LastName'  value={contact.lastName} onChange={changeHandler}/>
        <input type="email"  name="email"  placeholder='Email'  value={contact.email} onChange={changeHandler}/>
        <input type="number"  name="phone" placeholder='Phone'  value={contact.phone} onChange={changeHandler} /> */}
        
      </div>
      <div className={styles.alert}> {alert && <p>{alert}</p>}  </div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default Contacts
