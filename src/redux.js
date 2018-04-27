import { reducer as formReducer } from 'redux-form';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({
  form: formReducer
})

const logger = createLogger();

const store = createStore(rootReducer)

export default store;
