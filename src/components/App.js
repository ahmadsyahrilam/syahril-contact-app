// component is a piece of a reusable code which can be reused anywhere
// has own functionality and output
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  //RENDERING LIST

  //-contactArray-
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Syahril",
  //     email: "ahmadsyahrilam@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "Ahmad",
  //     email: "ahmadsyahrilabdmajid@gmail.com"
  //   }
  // ]
  const LOCAL_STORAGE_KEY = "contacts" //key
  const [contacts, setContacts] = useState([])
  const addContactHandler = (contact) => {
    console.log(contact)
    //get previous state of the contacts
    setContacts([...contacts, contact])
  };

    /** grab information from local storage and display it
     * after get the data, store in variable
    */
    useEffect(() => {
      const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        //retrieve contacts if contacts available
        if (retrieveContacts) setContacts(retrieveContacts); 
      }, []);

    /** if refresh the page, data will gone so use localstorage to process data.
     * to use local storage, use reactHook --> useEffect().
     * value change, component is render again 
     * to check if the data inside the local storage go to inspect > application > local storage
    * */
    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)) //add key
    }, [contacts]); //add dependancies
  /*
  * ContactList: in order to pass in contact list (array), need to use props
  * ContactList below use props. eg.. propertyname={ContactsArray} 
  * can access in ContactList.js via props 
  */

  return (
      <div className="ui container">
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts}/>
      </div>
  );
}

export default App;

