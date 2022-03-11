import Modal from 'react-modal'; //lib para ação do botão
import { useState } from 'react';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';


Modal.setAppElement('#root');


function App() {
  
  const [isNewTransactionModalOpen, setIsnewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal(){
        setIsnewTransactionModalOpen(true);  //abrir a janela de transação
    }
    
    function handleCloseNewTransactionModal(){
        setIsnewTransactionModalOpen(false);   //fechar a janela
    }
  
  //children == conteudo
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal= {handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} //abre o modal
        onRequestClose={handleCloseNewTransactionModal} //fecha o modal
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
