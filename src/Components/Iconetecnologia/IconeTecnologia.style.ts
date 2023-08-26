import styled from 'styled-components'

export const IconesTecnologias = styled.div`
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
`;