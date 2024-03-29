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
                color: #c5e4e7;
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

        @media screen and (max-width: 1200px) {
            .containerNav {
                margin-right: 10%;
            }
        }
        @media screen and (max-width: 950px) {
            .containerNav {
                margin-right: 20%;
            }
        }
        @media screen and (max-width: 750px) {
            .containerNav { 
                nav {
                        width: 100vw; 
                        height: 100vh;
                        position: absolute;
                        top: -200vh;
                        left: 0;
                        background: #003249;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.3s ease-in;

                        ul {
                        flex-direction: column;
                        align-items: center;

                        li {
                            margin: 10px 0;
                            visibility: hidden;
                            -webkit-transform: scaleX(0);
                            transform: scaleX(0);
                            -webkit-transition: all 0.3s ease-in-out 0.3s;
                            transition: all 0.3s ease-in-out 0.3s;
                            
                            a {
                                font-size: 2rem;
                            
                                &:hover {
                                font-size: 2.1rem;
                                }
                            }
                        }
                    }
                    }

                .menuHamburguer {
                    display: block;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 25px;
                    position: absolute;
                    top: 35px;
                    right: 10%;
                    cursor: pointer;
                    z-index: 999;

                    span {
                        background: #fff;
                        display: block;
                        width: 40px;
                        height: 5px;
                        margin: 5px 0;
                        position: absolute;
                        top: 20%;
                        left: 0;
                        transition: left 0.3s ease-in;
                    }

                        &::before {
                            content: "";
                            background: #fff;
                            width: 40px;
                            height: 5px;
                            position: absolute;
                            top: 0;
                            left: 0;
                            top: 0;
                            transform: rotate(0deg);
                            transition: all 0.3s ease-in;
                        }

                        &::after {
                            content: "";
                            background: #fff;
                            width: 40px;
                            height: 5px;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            transform: rotate(0deg);
                            transition: all 0.3s ease-in;
                        }

                        &.ativo {
                            span {
                            left: 50vw;
                            }
                            
                            &::before {
                                top: 50%;
                                transform: rotate(135deg)
                            }

                            &::after {
                                bottom: 30%;
                                transform: rotate(-135deg);
                            } 
                        }
                }

                &.ativo nav {
                    top: 0;

                    ul li {
                            visibility: visible;
                            -webkit-transform: scaleX(1);
                            transform: scaleX(1);
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
                    width: 432px;
                }
                55% {
                    width: 432px;
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
                height: 60%;
                width: 80%;
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

        @media screen and (max-width: 1150px) {
            .containerMain:nth-child(1) {
                width: 60%;
            }

            .containerMain:nth-child(2) {
                width: 30%;

                .container{
                    width: 100%;
                }
            }
        }
        @media screen and (max-width: 1000px) {

            .containerMain:nth-child(1) {
                height: 50vh;
            }

            .containerMain:nth-child(2) {
                height: 20vh;
                width: 40vw;
                position: absolute;
                bottom: 40%;
                left: 60%;

                .box {
                    height: 100px;
                    width: 100px;
                }

                .card {
                    height: 100px;
                    width: 100px;
                    padding: 40px 0;
                }

                #front, #back, #bottom, #left, #right, #top {
                    font-size: 1rem;
                }

                #front {
                transform: translateZ(50px);
                }
                #back {
                transform: translateZ(-50px);
                }
                #left {
                    right: 50px;
                    transform: rotateY(-90deg);
                }
                #right {
                    left: 50px;
                    transform: rotateY(90deg);
                }
                #top {
                    bottom: 50px;
                    transform: rotateX(90deg);
                }
                #bottom {
                    top: 50px;
                    transform: rotateX(-90deg);
                }
                .box:hover #front{
                transform: translateZ(100px) rotateY(360deg);
                }
                .box:hover #back{
                    transform: translateZ(-100px) rotateY(360deg);
                }
                .box:hover #left{
                    right: 100px;
                }
                .box:hover #right{
                    left: 100px;
                }
                .box:hover #top{
                    bottom: 100px;
                }
                .box:hover #bottom{
                    top: 100px;
                }
            } 
        }
        @media screen and (max-width: 450px) {
            .containerMain:nth-child(2) {
                width: 20vw;
                position: absolute;
                bottom: 35%;
                left: 30%;
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
    }

    @media screen and (max-width: 850px) {
        .containerTecnologias {
            width: 85%;
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
        font-size: 3rem;
    }

    #containerProjetos {
        width: 100%;
        min-height: 50vh;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0 2%;
    }

    @media screen and (max-width: 1200px) {
        padding-bottom: 5%;
    }
`;

export const Section4 = styled.section`
    width: 100vw;
    height: auto;
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
        height: 75%;
        width: 95%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
`;