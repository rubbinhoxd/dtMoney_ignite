import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);

`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;


    button{
        width: 195px;
        height: 48px;
        top: 32px;
        left: 1085px;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        font-size: 1rem;
        transition: filter 0.5s ease-out;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;