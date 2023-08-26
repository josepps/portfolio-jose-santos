import styled from 'styled-components'

export const Section1 = styled.section`
    background: linear-gradient( #003249 50%, #007EA7 );
    width: 100vw;
    height: 100vh;

    header {
        width: 100vw;
        height: 12vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        z-index: 99;
        padding: 0 5%;
        background: linear-gradient(rgba(11, 11, 11, .8), #003249);

        h2 {
            color: #80CED7;
        }

        .containerNav {
            width: 30%;
        }

        nav ul {
            display: flex;
            list-style-type: none;

            li {
                margin-right: 6%;

                a {
                text-decoration: none;
                color: #80CED7;
                font-weight: 600;
                font-size: 1rem;
                position: relative;

                &:before{
                content: "";
                position: absolute;
                width: 100%;
                height: 2px;
                bottom: -5px;
                left: 0;
                background-color: #80CED7;
                visibility: hidden;
                -webkit-transform: scaleX(0);
                transform: scaleX(0);
                -webkit-transition: all 0.3s ease-in-out 0s;
                transition: all 0.3s ease-in-out 0s;
                }

                &:hover {
                color: #80CED7;
                font-size: 1.1rem;
                
                &:before {
                visibility: visible;
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
                }
                }
                }

            }
        }
    }
    
    main {
        height: 88vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;

        .containerMain:nth-child(1) {
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h1 {
                font-size: 3.5rem;
                color: #9AD1D4;
            }

            .descricao {
                width: 0;
                margin: 2.5% 0 3.5% 7.5%;
                color: #80CED7;
                font-size: 1.2rem;
                border-right: 2px solid #80CED7;
                white-space: nowrap;
                overflow: hidden;
                animation: piscaCursor 600ms steps(45) infinite normal, 
                digitandoDescricao 8s steps(40) 1s infinite;
            }

            @keyframes digitandoDescricao {
                0% {
                    width: 0;
                }
                45% {
                    width: 50%;
                }
                55% {
                    width: 50%;
                }
                90% {
                    width: 0;
                }
                100% {
                    width: 0;
                }
            }

            @keyframes piscaCursor {
                    from {
                        border-right-color: #80CED7;
                    }
                    to {
                        border-right-color: transparent;
                    }   
                }

            a {
                text-decoration: none;
                width: 300px;
                height: 70px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #003249;
                color: #9AD1D4;
                font-weight: 600;
                font-size: 1.1rem;
                border-radius: 15px;
                margin-top: 4%;
                position: relative;
                z-index: 2;
                overflow: hidden;
                transition: all .7s ease;

                &:before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                    background-color: #007EA7;
                    z-index: -1;
                    transition: all .7s ease;
                }

                &:before {
                    width: 110%;
                    height: 0;
                    transform: translate(-50%, -50%) rotate(45deg);
                }

                &:hover {
                    font-size: 1.2rem;
                    color: #003249;

                &:before {
                    height: 400%;
                }
            }
            }
        }

        .containerMain:nth-child(2) {
            height: 100%;
            width: 40%;
            position: relative;

            .container{
                height: 60vh;
                width: 30vw;
                position: absolute;
                top: 25vh;
                right: 15vw;
                perspective: 1000px;
            }

            .box {
                height: 250px;
                width: 250px;
                position: absolute;
                top: 30px;
                left: 150px;
                transform-style: preserve-3d;
                animation: animate 5s infinite;
            }

            @keyframes animate {
                0%{
                    transform: rotateX(45deg) rotateY(-45deg);
                }
                25%{
                    transform: rotateX(-45deg) rotateY(-45deg);
                }
                50%{
                    transform: rotateX(45deg) rotateY(45deg);
                }
                75%{
                    transform: rotateX(-45deg) rotateY(45deg);
                }
                100%{
                    transform: rotateX(45deg) rotateY(-45deg);
                }
            }

            .card {
                height: 250px;
                width: 250px;
                text-align: center;
                padding: 100px 0;
                color: white;
                background: radial-gradient(circle, rgba(128,206,215,1) 0%, rgba(0,126,167,1) 30%, rgba(0,50,73,1) 100%);
                border: 2px solid white;
                font-size: 32px;
                box-sizing: border-box;
                position: absolute;
                transition: all 1s;
            }

            #front, #back, #bottom {
                font-size: 5rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            #front {
                transform: translateZ(125px);
            }
            #back {
                transform: translateZ(-125px);
            }
            #left {
                right: 125px;
                transform: rotateY(-90deg);
            }
            #right {
                left: 125px;
                transform: rotateY(90deg);
            }
            #top {
                bottom: 125px;
                transform: rotateX(90deg);
            }
            #bottom {
                top: 125px;
                transform: rotateX(-90deg);
            }
            input {
                height: 50px;
                width: 100px;
                background: pink;
                font-size: 22px;
                cursor: pointer;
                position: absolute;
                top: -170px;
                left: 220px;
            }
            .box:hover #front{
                transform: translateZ(180px) rotateY(360deg);
            }
            .box:hover #back{
                transform: translateZ(-180px) rotateY(360deg);
            }
            .box:hover #left{
                right: 180px;
            }
            .box:hover #right{
                left: 180px;
            }
            .box:hover #top{
                bottom: 180px;
            }
            .box:hover #bottom{
                top: 180px;
            }
        }
    } 
`;

