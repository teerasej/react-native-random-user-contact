import actions from "./actions";

const initialState = {
    
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actions.Types.GET_USERS_SUCCESS:
        return { ...state, users: [ ...payload] }

    case actions.Types.USER_SELECTED: 
        return { ...state, selectedUser: payload }

    default:
        return state
    }
}
