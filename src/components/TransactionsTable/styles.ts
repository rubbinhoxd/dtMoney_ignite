import styled from "styled-components";

export const Container = styled.div`

    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;  //espaçamento dos itens
    }
    th{ //titulo
        color: var(--text-body);
        font-weight: 400px;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
    }

    td{  //corpo
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        color: var(--text-body);
        border-radius: 5px;
        
        &:first-child{
        color: var(--text-title);
        }

        &.deposit{
        color: var(--green);
        }

        &.withdraw{
            color: var(--red);
        }

    }  

`;


