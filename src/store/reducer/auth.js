import * as actionTypes from '../action/actionTypes'

const initialState = {
    idToken : '',
    err : '',
    loading : false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            console.log("start");
            return{
                ...state,
                loading : true
            }
        case actionTypes.AUTH_SUCCESS:
            console.log("sukses");
            return{
                ...state,
                loading: false,
                idToken: action.idToken
            }
        case actionTypes.AUTH_FAIL:
            console.log("fail");
            return{
                ...state,
                err: action.err,
                loading : false
            }
        default:
            return state
    }
}

export default authReducer;