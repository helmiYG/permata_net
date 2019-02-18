import * as actionTypes from './actionTypes'
import axios from 'axios';

export const dataTableInfokursStart = () => {
     return {
         type: actionTypes.DATA_TABLE_INFOKURS_START
     }
}

export const dataTableInfokursSuccess = (dataTable) => {
    return {
        type: actionTypes.DATA_TABLE_INFOKURS_SUCCESS,
        payload: dataTable
    }
}

export const dataTableInfokursFail = (error) => {
    return {
        type: actionTypes.DATA_TABLE_INFOKURS_FAIL,
        payload: error
    }
}

export const getDataTable = () => {
    return (dispatch) => {
        dispatch(dataTableInfokursStart());
        axios({
            method: 'get',
            url:'https://permatanet-afc1d.firebaseio.com/Mata_Uang.json'
        })
        .then((result) => {
            dispatch(dataTableInfokursSuccess(result.data));
        }).catch((error) => {
            dispatch(dataTableInfokursFail(error))
        });
    }
}