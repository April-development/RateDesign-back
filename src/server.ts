import App from "./app";
import SendFiles from './api/hello'

const app = new App({
    port: 3000,
    middleWares: [],
    endpoints: [
        SendFiles
    ]
})

app.listen()

export default app
