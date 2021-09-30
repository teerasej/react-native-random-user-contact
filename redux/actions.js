
import call from 'react-native-phone-call'

export const actionTypes = {
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    USER_SELECTED: 'USER_SELECTED'
}

export const startGetUser = async (dispatch) => {
    const url = 'https://randomuser.me/api/?results=50';

}

export const createAction_UserSelected = (user) => {
    return {
        type: actionTypes.USER_SELECTED,
        payload: user
    }
}

export const makeCall = (phoneNumber) => {
    call({number: phoneNumber}).catch(console.error);
}

