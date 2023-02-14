import styled from 'styled-components'

export const Header = styled.header`
    height: 10vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0000cc;

    nav ul {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style-type: none;

        li a {
            margin: 0 15px;
            font-size: 1.4rem;
            color: #e0e1e1;
            font-weight: bold;
            cursor: pointer;
            position: relative;
            transition: all .2s;

            ::after {
                content: "";
                height: 2px;
                width: 100%;
                transform: scaleX(0);
                background: #fff;
                box-shadow: 0px 2px 5px 0.1px rgba(0, 0, 0, 0.5);
                position: absolute;
                bottom: -5px;
                left: 0;
                transition: all .5s cubic-bezier(0.86, 0, 0.07, 1);
            }

            :hover {
                color: #fff;

                ::after {
                    transform: scaleX(1);
                }
            }
        }
    }
`;

export const Section1 = styled.section`
    height: 80vh;
    width: 100vw;
    display: flex;
    align-items: center;

    .ContainerApresentacao {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: start;

        .ContainerTitulos {
            margin-bottom: 30px;

            h3 {
                font-size: 1.5rem;
                color: #0000cc;
            }

            h1 {
                font-size: 3.5rem;
            }

            h2 {
                font-size: 2rem;

                span {
                    color: #0000cc;
                }
            }
        }

        .ContainerBtn {

            button {
            padding: 20px 60px;
            margin: 0 10px;
            border-radius: 30px;
            font-weight: 700;
            font-size: 1rem;
            cursor: pointer;
            border: 1px solid #0000cc;
            transition: all 0.5s;

            :nth-child(1) {
                background-color: #0000cc;
                color: #fff;

                :hover {
                    background: none;
                    color: #0000cc;
                    transform: scale(1.1);
                }
            }

            :nth-child(2) {
                background: none;

                :hover {
                    background: #0000cc;
                    color: #fff;
                    transform: scale(1.1);
                }
            }
        }
        }
    }

    .ContainerSobreMim {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 20px;
        }

        p {
            width: 80%;
            margin-bottom: 25px;
            font-size: 1.1rem;
            text-align: justify;
        }

        .ContainerContatos {
            display: flex;

        a {
            font-size: 1.2rem;
            margin: 0 10px;
            color: #000;
            display: flex;
            align-items: center;
            transition: all .5s ;


            :hover {
                border-bottom: 1px solid #000;
                font-size: 1.3rem;
                font-weight: 600;
                margin: 0 15px;
            }
        }
    }
    }
`;