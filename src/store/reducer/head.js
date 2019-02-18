import * as actionTypes from '../action/actionTypes'

const initState = {
    title: '',
    page:''
}

const headReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TITLE_INFOKURS: 
            return {
                ...state,
                title: 'INFOKURS PERMATA',
                page: 'Infokurs'
            }
        case actionTypes.CHANGE_TITLE_BERANDA:
            return {
                ...state,
                title: 'BERANDA PERMATA',
                page: 'Beranda'
            }
        case actionTypes.CHANGE_TITLE_LOGIN:
            return{
                ...state,
                title: 'LOGIN PERMATA',
                page: 'Login'
            }
        default:
            return state
    }
}

export default headReducer