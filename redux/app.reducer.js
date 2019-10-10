import actions from "./actions"

const initialState = {
    
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case actions.Types.GET_USERS_SUCCESS:
        return { ...state, users: [ ...payload] }

    default:
        return state
    }
}
