export const TodoItem = ({ id, name, description, done }) => {
    return(
        <>
            <li className='collection-item avatar animate__bounceIn' key={id}>
                <i className='material-icons circle pink darken-2 z-depth-3'>list</i>
                <b><span className='title indigo-text'>{ name }</span></b>
                <p>{ description }<br/></p>
                <a href="#!" className="secondary-content btn-floating hoverable indigo"><i className="material-icons white-text">check_circle</i></a>
            </li>
        </>
    );
}