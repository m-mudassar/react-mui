import {combineReducers} from 'redux'
import { emailEnter, passwordEnter } from './reducers'

export default combineReducers({
    emailEnter, 
    passwordEnter
})