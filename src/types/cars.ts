export interface CarsState {
    base: CarsBase[];
    isLoading: boolean;
}

export interface CarsBase {
    id: number;
    name: string;
    model: string;
    year: number;
    color: string;
    price: number;
    latitude: number;
    longitude: number;
}

export enum CarsActionTypes {
    GET_CARS_BASE = "GET_CARS_BASE",
    IS_LOADING = "IS_LOADING",
    CHANGE_CARD = "CHANGE_CARD",
    REMOVE_CARD = "REMOVE_CARD",
}

interface getCarsBaseAction {
    type: CarsActionTypes.GET_CARS_BASE,
    payload: CarsBase[],
}

interface isLoadingAction {
    type: CarsActionTypes.IS_LOADING,
}

interface changeCardAction {
    type: CarsActionTypes.CHANGE_CARD,
    payload: CarsBase
}

interface removeCardAction {
    type: CarsActionTypes.REMOVE_CARD,
    payload: number,
}

export type CarsActions = 
    getCarsBaseAction |
    isLoadingAction |
    changeCardAction |
    removeCardAction