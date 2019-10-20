import React, {useReducer} from 'react';
import axios from 'axios';
import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from "../types";

const ContactState = props =>{

    const initialState = {
        contacts: [
            {
                "type": "personal",
                "id": "1",
                "name": "Andrew Brock",
                "email": "someNew@mail.com",
                "phone": "+380964550179"
            },
            {
                "type": "professional",
                "id": "2",
                "name": "Same Winchester",
                "email": "samwin@mail.com",
                "phone": "+333432342"
            }
        ]
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //Add Contact

    //Del contact

    //Set current contact

    //Clear current contact

    //update contact

    //Filter contact

    //Clear filter

    return <ContactContext.Provider value={{

    }}
    >
        {props.children }
    </ContactContext.Provider>


};

export default ContactState;