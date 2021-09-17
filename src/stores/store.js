import { applyMiddleware, createStore, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

const middlewareEnhancer = applyMiddleware(thunkMiddleware);
const composedEnhancer   = compose(middlewareEnhancer);

export default function configureStore(preloadedState) {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer];
    const composedEnhancers = compose(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    return store;
}
