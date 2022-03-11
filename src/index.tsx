import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import App from './App';


createServer({
  
  models: {
    transaction: Model
  },
  
  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Depósito do papai',
          type: 'deposit',
          category: 'Depósito',
          amount: 50,
          createdAt: new Date('2022-03-09 17:52:00'),
        },
        {
          id: 2,
          title: 'Açaí com Chocolate',
          type: 'withdraw',
          category: 'Passeio',
          amount: 87.54,
          createdAt: new Date('2022-03-06 19:30:00'),
        }  
      ],
    })
  },

  routes() {
    this.namespace = 'api'; //dizendo pro miragejs que todas as chamadas api, estarão a partir daquele endereço api lá no index.tsx do TransactionsTable
    
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody); //pega valor da requisição

      return schema.create('transaction', data);  //resposta
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


