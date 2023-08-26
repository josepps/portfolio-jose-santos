import { ContainerProjetoStyle } from "./Projeto.style"

type ProjetoProps = {
    Src: string;
    Alt: string;
    SrcColecao: string;
    AltColecao: string;
    Titulo: string;
    Tecnologias: React.ReactNode[];
    Descricao: string;
    HrefSite?: string;
    HrefRepo?: string;
}

function Projeto(props: ProjetoProps) {

    return (
        <ContainerProjetoStyle>
            <img src={props.Src} alt={props.Alt} />
            <img src={props.SrcColecao} alt={props.AltColecao} />
            <div className='infoProjeto'>
                <h2>{props.Titulo}</h2>
                <ul>
                  {props.Tecnologias.map((i, index) => (
                    <li key={index}>{i}</li>
                  ))}
                </ul>
              </div>
              <div className='descricaoProjeto'>
                <p >{props.Descricao}</p>
              </div>
              <div className='containerLink'>
                {props.HrefSite && <a href={props.HrefSite} target='_blank'>Site</a>}
                {props.HrefRepo && <a href={props.HrefRepo} target='_blank'>Repositório</a>}
              </div>
        </ContainerProjetoStyle>
    )
}

export default Projeto