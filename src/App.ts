import * as express from 'express'
import type { Application, Router } from 'express'

interface IOptions {
    app?: Application
    port: Number
    routes: Array<Router>
}

export default class App {
    public app: Application
    public port: Number

    constructor(options: IOptions) {
        this.app = options.app || express()
        this.port = options.port

        this.routes(options.routes)
    }

    private routes(routes: Array<Router>) {
        routes.forEach(route => {
            this.app.use(route)
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Сервер запущен на http://localhost:${this.port}`)
        })
    }
}
