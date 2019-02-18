import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk)
    )
  );
  return store;
}