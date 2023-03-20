import './ListaSuspensa.css'
const ListaSuspensa = (props)=>{
    return(
        <div className="Lista-Suspensa">
            <label>{props.label}</label>
            <select>
                {props.itens.map((item, index) => <option key={index}>{item}</option>)}
            </select>
        </div>
    )
}
export default ListaSuspensa;