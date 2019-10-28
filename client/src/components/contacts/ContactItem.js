import React,{useContext, useState} from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';


const ContactItem = ({contact}) =>{

    const contactContext = useContext(ContactContext);

    const {name, id, email, phone, type } = contact;

    const deleteContact = () =>{
        contactContext.deleteContact(id)
    };

    return (
        <div className='card bg-light'>
            <h3 className="text-primary text-left">
                {name}{' '}
                <span style={{ float:'right'}}
                    className={'badge ' + (type === 'professional'? 'badge-success':'badge-primary')} >
                    {type.charAt(0).toUpperCase()+type.slice(1)}
                </span>
                <ul className='list'>
                    {email && (<li>
                        <i className="fas fa-envelope-open"/> {email}
                    </li>)}
                    {phone && (<li>
                        <i className="fas fa-phone"/> {phone}
                    </li>)}
                </ul>
                <p>
                    <button className="btn btn-dark btn-sm" >Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={deleteContact}>Delete</button>
                </p>
            </h3>
        </div>
    )
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
};
export default ContactItem;