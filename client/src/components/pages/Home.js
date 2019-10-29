import React, {Fragment} from 'react';
import Contact from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm';
import ContctFilter from "../contacts/ContactFilter";

const Home = () =>
    (
        <div className='grid-2'>
            <div>
               <ContactForm/>
            </div>
            <div>
                <ContctFilter/>
                <Contact/>
            </div>
        </div>
    );


export default Home;