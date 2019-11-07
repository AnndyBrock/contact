import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';


const AuthState = props => {
    const initialState = {
        token:localStorage.getItem('token'),
        user:null,
        isAuth:null,
        loading:true,
        error:null
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Load user
    const loadUser = ()=>{
    };

    //Register User
    const register = async (formDate)=>{
        const config = {
            headers:{
                'Content-Type':'application/json'
            }
        };
        try {
            const res = await axios.post('/api/users', formDate, config );
            dispatch({
                type:REGISTER_SUCCESS,
                payload:res.data
            })
        }catch (err) {
            dispatch({
                type:REGISTER_FAIL,
                payload:err.response.data.msg
            })
        }
    };

    //Login user
    const loginUser = ()=>{
    };
    //LogOut
    const logOutUSer = ()=>{
    };

    //ClearErrors
    const clearError = ()=>{
        dispatch({type:CLEAR_ERRORS})
    };

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuth:state.isAuth,
                user:state.user,
                loading:state.loading,
                error:state.error,
                register,
                loadUser,
                loginUser,
                logOutUSer,
                clearError
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;