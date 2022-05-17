import { INCREMENT, DECREMENT } from './constant';

export const increaseCounter = (array) => {
    return {
        type: INCREMENT, value: array
    };
};