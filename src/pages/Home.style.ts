import styled from 'styled-components'

export const Header = styled.header`
    height: 10vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0000cc;
    background-image: linear-gradient(to left, #0000cc, #2926E5);

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
    height: 90vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background-image: linear-gradient(to left bottom, #0000cc, #1a17d9, #2926e5, #3533f2, #4040ff);

    .ContainerApresentacao {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: start;
        margin-bottom: 10%;

        .ContainerTitulos {
            margin-bottom: 30px;

            h3 {
                font-size: 1.5rem;
                color: #fff;
            }

            h1 {
                font-size: 3.5rem;
            }

            h2 {
                font-size: 2rem;

                span {
                    color: #fff;
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
            transition: all 0.5s;
            border: none;

            :nth-child(1) {
                background-color: #0000cc;
                color: #fff;

                :hover {
                    background: none;
                    color: #000;
                    font-size: 1.1rem;
                    transform: scale(1.1);
                    border: 1.5px solid #000;
                }
            }

            :nth-child(2) {
                background: none;
                border: 1.5px solid #fff;
                color: #fff;

                :hover {
                    background: #0000cc;
                    color: #000;
                    transform: scale(1.1);
                    border: none;
                    font-size: 1.1rem;
                    font-weight: 600;
                }
            }
        }
        }
    }

    .ContainerSobreMim {
        width: 50%;
        height: 90vh;
        padding-top: 10vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        .ContainerImgBanner h1 {
            width: 200px;
            margin-bottom: 50px;
            position: absolute;
            top: 30%;
            left: 25%;
        }

        .ContainerInfo {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 60%;
            left: -20%;

        h2 {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 20px;
            color: #fff;
        }

        p {
            width: 80%;
            margin-bottom: 25px;
            font-size: 1.1rem;
            text-align: justify;
            color: #fff;
        }

        .ContainerContatos {
            display: flex;

        a {
            font-size: 1.2rem;
            margin: 0 10px;
            color: #fff;
            display: flex;
            align-items: center;
            transition: all .5s ;


            :hover {
                border-bottom: 1px solid #fff;
                font-size: 1.3rem;
                font-weight: 600;
                margin: 0 15px;
            }
        }}
    }
    }
`;

export const Section2 = styled.section`
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin: 2% 0;
        font-size: 2.5rem;
        font-weight: 900;
    }

    .ContainerHabilidades {
        width: 80%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
`;