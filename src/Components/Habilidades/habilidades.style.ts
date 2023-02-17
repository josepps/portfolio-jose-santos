import styled from 'styled-components'

export const ContainerHabilidades = styled.div`
    width: 100px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid #0000cc;
    margin: 14px;
    background-image: url("../../public/img/BackgroundAzul.jpg");
    /* background: linear-gradient(#0000cc, #000 20%, #fff); */
    animation: text-background 40s linear infinite;

    @keyframes text-background {

from { background-position: 0 0 }

to { background-position: 0 100%  }

} 

    p {
        font-size: 4rem;
    }

    h3 {
        font-weight: 900;
    }
`;