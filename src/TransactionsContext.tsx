import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';


interface Transaction {
    id: number,
    title: string,
    type: string, 
    category: string, 
    amount: number, 
    createdAt: string;
}

interface TransactionInput { //interface necessaria para criar uma nova transação, mas sem o id, data etc
     title: string,
     amount: number,
     category: string
     type: string //deposit or withdraw
}

interface TransactionsProviderProps {
    children: ReactNode; //aceita qualquer conteudo valido de jsx
}

interface TransactionsContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>; //devemos colocar isso pq toda function async retorna uma Promise.
    //uma transaction que recebe parametros especificos e que retorna nada
}


export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData //força uma tipagem
);


export function TransactionsProvider({children} : TransactionsProviderProps ){ //desestruturação
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() =>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions)) //mudando valor
    }, []);


    async function createTransaction(transactionInput :TransactionInput){ //function assincrona
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        })
        const { transaction } = response.data;

        setTransactions([
            ...transactions,  //copio todas as infos que já estão lá dentro, e add a nova info no final
            transaction,
        ]);
    }

    return(
        <TransactionsContext.Provider value = {{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    );
}



