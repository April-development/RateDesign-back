import * as express from 'express'
import { Application } from 'express'

interface IOptions {
    app?: Application
    port: Number
    middlewares: Array<any>
    endpoints: Array<any>
}

export default class App {
    public app: Application
    public port: Number

    constructor(options: IOptions) {
        this.app = options.app || express()
        this.port = options.port

        this.middlewares(options.middlewares)
        this.routes(options.endpoints)
    }

    private middlewares(middlewares: Array<any>) {}

    private routes(endpoints: Array<any>) {
        endpoints.forEach(endpoint => {
            this.app.use('/', endpoint)
        })
    }
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Сервер запущен на http://localhost:${this.port}`)
        })
    }
}
