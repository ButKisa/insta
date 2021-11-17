import {combineReducers} from 'redux'
import { friendsReducer } from './friendsReducer';
import { newsReducer } from './newsReducer';
import {getInfoPersonReducer} from './getInfoPersonReducer'
import {getPhotoUserReducer} from './getPhotoUserReducer'

export const rootReducer = combineReducers({ 
    friends: friendsReducer,
    news: newsReducer,
    person: getInfoPersonReducer,
    photo: getPhotoUserReducer
});