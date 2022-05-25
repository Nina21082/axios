export const InputElement = (props) =>{
    return(
        <div className="input-group mb-3">
        <input type="text" className="form-control"aria-label="Recipient's username" aria-describedby="button-addon2" value={props.value}/>
        <button type="button" class="btn btn-success">Add</button>
        </div>
    )
}