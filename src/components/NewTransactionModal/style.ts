import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.form`

    h2{
        color: var(--text-title);
        font-size: 24px;
        margin-bottom: 36px;
    }
    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 64px;
        
        
        border-radius: 5px;
        box-sizing: border-box;
        
        
        color: var(--text-body);
        border: 1px solid #d7d7d7;
        background: #E7E9EE;

        font-weight: 400;
        font-size: 16px;

        &::placeholder{
            color: var(--text-body);
        }

        & + input { //a partir do primeiro em diante, todo input tera uma margem de 16px ou 1rem
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        
        width: 100%;
        padding: 0 1.5rem;
        height: 64px;
        border-radius: 5px;
        border: 0;
        color: var(--shape);
        background: var(--green);
        font-size: 16px;
        font-weight: 600;
        margin-top: 24px; //espaço entre o input e o button

        transition: filter 0.5s ease-out;


        &:hover{ //quando passar o mouse por cima do button
            filter: brightness(0.9);
        }
    }


`;

export const TransactionTypeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 16px;
    margin-bottom: 16px;
    gap: 8px; //espaçamento dos botoes
`;    

interface RadioBoxProps{
    isActive: boolean;
    activeColor: "green" | "red";
}


const colors = {
    green: "#33CC95",
    red: "#E62E4D"
}


export const RadioBox = styled.button<RadioBoxProps>`

    height: 64px;
    border: 1.5px solid #d7d7d7; 
    border-radius: 5px;
    box-sizing: border-box;

    background: ${(props) =>props.isActive 
        ? transparentize(0.9, colors[props.activeColor])  //lib que estiliza usando JS, nesse caso, dá uma opacity
        : 'transparent'                                   //de 0.1, ou seja tá 90%(0.9) transparente.
    };                                                    //usamos tb, porque é aplicado apenas no background-color
                                                          //e não no botão inteiro
    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.5s ease-out;

    &:hover{
            border-color: #aaa; //escurecer a borda
    }

    img{
        width: 20px;
        height: 20px;
            
    }
    span{
        font-size: 16px;
        font-weight: 400;
        margin-left: 18px;
        color: var(--text-title);
    }

`;

