import entityReducer from './slices/entitySlice'
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {api} from './api/entityApi'

const rootReducer = combineReducers({
    [api.reducerPath]: api.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})