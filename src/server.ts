import App from './app'
import * as bodyParser from 'body-parser'
import Index from "./controllers";

const app = new App({
    port: 3000,
    controllers: [
        new Index()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true })
    ]
})

app.listen()