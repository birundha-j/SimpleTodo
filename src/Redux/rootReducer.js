import { combineReducers } from 'redux';

import counterReducer from './reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;

// import { combineReducers } from 'redux';

// import counterReducer from './reducer';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const userpersistConfig = {
//     key: 'user',
//     storage,
//     whitelist: ['userInfo']
// }

// const rootReducer = combineReducers({
//     counter: persistReducer(userpersistConfig, counterReducer),
// });

// export default rootReducer;