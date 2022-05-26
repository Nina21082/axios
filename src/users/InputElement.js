export const InputElement = (props) =>{
    return(
        <div className="col-6 input">
        <input type="text" className="form-control"aria-label="Recipient's username" aria-describedby="button-addon2" value={props.value}/>
        <button type="button" className="btn btn-success">Add</button>
        </div>
    )
}