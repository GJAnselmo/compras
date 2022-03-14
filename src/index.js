const produtos = [
    {id: 1, nome: "Chocolate", valor: 5, qtd: 3},
    {id: 2, nome: "Leite", valor: 4.50, qtd: 1},
    {id: 3, nome: "Pão", valor: 3.00, qtd: 5},
    {id: 4, nome: "Suco", valor: 6.00, qtd: 5}
]

const clientes = [
    { id: 1, nome: 'Maicon Jakson', email: 'maicon@gmail.com', dtNasc: '06/08/1970' },
    { id: 2, nome: 'Beatriz', email: 'beatriz@digitalhouse.com', dtNasc: '09/12/2006' }
  ]

const moment = require('moment')
const { exibeTela, calculaValor} = require('../funcoes/dado')

exports.principal = () => {
    exibeTela('----------- Mercado DH ----------')

    const data = moment().format('DD/MM/YYYY hh:mm')
    exibeTela('----- Lista Produtos - ' + data + ' -----')
    
    let valorTotal = 0;
    for (let i=0; i < produtos.length; i++) {
    
      valorTotal += calculaValor(produtos[i].qtd, produtos[i].valor)
    
      exibeTela(`${produtos[i].id} - ${produtos[i].nome} - ${produtos[i].qtd}`)
    }
    exibeTela('---> Total R$: ' + valorTotal)
}

