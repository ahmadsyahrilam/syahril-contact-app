import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

// props below is from App.js. --> <ContactList/>
const ContactList = (props) => {
    const inputEl = useRef("");

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

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

            //passing clickHandler from innerchild to its parent, and parent to its parent which is contactCard will give id to contactList, from contactList to App.js
            <ContactCard contact={contact} clickHandler = {deleteContactHandler} key={contact.id}></ContactCard>
        );
    })

    const getSearchTerm = () => {
        // console.log(inputEl.current.value);
        props.searchKeyword(inputEl.current.value)
    }

    return (
        <div class="main">
            <h2>
                Contact List
                <Link to="/add">
                    <button className="ui right floated button blue">Add Contact</button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input fluid">
                    <input ref={inputEl} type="text" placeholder="Search Contacts" className="prompt" value = {props.term} onChange = {getSearchTerm}/>
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui called list">{renderContactList.length > 0 ? renderContactList: "No Contacts Available"}</div>
        </div>
    )
}

export default ContactList;