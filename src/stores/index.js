import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './actions/rootEpics';
import rootReducer from './reducers/rootReducers';
import helper from './actions/queries/blog/helper';

export default function configureStore() {
  const composeEnhancers =
    process.env.NODE_ENV === 'development'
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : null || compose;

  const epicMiddlerware = createEpicMiddleware({
    dependencies: {
      getRequest: helper,
    },
  });

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddlerware)),
  );
  epicMiddlerware.run(rootEpic);

  return store;
}
