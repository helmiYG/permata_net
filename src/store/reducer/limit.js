import * as actionTypes from '../action/actionTypes';

let initialState = {
    data: null,
    error: null,
    loading: true
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.DATA_TABLE_LIMIT_START:
            return{
                ...state,
                loading : true
            }
        case actionTypes.DATA_TABLE_LIMIT_SUCCESS:
            return{
                ...state,
                data: action.payload
                //loading: false
            }
        case actionTypes.DATA_TABLE_LIMIT_FAIL:
            return{
                ...state,
                loading : false,
                error   : action.payload
            }
        default:
        return state;
    }
}

export default reducer;