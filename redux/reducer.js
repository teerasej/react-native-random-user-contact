import { actionTypes } from "./actions"


const initialState = {
    
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actionTypes.GET_USERS_SUCCESS:
        return { ...state, users: [ ...payload] }

    case actionTypes.USER_SELECTED: 
        return { ...state, selectedUser: payload }

    default:
        return state
    }
}
