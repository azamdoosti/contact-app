import React from 'react'
import styles from './ContactItem.module.css'


function ContactItem({data :{id, name, lastName , email, phone} , deleteHandler}) {
    // console.log(data)

   
  return (
    
      <li className={styles.item}>
       <p>
        {name} {lastName}
        </p>
           
       <p>
         <span>📨</span> {email}
       </p>

       <p>
         <span>📞</span> {phone}
       </p>

         <button onClick={()=> deleteHandler(id)}>🛢</button>
      </li>
    
  )
}

export default ContactItem
