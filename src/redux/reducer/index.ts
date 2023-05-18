import { carsBaseReducer } from './carsReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    cars: carsBaseReducer,
})

export type RootState = ReturnType<typeof rootReducer>