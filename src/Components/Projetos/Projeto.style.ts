import styled from 'styled-components'

export const ContainerProjetoStyle = styled.div`
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
`;