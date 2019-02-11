import * as actionTypes from '../action/actionTypes'

const initState = {
    title: 'PERMATA LOGIN'
}

const headReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TITLE_INFOKURS: 
            return {
                ...state,
                title: 'BERANDA PERMATA'
            }
        case actionTypes.CHANGE_TITLE_BERANDA:
            return {
                ...state,
                title: 'INFOKURS PERMATA'
            }
        default:
            return state
    }
}

export default headReducer