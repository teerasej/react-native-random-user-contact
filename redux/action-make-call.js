
import call from 'react-native-phone-call'

export const makeCall = (phoneNumber) => {
    call({number: phoneNumber}).catch(console.error);
}