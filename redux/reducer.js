import { Types } from "./actions"

const initialState = {
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case Types.GET_USERS_SUCCESS:
        console.log('payload', payload)
        return { ...state, users: [ ...payload ] }

    case Types.USER_SELECTED: 
        return { ...state, selectedUser: payload }

    default:
        return state
    }
}
