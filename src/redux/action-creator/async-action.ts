import { CarsActions, CarsActionTypes } from './../../types/cars';

import { Dispatch } from "redux"
import axios from 'axios';

export const getCarsBase = () => {
    return async (dispatch: Dispatch<CarsActions>) => {
        try {
            dispatch({ type: CarsActionTypes.IS_LOADING })
            const response = await axios.get('https://test.tspb.su/test-task/vehicles')

            dispatch({ type: CarsActionTypes.GET_CARS_BASE, payload: response.data })
        } catch (e: any) {
            console.log(e.message);
        }
    }
}