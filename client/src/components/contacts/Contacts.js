import React, {Fragment, useContext, useEffect} from 'react';
import ContactItem from './ContactItem';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ContactContext from '../../context/contact/contactContext'
import Spinner from "../layout/Spinner";

const Contacts = () =>{
    const contactContext =  useContext(ContactContext);
    const { contacts, filtered, getContacts, loading } = contactContext;

    useEffect(()=>{
        getContacts()
        // eslint-disable-next-line
    },[]);

    if (contacts !== null && contacts.length === 0){
        return <h4>Please add a contact!</h4>
    }

    return (
      <Fragment >
          {contacts !== null && !loading ? (<TransitionGroup>
              {filtered !== null ? filtered.map(contact => (
                  <CSSTransition key={contact._id} timeout={500} classNames="item">
                      <h3><ContactItem  contact={contact}  /></h3>
                  </CSSTransition>
              )):contacts.map(contact => (
                  <CSSTransition key={contact._id} timeout={500} classNames="item">
                      <h3><ContactItem  contact={contact}/></h3>
                  </CSSTransition>
              ))}
          </TransitionGroup>) : <Spinner/>}
      </Fragment>
    )
};
export default Contacts;