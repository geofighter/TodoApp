import {TodoItem} from "./TodoItem";


export const TodoList = ({ todos = [] }) => {
    return(
        <>
            <div className="col s12 m12 l6">
                <div className="card-panel hoverable">
                    <h4>Your Tasks</h4>
                    <ul className='black-text collection border-white'>
                        {
                            todos.length == 0
                                ?
                                (
                                    <h5 className="indigo-text">
                                        You Don't have any Task to do.<br/>
                                        Please, add a task to begin.
                                    </h5>

                                ):
                                (
                                    todos.map(  todo => (
                                        <TodoItem
                                            key={ todo.id }
                                            { ...todo }
                                        />
                                    ))
                                )

                        }
                    </ul>
                </div>
            </div>
        </>
    );
}