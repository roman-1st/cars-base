import { CarsActionTypes, CarsBase } from './../../types/cars';

export const removeCardAction = (payload: number) => {
    return ({type: CarsActionTypes.REMOVE_CARD, payload})
}

export const changeCardAction = (payload: any) => {
    return ({type: CarsActionTypes.CHANGE_CARD, payload})
} 