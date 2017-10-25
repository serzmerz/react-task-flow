import { CREATE_TASK, DELETE_TASK } from '../constants/actions';

export const createTask = (payload) => dispatch => {
    dispatch({ type: CREATE_TASK, payload })
};

export const deleteTask = (id) => dispatch => {
    dispatch({ type: DELETE_TASK, id })
};
