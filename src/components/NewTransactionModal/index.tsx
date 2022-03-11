import Modal from "react-modal";
import { FormEvent, useState, useContext } from "react"
import { Container, TransactionTypeContainer, RadioBox} from "./style";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { TransactionsContext } from "../../TransactionsContext";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void; //function que n retorna nada 
}



export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps){ //desestruturação
    const { createTransaction } = useContext(TransactionsContext);
    
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');
    
    async function handleCreateNewTransaction(event: FormEvent){ //handle é algo que seja uma ação do user
        event.preventDefault(); //nao reiniciar o html
        
        await createTransaction({
            title, 
            amount,
            category, 
            type,
        })
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }


    

    return(
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        
        <button type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
        >
            <img src={closeImg} alt="Fechar"/>    
        </button>

        <Container onSubmit={handleCreateNewTransaction}> 
        <h2>Cadastrar Transação</h2> 

        <input
            placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)} //qnd muda o valor inicial dentro desse campo, onChange é executado
        />

        <input 
            type="number" 
            placeholder="Preço"
            value={amount}
            onChange={event => setAmount(+event.target.value)}
        />


        <TransactionTypeContainer>
            <RadioBox 
                type="button"
                onClick={() => {setType('deposit'); }}
                isActive={type === 'deposit'}
                activeColor = "green"
            >
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
            </RadioBox>

            <RadioBox
                type="button"
                onClick={() => {setType('withdraw'); }}
                isActive={type === 'withdraw'}
                activeColor = "red"
            >
                <img src={outcomeImg} alt="Saída" />
                <span>Saída</span>

            </RadioBox>
        </TransactionTypeContainer>


        <input 
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)} 
        />

        <button type="submit">
            Cadastrar    
        </button>

        </Container>
      </Modal>
    )
}

