import { ContatoStyle } from "./Contato.Style";

type ContatoProps = {
    href: string;
    icone: React.ReactNode;
    titulo: string;
    descricao: string;
}

function Contato(props: ContatoProps) {
    return (
        <ContatoStyle href={props.href} target='_blank'>
            <span>{props.icone}</span>
            <h3>{props.titulo}</h3>
            <p>{props.descricao}</p>
        </ContatoStyle>
    )
}

export default Contato