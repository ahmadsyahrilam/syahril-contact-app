import { render } from "@testing-library/react";
import React from "react";

// props below is from App.js. --> <ContactList/>
const ContactList = (props) => {
    console.log(props);

    /* 
    * create function to render contact list
    * this function going to take props.contact and map it
    */
    const renderContactList = props.contacts.map((contact) => {
        return (
            <div className="item">
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div>{contact.email}</div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
        )
    })

    return (
        <div className="ui called list">
            {renderContactList}
        </div>
    )
}

export default ContactList;