import * as actionTypes from './actionTypes'

export const changeTitleInfoKurs = () => {
    return{
        type: actionTypes.CHANGE_TITLE_LOGIN
    }
}

export const changeTitleLogin = () => {
    return{
        type: actionTypes.CHANGE_TITLE_LOGIN
    }
}

export const changeTitle = (page) => {
    return (dispatch) => {
        switch (page) {
            case '/infokurs':
                dispatch(changeTitleInfoKurs())
                break;
            default:
                dispatch(changeTitleLogin())
                break;
        }
    }
}