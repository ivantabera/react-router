import {actionTypes} from "./actionTypes";

const reducerObject = (state, payload) => ({
    [actionTypes.success]: {
        ...state,
        error: false,
        loading: false,
        sincronizedItem: true,
        item: payload
    },
    [actionTypes.error]: {
        ...state,
        error: true
    },
    [actionTypes.save]: {
        ...state,
        item: payload
    },
    [actionTypes.paring]: {
        ...state,
        loading: true,
        sincronizedItem: false
    }
})

export const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
}