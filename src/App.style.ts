import styled from 'styled-components'

export const Section1 = styled.section`
    background: linear-gradient( #014034 50%, #02735E );
    width: 100vw;
    height: 100vh;

    header {
        width: 100vw;
        height: 12vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 5%;
        background: linear-gradient(rgba(13, 13, 13, .9), #014034);

        h2 {
            color: #36BFB1;
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
                color: #038C73;
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
                background-color: #038C73;
                visibility: hidden;
                -webkit-transform: scaleX(0);
                transform: scaleX(0);
                -webkit-transition: all 0.3s ease-in-out 0s;
                transition: all 0.3s ease-in-out 0s;
                }

                &:hover {
                color: #36BFB1;
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
                color: #36BFB1;
            }

            .descricao {
                margin: 2.5% 0 3.5% 7.5%;
                color: #9ce3db;
                font-size: 1.2rem;
                border-right: 2px solid #36BFB1;
                white-space: nowrap;
                overflow: hidden;
                animation: piscaCursor 600ms steps(45) infinite normal, digitandoDescricao 4s steps(40) 1s normal both;
            }

            @keyframes digitandoDescricao {
                from {
                    width: 0;
                }
                to {
                    width: 50%;
                }
            }

            @keyframes piscaCursor {
                    from {
                        border-right-color: #36BFB1;
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
                background-color: rgba(1, 64, 52, .9);
                color: #9ce3db;
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
                    background-color: #02735E;
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
                    color: #014034;

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
                top: 20vh;
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
                background-image: radial-gradient(circle, #038c73, #03876f, #02826b, #027e67, #027963, #02735e, #016c58, #016653, #015c4b, #015343, #01493c, #014034);
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
    background: #015041;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        margin-bottom: 3rem;
        color: #36BFB1;
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
            color: #00ffff;
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