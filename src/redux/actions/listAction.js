import { LIST_ADD, LIST_DELETE, TOGGLE } from "../../constants/ListContants";

export const addList = (name) => async (dispatch, getState) => {
    dispatch({
        type: LIST_ADD,
        payload: {
            name: name,
            complete: false
        }
    })

    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
};
export const deleteList = (name) => async (dispatch, getState) => {
    dispatch({
        type: LIST_DELETE,
        payload: name
    })

    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}
export const toogle = (name) => async (dispatch, getState) => {
    dispatch({
        type: TOGGLE,
        payload: name
    })

    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList))
}