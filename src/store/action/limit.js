import * as actionTypes from './actionTypes'
import axios from 'axios';

export const dataTableLimitStart = () => {
     return {
         type: actionTypes.DATA_TABLE_LIMIT_START
     }
}

export const dataTableLimitSuccess = (dataTable) => {
    return {
        type: actionTypes.DATA_TABLE_LIMIT_SUCCESS,
        payload: dataTable
    }
}

export const dataTableLimitFail = (error) => {
    return {
        type: actionTypes.DATA_TABLE_LIMIT_FAIL,
        payload: error
    }
}

export const getDataLimit = () => {
    return (dispatch) => {
        dispatch(dataTableLimitStart());
        axios({
            method: 'get',
            url:'https://permata-net.firebaseio.com/.json'
        })
        .then((result) => {
            let data = result.data;
            let dataResult = [];

            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const element = data[key];
                    dataResult.push(
                        element
                    )
                }
            }
            dispatch(dataTableLimitSuccess(dataResult));
        }).catch((error) => {
            dispatch(dataTableLimitFail(error))
        });
    }
}