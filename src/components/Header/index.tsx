import logoImg from '../../assets/logo.svg'
import { Container, Content } from '../../components/Header/style'


interface HeaderProps {
    onOpenNewTransactionModal: () => void; //essa função não retorna nada, é vazio
}


export function Header({ onOpenNewTransactionModal }: HeaderProps){
    

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick = {onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}