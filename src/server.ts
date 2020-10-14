import App from "./App";
import RouterFactory from "./RouterFactory"

const app = new App({
    app: RouterFactory.createRouter("./root"),
    port: 3000,
    middlewares: [],
    endpoints: []
})

app.listen()

export default app
