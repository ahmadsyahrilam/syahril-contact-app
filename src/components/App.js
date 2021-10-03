// component is a piece of a reusable code which can be reused anywhere
// has own functionality and output
import './App.css';
import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  //RENDERING LIST

  //contactArray
  const contacts = [
    {
      id: "1",
      name: "Syahril",
      email: "ahmadsyahrilam@gmail.com"
    },
    {
      id: "2",
      name: "Ahmad",
      email: "ahmadsyahrilabdmajid@gmail.com"
    }
  ]

  //JSX format is not HTML
  /*
  * ContactList: in order to pass in contact list (array), need to use props
  * ContactList below use props. eg.. propertyname={ContactsArray} 
  * can access in ContactList.js via props 
  */
  return (
      <div className="ui container">
        <Header />
        <AddContact />
        <ContactList contacts={contacts}/>
      </div>
  );
}

export default App;

