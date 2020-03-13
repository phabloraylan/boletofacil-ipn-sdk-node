import axios, { AxiosInstance, AxiosResponse } from "axios"

/**
 * Classe de acesso a api
 */
export default class Client {

    private static BASE_URL_SANDBOX = "https://sandbox.boletobancario.com/boletofacil/integration/api/v1/"
    private static BASE_URL_PRODUCTION = "https://boletobancario.com/boletofacil/integration/api/v1/"
    private production: Boolean
    public static MODE_PRODUCTION: Boolean = true
    public static MODE_SANDBOX: Boolean = false
    /**
     * @param production Modo de produção ou testes
     */
    constructor(production: Boolean) {

        this.production = production

    }

    /**
     * Consulta
     * @param paymentToken Seu sistema utiliza o paymentToken informado para consultar detalhes do pagamento
     * @returns Promise
     */
    public fetchPaymentDetails(paymentToken: String): Promise<AxiosResponse> {

        return this.getAxiosInstance().get('fetch-payment-details', {
            params: {
                paymentToken: paymentToken
            }
        });
    }

    /**
     * Obter o acceso axios a api
     */
    private getAxiosInstance(): AxiosInstance {
        return axios.create({
            baseURL: this.getUrl(),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    private getUrl(): string {
        if (this.production) {
            return Client.BASE_URL_PRODUCTION
        } else {
            return Client.BASE_URL_SANDBOX
        }
    }
}