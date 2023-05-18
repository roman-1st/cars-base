import { CarsState, CarsActions, CarsActionTypes, CarsBase } from './../../types/cars';

const initialState : CarsState = {
    base: [],
    isLoading: false,
}

export const carsBaseReducer = (state = initialState, action: CarsActions): CarsState => {
    switch(action.type) {
        case CarsActionTypes.GET_CARS_BASE:
            return {
                ...state,
                isLoading: false,
                base: [...action.payload]
            }
        case CarsActionTypes.IS_LOADING: 
            return {
                ...state,
                isLoading: true,
            }
        
        case CarsActionTypes.REMOVE_CARD:
        return {
            ...state,
            base: state.base.filter( el => el.id !== action.payload)
        }
        case CarsActionTypes.CHANGE_CARD:
            const currentBase = state.base.filter( el => el.id !== action.payload.id)
            const currentCard:any = state.base.filter( el => el.id === action.payload.id)

            if (action.payload.name !== '') {
                currentCard[0].name = action.payload.name
            }
            if (action.payload.model !== '') {
                currentCard[0].model = action.payload.model
            }
            if (String(action.payload.price) !== '') {
                currentCard[0].price = action.payload.price
            }

            currentBase.push(...currentCard)
            currentBase.sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);

            return {
                ...state,
                base: [...currentBase]
            }

        default:
            return {
                ...state
            }
    }
}