import './CampoTexto.css'


const CampoTexto = (props)=>{

    
    const placeHouderModificada = `${props.placeholder}...`;
    
  
    
    const aoDigitado = (evento)=>{
       props.aoAlterado(evento.target.value)
    }


    return(
        <div className="campoTexto">
            <label>{props.label}</label>
            <input 
                onChange={aoDigitado}   
                value={props.valor}  
                required={props.obrigatorio} 
                placeholder={placeHouderModificada}></input>
        </div>
    )
}

export default CampoTexto;