// component is a piece of a reusable code which can be reused anywhere
// has own functionality and output
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { uuid } from 'uuidv4';
import api from '../api/contacts';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail'; 

function App() {

  const LOCAL_STORAGE_KEY = "contacts" //key
  const [contacts, setContacts] = useState([])

  //RetrieveContacts
  //to be in asynchronize mode need to use async,await and return promise 
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  }

  const addContactHandler = async (contact) => {
    console.log(contact)
    //create new request
    const request = {
      id: uuid(),
      ...contact //destructuring of the contact
    }

    const response = await api.post("/contacts", request) //call api
    console.log(response);
    setContacts([...contacts, response.data]); 
  };

    /**
     * Delete contact, based on id
     * create copy of the contact first
     * pass the handler at return --> 'getContactId={removeContactHandler}' 
     */
    const removeContactHandler = async (id) => {
      await api.delete(`/contacts/${id}`);
                              //get copy then filter out contact
      const newContactList = contacts.filter((contact) => {
        return contact.id !== id;
      });

      setContacts(newContactList) //change contact state
    }

    /** grab information from local storage and display it
     * after get the data, store in variable
    */
    useEffect(() => {
        // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        // if (retrieveContacts) setContacts(retrieveContacts); 
        const getAllContacts = async () => {
          const allContacts = await retrieveContacts();
          if(allContacts) setContacts(allContacts);
        };
        getAllContacts()
      }, []);

    /** if refresh the page, data will gone so use localstorage to process data.
     * to use local storage, use reactHook --> useEffect().
     * value change, component is render again 
     * to check if the data inside the local storage go to inspect > application > local storage
    * */ 
    useEffect(() => {
      // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)) //add key
    }, [contacts]); //add dependancies
  /*
  * ContactList: in order to pass in contact list (array), need to use props
  * ContactList below use props. eg.. propertyname={ContactsArray} 
  * can access in ContactList.js via props 
  */

  // in switch they only match first route. use 'exact' to match the exact path 
  return (
      <div className="ui container">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact 
              render = {(props) => (
                <ContactList {...props} contacts={contacts} getContactId={removeContactHandler}/>
              )}
            />
            <Route path="/add" 
              render = {(props) => (
                <AddContact {...props} addContactHandler={addContactHandler}/>
              )}
              // component={() => (
              //   <AddContact addContactHandler={addContactHandler}/>
              // )} 
            />
            <Route path="/contact/:id" component={ContactDetail}/>

          </Switch>
        </Router>
      </div>
  );
}

export default App;

