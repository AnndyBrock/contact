import React, {useReducer} from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
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

    //Register User

    //Login user

    //LogOut

    //ClearErrors


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuth:state.isAuth,
                user:state.user,
                loading:state.loading,
                error:state.error
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;