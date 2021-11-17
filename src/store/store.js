import {createStore, applyMiddleware} from 'redux';
// import createSagaMiddleware from 'redux-saga';
import {rootReducer} from './reducers';

// import sagaWatcher from './sagas/saga';
// const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware());

// sagaMiddleware.run(sagaWatcher);
