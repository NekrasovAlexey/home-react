import {Store, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {logger} from 'app/Common/Middleware/logger';
import {RootState, rootReducer} from 'app/reducer';

export function configureStore(): Store<RootState> {
    let middleware = applyMiddleware(logger);

    if (process.env.NODE_ENV !== 'production') {
        middleware = composeWithDevTools(middleware);
    }

    const store = createStore(rootReducer as any, {}, middleware) as Store<RootState>;

    if (module.hot) {
        module.hot.accept('app/reducer', () => {
            const nextReducer = require('app/reducer');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
