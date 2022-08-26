import {useForm} from "../../hooks";

export const TodoAdd = ( { onNewTodo } ) => {

    const { name ,description, onInputChange, onResetForm } = useForm({
        name: '',
        description: ''
    });

    const onFormSubmit = ( event ) => {
        event.preventDefault();
        if( description.length <= 1 && name.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            name: name,
            description: description,
            done: false,
        }

        onNewTodo( newTodo );
        onResetForm();
    }

    return(
        <>
            <div className="col s12 m12 l6">
                <div className="card-panel hoverable">
                    <h4>Add a Task</h4>
                    <div className="row">
                        <form onSubmit={ onFormSubmit }>
                            <div className="input-field col s12 m12 l12">
                                <i className="small material-icons prefix">add_circle</i>
                                <input id="name" type="text" className="validate" name="name" required value={ name } onChange={ onInputChange }/>
                                <label htmlFor="name">Escribe la tarea</label>
                            </div>
                            <div className="input-field col s12 m12 l12">
                                <i className="small material-icons prefix">add_circle</i>
                                <input id="description" type="text" className="validate" name="description" value={ description } onChange={ onInputChange }/>
                                <label htmlFor="description">Detalle de la tarea (opcional)</label>
                            </div>
                            <br/>
                            <div className="input-field col s12 m12 l12 center">
                                <button className="btn-floating z-depth-2 hoverable pink darken-2"><i className="material-icons">send</i></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}