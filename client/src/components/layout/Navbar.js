import React, {Fragment, useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext'



const  Navbar = ({title, icon})=> {

    const authContext = useContext(AuthContext);
    const contactContext =  useContext(ContactContext);
    const {isAuth, logOutUSer, user} = authContext;
    const {clearCurrent} = contactContext;

    const onLogOut = () =>{
       logOutUSer();
       clearCurrent();
    };

    const authLinks = (
      <Fragment>

          <li>Hello {user && user.name}</li>
          <li>
              <a onClick={onLogOut} href="#!">
                  <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">LogOut</span>
              </a>
          </li>
          <li>
              <Link to='/about'>About</Link>
          </li>

      </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>

        </Fragment>
    );

    return (
        <div className='navbar bg-primary'>
            <h1>
                <Link className={icon} to='/'> {title}</Link>
            </h1>
            <ul>
                {isAuth ? authLinks : guestLinks}
            </ul>
        </div>
    )
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
};

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
};


export default Navbar;
