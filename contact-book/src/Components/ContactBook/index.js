import Contact from "../Contact";
import "./styles.css"
import { useState } from "react";
import AddContact from "../AddContact";


function ContactBook() {
    
    const [myContactBook, setContactBook] = useState([
            {
                id: 1,
                name: 'Constructor Learning',
                address: 'Zurich',
                avatar: 'constructor-learning-logo.png'
            }
    ])

    const [flagAddContact, setFlagAddContact] = useState(false)
    
    const showAddContact = () => setFlagAddContact(!flagAddContact)


    const updateContactBook = (newContact) => {
        setContactBook(current => [...current,newContact])
    }


    return (
      <>  
        <h1>Contact Book</h1>
        <div className="button">
        <button onClick={showAddContact}>+Add</button>
        </div>
        {flagAddContact ? <AddContact myFunction={updateContactBook} myContactBook={myContactBook}/> : ""}
        <div className="contactList">
        {
          myContactBook.sort((a,b) => a.name.localeCompare(b.name)).map(contact => 
            (<Contact key={contact.id} contact={contact} />)
            )
          }
        </div>
      </>
    );
  }

  export default ContactBook