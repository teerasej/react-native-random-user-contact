
const Types = {
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    USER_SELECTED: 'USER_SELECTED'
}

const startGetUser = async (dispatch) => {

    const url = 'https://randomuser.me/api/?results=50';

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    if (response && response.status === 200) {
        const json = await response.json();

        console.log('JSON:',json);
        console.log('Accounts:', json.results);

        dispatch({
            type: Types.GET_USERS_SUCCESS,
            payload: json.results
        });

    } else {
        console.error(response.status, response);
    }
}

const selectUser = async (user) => {
    return {
        type: Types.USER_SELECTED,
        payload: user
    }
}

export default {
    Types,
    startGetUser,
    selectUser
}