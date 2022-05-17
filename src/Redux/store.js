import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getPersistConfig } from 'redux-deep-persist';

const persistConfig = {
    key: 'persist-key',
    storage,
    // whitelist: ['count[0]']
}
const PersistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(PersistedReducer, composeWithDevTools());
const persistor = persistStore(store);
export default store;
export { persistor }

// blacklist
// whitelist
// nestedpersist
// transform