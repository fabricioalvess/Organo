import './ListaSuspensa.css'
const ListaSuspensa = (props)=>{
    return(
        <div className="Lista-Suspensa">
            <label>{props.label}</label>
            <select 
                onChange={evento => props.aoAlterado(evento.target.value)}
                required={props.required} 
                value={props.valor}
            > 
                {props.itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    )
}
export default ListaSuspensa;