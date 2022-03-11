import styled from "styled-components";

export const Container = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem; //pra colocar os itens mais pra cima da pág

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);  

        header{
            display: flex;//display: flex;
            //pra organizar os elementos do header verticalmente
            align-items: center;
            justify-content: space-between;
        }
        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem; //32px
            font-weight: 500;
            line-height: 3rem;
        }

    }
    .totalHeader{
        background: var(--green);
        color: var(--shape)
    }
`;