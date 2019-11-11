import React, {useState, useContext,useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = (props) =>{
    const alertContext  = useContext(AlertContext);
    const {setAlert} = alertContext;
    const authContext  = useContext(AuthContext);
    const {loginUser, error, clearError, isAuth} = authContext;
    const [user, setUser] = useState({
        email:'',
        password:''
    });

    useEffect(()=>{

        if (isAuth) {
            props.history.push('/')
        }
        if (error!==null) {
            setAlert(error, 'danger');
            clearError();
        }
        // eslint-disable-next-line
    },[error, isAuth, props.history]);

    const {email, password} = user;

    const onChange = e =>{
        setUser({...user,[e.target.name]:e.target.value})
    };

    const onSubmit = e => {
        e.preventDefault();
        if (email === ''|| password==='') {
            setAlert('Please enter oll fields', 'danger')
        } else {
            loginUser({email, password});
        }
    };

    return (
        <div className='form-container'>
            <h1>
                <span className="text-primary">Login</span> Account
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name='email' value={email} onChange={onChange} required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' value={password} onChange={onChange} required/>
                </div>
                <input type="submit" value="Login" className='btn btn-primary btn-block'/>
            </form>
        </div>
    )

};
export default Login;