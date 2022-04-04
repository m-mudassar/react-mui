import { CHANGE_EMAIL_FIELD, CHANGE_PASSWORD_FIELD, SIGN_IN_CLICK} from './constants';


const initialState = {
    emailField: '',
    passwordField: '',
};

export const emailEnter = (state = initialState, action={}) => {
    switch (action.type) {
        case CHANGE_EMAIL_FIELD:
            return Object.assign({}, state, {emailField:action.payload});
        default:
            return state;
    }
}

export const passwordEnter = (state = initialState, action={}) => {
    switch (action.type) {
        case CHANGE_PASSWORD_FIELD:
            return Object.assign({}, state, {passwordField:action.payload});
        default:
            return state;
    }
}

