import React, {Fragment, useContext} from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext'

const Contacts = () =>{
    const contactContext =  useContext(ContactContext);
    const { contacts, filtered } = contactContext;

    if (contacts.length === 0){
        return <h4>Please add a contact!</h4>
    }

    return (
      <Fragment>

          {filtered !== null ? filtered.map(contact => (
              <h3><ContactItem key={contact.id} contact={contact}/></h3>
          )):contacts.map(contact => (
              <h3><ContactItem key={contact.id} contact={contact}/></h3>
          ))}


      </Fragment>
    )
};
export default Contacts;