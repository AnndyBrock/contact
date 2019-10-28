import React, {Fragment} from 'react';
import Contact from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm';

const Home = () =>
    (
        <div className='grid-2'>
            <div>
               <ContactForm/>
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    );


export default Home;