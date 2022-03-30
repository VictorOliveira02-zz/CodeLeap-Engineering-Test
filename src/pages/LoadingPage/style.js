import styled from 'styled-components'

export const Div = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    > .logo-img{
        width: 50%;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
`;