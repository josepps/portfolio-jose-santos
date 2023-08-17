type IconeTecnologiaProps = {
    icone: React.ReactNode;
    descricao: string;
}

function IconeTecnologia(props: IconeTecnologiaProps) {
    return (
        <div className="Tecnologias">
            <span>{props.icone}</span>
            <p>{props.descricao}</p>
        </div>
    )
}

export default IconeTecnologia