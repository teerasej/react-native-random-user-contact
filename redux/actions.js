
const Types = {
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS'
}

const startGetUser = (dispatch) => {

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

export default {
    Types,
    startGetUser
}