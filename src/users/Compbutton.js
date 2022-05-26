export const Compbutton = ({complated,id,onComplate}) => {
    return(
        <button type="button" className="complate" onClick={() => onComplate(id)}>{!complated ? 'complated' : "uncomplated"}</button>
    )

}