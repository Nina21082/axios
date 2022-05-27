export const Compbutton = ({complated,id,onComplate}) => {
    return(
        <button type="button" className="btn btn-success m-2" onClick={() => onComplate(id)}>{!complated ? 'complated' : "uncomplated"}</button>
    )

}