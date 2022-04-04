import { CHANGE_EMAIL_FIELD } from './constants';

export const setEmailField = (text) => ({
    type: CHANGE_EMAIL_FIELD,
    payload: text
})