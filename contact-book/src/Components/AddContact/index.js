import "./styles.css"

function AddContact(props){

    let newName, newAddress, newAvatar
    
    const handleNameChange = e => {
        newName = e.target.value
    }

    const handleAddressChange = e => {
        newAddress = e.target.value
    }

    const handleAvatarChange = e => {
        newAvatar = e.target.value
    }



    const addContact =  (e) => {
        e.preventDefault()

        let newContact = {
            id: props.myContactBook[props.myContactBook.length-1].id + 1,
            name: newName,
            address: newAddress,
            avatar: newAvatar
        }
        
        console.log(props.myFunction)
    
        props.myFunction(newContact)
    }


    return(
        <>
            <div className="addContact">
            <form onSubmit={addContact}>
                <div className="avatarHolder"><input className="avatarUpload" type="file" placeholder="avatar" value={newAvatar} onChange={handleAvatarChange}></input></div>
                <div className="infoHolder">
                    <input type="text" placeholder="name" value={newName} onChange={handleNameChange}></input>
                    <input type="text" placeholder="address" value={newAddress} onChange={handleAddressChange}></input>
                    <button type="Submit">Submit</button>
                </div>
            </form>
            </div>
        </>

    )
}


export default AddContact