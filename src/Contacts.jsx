import React, { useState } from 'react'
import ContactsList from './ContactsList'

const Contacts = () => {
  const [alert , setAlert] = useState("")
  const [contacts , setContacts] = useState([])
const [contact, setContact] = useState({
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
  // console.log(contact)
  setContacts((contacts)=> ([...contacts , contact]))
  setContact({
    name:"",
    lastName:"",
    email:"",
    phone:""
  })
  // console.log(contacts)
}

  return (
    <div>
      <div>
        <input type="text"  name="name"   placeholder='Name'  value={contact.name} onChange={changeHandler}/>
        <input type="text"   name="lastName"  placeholder='LastName'  value={contact.lastName} onChange={changeHandler}/>
        <input type="email"  name="email"  placeholder='Email'  value={contact.email} onChange={changeHandler}/>
        <input type="number"  name="phone" placeholder='Phone'  value={contact.phone} onChange={changeHandler} />
        <button onClick={addHandler}>Add Contacts</button>
      </div>
      <div>
        {alert && <p>{alert}</p>}
      </div>
      <ContactsList contacts={contacts}/>
    </div>
  )
}

export default Contacts
