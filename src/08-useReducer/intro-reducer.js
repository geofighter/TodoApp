const initialState = [{
    id: 1,
    todo: 'Comprar Curso de React JS',
    done: false,
}];


const todoReducer = ( state=  initialState, action = {}) => {
    if (action.type === '[TODO] add todo'){
        return [...state, action.payload];
    }
    return state;

}

let todos = todoReducer();

const newTodo = [
    {
        id: 2,
        todo: 'Instalar software y librerias necesarias para el curso',
        done: false,
    },
    {
        id: 3,
        todo: 'Tomar clase de fundamentos de JS moderno',
        done: false,
    }
]
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodoAction);
console.log({state: todos});