import './Formulario.css'
import CampoTexto from '../CampoTexto/';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';


const Formulario = () => {

   
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'Mobile',
        'Inovação e Gestao'
    ]

    const [nome,setNome]= useState('')
    const [cargo,setCargo]=useState('')
    const [imagem,setImagem]=useState('')
    const [time,setTime]= useState('')
   

    const aoSalvar = (evento)=>{
        evento.preventDefault();
        console.log('form foi submetido:  ',nome, cargo , imagem, time);
       
    }
    return (
        <section className="formulario" >
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar os cards do colaborador</h2>
                
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    value={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereco da imagem"
                    value={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    aoAlterado={valor=>setTime(valor)}
                    valor={time}
                    obrigatorio={true} 
                    label="Time"
                    itens={times}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}
export default Formulario