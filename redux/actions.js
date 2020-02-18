
import call from 'react-native-phone-call'

const Types = {
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    USER_SELECTED: 'USER_SELECTED'
}

const startGetUser = async (dispatch) => {

    
}

const selectUser = (user) => {
    return {
        type: Types.USER_SELECTED,
        payload: user
    }
}

const makeCall = (phoneNumber) => {
    call({number: phoneNumber}).catch(console.error);
}

export default {
    Types,
    startGetUser,
    selectUser,
    makeCall
}