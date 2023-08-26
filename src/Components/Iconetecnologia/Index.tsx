import { IconesTecnologias } from "./IconeTecnologia.style";

type IconeTecnologiaProps = {
    icone: React.ReactNode;
    descricao: string;
}

function IconeTecnologia(props: IconeTecnologiaProps) {
    return (
        <IconesTecnologias>
            <span>{props.icone}</span>
            <p>{props.descricao}</p>
        </IconesTecnologias>
    )
}

export default IconeTecnologia