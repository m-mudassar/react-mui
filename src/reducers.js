import { CHANGE_EMAIL_FIELD } from './constants';

const initialState = {
    emailField: '',
};

export const emailEnter = (state = initialState, action={}) => {
    switch (action.type) {
        case CHANGE_EMAIL_FIELD:
            return Object.assaign({}, state, {emailField:action.payload});
        default:
            return state;
    }
}