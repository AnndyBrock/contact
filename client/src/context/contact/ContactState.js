import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';


const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id:1,
                name:'Andrew Brock',
                email:'andrew@gmail.com',
                phone:'222-111-0000',
                type:'personal'
            },
            {
                id:2,
                name:'Brock Andre',
                email:'andrew222@gmail.com',
                phone:'000-111-2222',
                type:'personal'
            },
            {
                id:3,
                name:'Andrew New',
                email:'andrew333@gmail.com',
                phone:'000-111-3333',
                type:'professional'
            }
        ],
        current:null
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    // Get Contacts

    // Add Contact
    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({ type: ADD_CONTACT, payload: contact})
    };
    // Delete Contact
    const deleteContact = (id)=> {
        dispatch({ type: DELETE_CONTACT, payload: id})
    };
    // Update Contact
    const setCurrent = ( contact )=> {
        dispatch({ type: SET_CURRENT, payload: contact})
    };
    // Clear Contacts
    const clearCurrent = ( )=> {
        dispatch({ type: CLEAR_CURRENT })
    };
    // Set Current Contact
    // Clear Current Contact
    // Filter Contacts
    // Clear Filter
    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current:state.current,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent
            }}
        >
            {props.children}
        </ContactContext.Provider>
    );
};

export default ContactState;