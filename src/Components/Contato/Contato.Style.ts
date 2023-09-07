import styled from 'styled-components'

export const ContatoStyle = styled.a `
    width: 250px;
    margin: 5% 0;
    text-align: center;
    color: #007EA7;
    text-decoration: none;

        span {
            width: 100px;
            border-radius: 50%;
            font-size: 2.5rem;
        }

        h3 {
            margin: 15% 0 10% 0;
        }

        &:hover {
            color: #0d5e78;

            span {
                font-size: 3rem;
            }
            h3 {
                transform: scale(1.4);
            }
        }
`;