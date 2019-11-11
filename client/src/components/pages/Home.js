import React, {useContext, useEffect} from 'react';
import Contact from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm';
import ContctFilter from "../contacts/ContactFilter";
import AuthContext from '../../context/auth/authContext';


const Home = (props) =>{
    const authContext = useContext(AuthContext);

    useEffect(()=>{
        if (!authContext.isAuth) {
            props.history.push('/login')
        }
        authContext.loadUser()

        // eslint-disable-next-line
    },[]);
    return (
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
};


export default Home;