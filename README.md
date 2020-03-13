# Boleto Fácil IPN SDK Node

Você pode configurar o Boleto Fácil para enviar notificações para seu sistema sempre que houver um evento de pagamento. Essa biblioteca permite consultar a notificação recebida.

## Instalando

Usando npm:

```bash
npm install boleto-facil-ipn
```

Usando yarn:

```bash
yarn add boleto-facil-ipn
```

## Exemplos

```js
const boletoFacil = require('boleto-facil-ipn')

const app = boletoFacil.initializeApp({
    production: false
})

const paymentToken = "token"
app.fetchPaymentDetails(paymentToken)
    .then(response => {
        console.log(response.data)
    })
    .catch(e => {
        console.log(e)
    })
```

## Licença

[MIT](LICENSE)
