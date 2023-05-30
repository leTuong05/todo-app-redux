import { LIST_ADD, LIST_DELETE, TOGGLE } from "../../constants/ListContants";

// const initinalState = {
//     todoList: [],
//     repeat: false
// }
export const listReducer = (state = { todoList: [], repeat: false }, action) => {
    switch (action.type) {
        case LIST_ADD:
            const newList = action.payload;
            //kiểm tra xem trong todolist có item nào có name trùng với name của ation gửi lên
            const checkName = state.todoList.find(x => x.name === action.payload.name);
            if (!checkName) { // nếu ko có 
                return {
                    ...state,
                    repeat: false,
                    todoList: [...state.todoList, newList]//thêm newList vào cuối của todoList
                }

            }
            else {
                return {
                    ...state,
                    repeat: true
                }
            }
        case LIST_DELETE:
            return {
                ...state,
                todoList: state.todoList.filter(x => x.name !== action.payload) //lọc các todo khác với todo của action
            }
        case TOGGLE:
            // const todos = state.todoList;
            // console.log(todos[0].complete);
            // todos.map((todo,index)=>{
            //     console.log(index);
            // })
            // for(let i=0; i< state.todoList.length; i++){
            //     console.log(state.todoList[i].complete);
            //     state.todoList[i].complete = !state.todoList[i].complete;
            const todo = state.todoList.filter(x => x.name == action.payload);;
            todo[0].complete = !todo[0].complete;
            return {
                ...state,
            }



        default:
            return state;
    }
}