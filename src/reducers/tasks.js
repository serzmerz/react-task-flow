import {CREATE_TASK, DELETE_TASK} from '../constants/actions';

const initialState = {
    items: JSON.parse(localStorage.getItem('tasks'))
};

export default function orders(state = initialState, action) {
    switch (action.type) {
        case CREATE_TASK:
            const newItems = [...state.items, {id: Math.floor(Math.random() * (1000)), ...action.payload}];
            localStorage.setItem('tasks',JSON.stringify(newItems));
            return {
                ...state,
                ...{
                    items: newItems
                }
            };
        case DELETE_TASK:
            return {
                ...state,
                ...{
                    items: state.items.filter( (item) => item.id !== action.id)
                }
            };
        default:
            return state;
    }
}