
import { Types } from './actions'
import axios from 'axios'

export const startGetUser = async (dispatch) => {
    
    const url = 'https://randomuser.me/api/?results=50';

    const response = await axios.get(url);

    if (response && response.status === 200) {

        const json = await response.data;

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