const boletoFacil = require('../dist')

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