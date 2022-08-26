export const TodoCounter = ({ todos = [] }) => {
    return(
        <>
            <div className="col s12 m12 l12 center-align">
                <div className="card-panel indigo white-text">
                    <h5 className="center">Total Tasks: <span className="chip pink darken-2 white-text"><b>1</b></span></h5>
                    <h5 className="center">Queue tasks: <span className="chip pink darken-2 white-text"><b>1</b></span></h5>
                </div>
            </div>
        </>
    )
}