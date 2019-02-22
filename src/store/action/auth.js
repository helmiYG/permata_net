import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () =>{
    console.log("authstart");
    return{
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token) => {
    return{
        type: actionTypes.AUTH_SUCCESS,
        idToken: token
    }
}

export const authFail = (err) => {
    return{
        type: actionTypes.AUTH_FAIL,
        err: err
    }
}

export const auth = (email,password) => {
    console.log(email,password,"Masuk redux auth");
    return dispatch => {
        dispatch(authStart());
        axios({
            method: 'post',
            url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDD4BfiDeShez3L-hf9NIKl5B7mOD0ihcY',
            data:{
                email: email,
                password: password,
                returnSecureToken: true
            }
        })
        .then((result) => {
            console.log(result.data.idToken,"Ini di then");
            dispatch(authSuccess(result.data.idToken))
        }).catch((err) => {
            dispatch(authFail(err.response.data.error.message))
            console.log(err.response.data.error.message,'ini di cath error');
        });
    }
}