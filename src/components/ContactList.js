import React from "react";
import ContactCard from "./ContactCard";

// props below is from App.js. --> <ContactList/>
const ContactList = (props) => {
    console.log(props);

    /* 
    * create function to render contact list
    * this function going to take props.contact and map it
    */
    const renderContactList = props.contacts.map((contact) => {
        return ( 
            // <div className="item">
            //     <div className="content">
            //         <div className="header">{contact.name}</div>
            //         <div>{contact.email}</div>
            //     </div>
            //     <i className="trash alternate outline icon"></i>
            // </div>

            //Above code is remove to contactCard and replace with code: <ContactCard></ContactCard>

            <ContactCard contact={contact}></ContactCard>
        );
    })

    return (
        <div className="ui called list">
            {renderContactList}
        </div>
    )
}

export default ContactList;