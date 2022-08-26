import {useReducer} from "react";
import {todoReducer} from './todoReducer';
import {TodoList} from "./components/TodoList";
import {TodoAdd} from "./components/TodoAdd";
import {TodoCounter} from "./components/TodoCounter";

const initialState = [];

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState );

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch( action );
    }

    return (
        <>
            <div className='row card-panel indigo lighten-4 indigo-text'>

                <h3 className="center">TodoApp</h3>
                <TodoAdd onNewTodo={ handleNewTodo }/>
                <hr/>
                <TodoList todos={ todos }/>
                <TodoCounter status={ todos }/>
            </div>
        </>
    )
}