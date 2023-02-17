import "./styles.css"

function ContactDetail(props){
    return (
        <div className="contactDetail">
        {props.contact.contact.address}
        <button>Delete Contact</button>
        <button>Change Address</button>
        </div>
    )
}

export default ContactDetail