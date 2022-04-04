import { CHANGE_EMAIL_FIELD, CHANGE_PASSWORD_FIELD } from './constants';

export const setEmailField = (text) => ({
    type: CHANGE_EMAIL_FIELD,
    payload: text
})

export const setPasswordField = (text) => ({
    type: CHANGE_PASSWORD_FIELD,
    payload: text
})

