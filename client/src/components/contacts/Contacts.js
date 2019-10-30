import React, {Fragment, useContext} from 'react';
import ContactItem from './ContactItem';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ContactContext from '../../context/contact/contactContext'

const Contacts = () =>{
    const contactContext =  useContext(ContactContext);
    const { contacts, filtered } = contactContext;

    if (contacts.length === 0){
        return <h4>Please add a contact!</h4>
    }

    return (
      <Fragment >
          <TransitionGroup>

              {filtered !== null ? filtered.map(contact => (
                  <CSSTransition key={contact.id} timeout={500} classNames="item">
                      <h3><ContactItem  contact={contact}  /></h3>
                  </CSSTransition>
              )):contacts.map(contact => (
                  <CSSTransition key={contact.id} timeout={500} classNames="item">
                      <h3><ContactItem  contact={contact}/></h3>
                  </CSSTransition>
              ))}


          </TransitionGroup>
      </Fragment>
    )
};
export default Contacts;