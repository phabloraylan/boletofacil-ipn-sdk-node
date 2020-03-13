import Client from "./client"
export interface IConfig {
    production: Boolean
}

/**
 * Inicializar
 * @param iConfig Configuração com modo
 * @example const app = boletoFacil.initializeApp({
 *  production: false
 * })

 */
export function initializeApp(iConfig: IConfig) {
    const client = new Client(iConfig.production)
    return client
}