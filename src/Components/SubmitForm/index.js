import React, { useState } from "react";
import Contact from "../Contact";
import Button from "../Button"
import {StyledForm, StyledInput} from "./styles"

function SubmitForm({ children }) {
    const [inputData, setInputData] = useState({  firstName: "", lastName: "" });
    const [contactsData, setContactsData] = useState([])
    const [contactId, setContactId] = useState(0);

    function handleChange(e) {
        const { name, value } = e.target;
        setInputData(prevInputData => ({ ...prevInputData, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setContactsData(prevContacts => [...prevContacts, inputData])
        setContactId(contactId +1);
        setInputData({  firstName: "", lastName: "" });
    }

    function removeContact(id) {
        setContactsData(prevContact => prevContact.filter(contact => contactId !== id))
        
    }

    const contacts = contactsData.map(contact => <Contact key={contact.firstName + contact.lastName}
        firstName={contact.firstName} lastName={contact.lastName} id={contactId}removeContact={removeContact} >
        {children}
    </Contact>)

    return (
        <StyledForm>
         <form onSubmit={handleSubmit}>
            <StyledInput
                placeholder="FIRST NAME"
                name="firstName"
                type="text"
                value={inputData.firstName}
                onChange={handleChange}

                />
                <br/>
            <StyledInput
                placeholder="LAST NAME"
                name="lastName"
                type="text"
                value={inputData.lastName}
                onChange={handleChange}
            />
            <Button>Submit</Button>
            </form> 
            {contacts}
        </StyledForm>
    )
}

export default SubmitForm;