import { Container } from "./style";
import React, { useContext } from "react";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){
    
    const { transactions } = useContext(TransactionsContext);

    console.log(transactions);

    /*const totalDeposits = transactions.reduce((acumulator, transaction) => {
        if(transaction.type === 'deposit'){
            return acumulator + transaction.amount;
        }

        return acumulator;

    }, 0);
*/
    const summary = transactions.reduce((accumulator, transaction) =>{
        if(transaction.type === 'deposit'){
            accumulator.deposits += transaction.amount;
            accumulator.total += transaction.amount;
        }
        else{
            accumulator.withdraws += transaction.amount;
            accumulator.total -= transaction.amount;
        }
        return accumulator;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    });


    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>
                -
                {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="totalHeader">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}