import * as express from 'express'
import {Application} from 'express'

interface IOptions {
    port: Number
    middleWares: Array<any>
    endpoints: Array<any>
}

class App {
    public app: Application
    public port: Number

    constructor(options: IOptions) {
        this.app = express()
        this.port = options.port

        this.middlewares(options.middleWares)
        this.routes(options.endpoints)
    }

    private middlewares(middleWares: any){

    }

    private routes(endpoints: Array<any>){
        endpoints.forEach(endpoint => {
            this.app.use('/', endpoint.router)
        })
    }
    public listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Сервер запущен на http://localhost:${this.port}`)
        })
    }
}

export default App