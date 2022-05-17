import { INCREMENT, DECREMENT } from './constant';

const INITIAL_STATE = {
    list: [],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                list: action.value,
            };
        default:
            return state;
    }
};

export default reducer;