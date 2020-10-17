import express, { Router, Application } from 'express'

interface IOptions {
    app?: Application
    port: Number
    routes: Array<Router>
    statics?: Array<string>
    addons?: Array<any>
}

export default class App {
    public app: Application
    public port: Number

    constructor(options: IOptions) {
        this.app = options.app || express()
        this.port = options.port

        this.routes(options.routes)
        this.static(options.statics)
        this.addons(options.addons)
    }

    private addons(addons) {
        if (addons != undefined && addons.length) addons.forEach(addon => this.app.use(addon))
    }

    private static(paths) {
        if (paths != undefined && paths.length) paths.forEach(path => this.app.use(express.static(path)))
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
