import './Formulario.css'
import CampoTexto from '../CampoTexto/';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
const Formulario = () => {
    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'Mobile',
        'Inovação e Gestao'
    ]
    return (
        <section className="formulario" >
            <form >
                <h2>Preencha os dados para criar os cards do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereco da imagem" />
                <ListaSuspensa label="Time" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}
export default Formulario