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

// background: linear-gradient(270deg, #ff3a5e 0%, #17161d 100%);
// transition: transform .5s cubic-bezier(0.86, 0, 0.07, 1);
