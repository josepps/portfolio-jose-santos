import { ContainerHabilidades } from "./habilidades.style"

type PropsHabilidades = {
    icone: any,
    titulo: string,
}

function Habilidades(props: PropsHabilidades) {
    return (
        <ContainerHabilidades>
            <p>{props.icone}</p>
            <h3>{props.titulo}</h3>
        </ContainerHabilidades>
    )
}

export default Habilidades