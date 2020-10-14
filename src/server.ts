import App from "./app";
import SendFiles from './api/hello'
import RouterFactory from "./routerFactory";

new RouterFactory('api')

const app = new App({
    port: 3000,
    middleWares: [],
    endpoints: [
        SendFiles
    ]
})

app.listen()

export default app
