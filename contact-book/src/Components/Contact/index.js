import "./styles.css"
import { useState } from "react";
import ContactDetail from "../ContactDetail";

function Contact(props){

    const [myContactDetail, setContactDetail] = useState(false)

    const showContactDetail = () => {setContactDetail(!myContactDetail)}


    return (
        <div className="contact">
        <div className="contactElement" onClick={showContactDetail}>{props.contact.name}</div>
        {myContactDetail ? <ContactDetail contact={props}/> : ""} 
        </div>
    )
}

export default Contact