export const Section2 = styled.section`
    padding: 5rem 5rem;
    justify-content: center;
    text-align: center;
    background: linear-gradient( #007EA7 50%, #80CED7 );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        margin-bottom: 3rem;
        color: #CCDBDC;
        font-weight: 800;
        font-size: 48px;
        line-height: 58px; 
    }

    .containerTecnologias {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        width: 70%;

    .Tecnologias {
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s;
        position: relative;

        span {
            font-size: 5rem;
            color: #fff;
            position: absolute;
        }

        p {
            color: #CCDBDC;
            font-size: 1.5rem;
            display: none;
            font-weight: bold;
        }

        &:hover {
            background: rgba(0, 0, 0, 0.3);
            border-radius: 50%;

            span {
                color: rgba(255, 255, 255, 0.2);
            }

            p {
                display: block;
            }
        }
    }
    }
`;

export const Section3 = styled.section`
    width: 100%;
    height: auto;
    background: linear-gradient( #80CED7 50%, #9AD1D4 );

    h2 {
        height: 15vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #007EA7;
        font-size: 2rem;
    }

    #containerProjetos {
        width: 100%;
        min-height: 50vh;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0 2%;

        .projetos {
            width: 28%;
            height: 250px;
            margin: 10px 15px 25px 15px;
            position: relative;
            transition: all 0.7s ease-in-out;

            .descricaoProjeto {
                position: absolute;
                left: 0;
                width: 100%;
                height: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.7);
                transition: all 0.7s linear;
                display: flex;
                justify-content: center;

                p {
                    width: 80%;
                    height: 80%;
                    overflow: hidden;
                    transition: all 0.5s 0.5s linear;
                    color: #f4ffff;
                    display: flex;
                    align-items: flex-end;
                }
            }

            .containerLink{
                position: absolute;
                bottom: 0;
                background: #58b0ba;
                width: 100%;
                height: 0;
                border-radius: 0 0 15px 15px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 7%;
                transition: all 0.7s ease-in-out;

                a {
                    height: 55%;
                    width: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #fff;
                    text-decoration: none;
                    background: #498b92;
                    border: 1px solid #498b92;
                    scale: 0.9;
                    border-radius: 10px;
                    font-size: 0.9rem;
                    overflow: hidden;
                    transition: all 0.5s ease-in-out;
                }
            }

            img {
                width: 100%;
                height: 100%;
                position: absolute;

                &:nth-child(2) {
                    display: none;
                }
            }

            .infoProjeto {
                width: 100%;
                height: 100%;
                position: absolute;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                h2 {
                    height: 30%;
                    color: #007EA7;
                    font-size: 2.5rem;
                    -webkit-text-stroke: 1px #003249;
                }

                ul {
                    list-style-type: none;
                    display: flex;

                    li {
                        margin: 0 3px;
                        font-size: 1.5rem;
                        color: #80CED7;

                        &:nth-child(3) {
                            font-size: 2rem;
                        }
                    }
                }
            }

            &:hover {
                scale: 1.2;
                z-index: 5;

                .descricaoProjeto {
                    width: 100%;
                    height: 100%;
                    padding-bottom: 5%;

                    p {
                        height: 100%;
                    }
                }

                img:nth-child(2) {
                    display: flex;
                }

                .infoProjeto {
                    display: none;
                }

                .containerLink {
                    height: 20%;
                    bottom: -20%;
                    width: 100%;

                    a {
                        width: 30%;

                        &:hover {
                            background: none;
                            scale: 1.1;
                        }
                    }
                }
            }


        }
    }

`;

export const Section4 = styled.section`
    width: 100vw;
    height: 70vh;
    background: linear-gradient( #9AD1D4 50%, #CCDBDC );
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        width: 100%;
        height: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        color: #007EA7;
    }

    .containerContatos{
        width: 100%;
        display: flex;
        height: 75%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;