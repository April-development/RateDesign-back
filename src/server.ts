import App from './App'
import RouterFactory from './RouterFactory'

const app = new App({
    port: 3000,
    routes: new RouterFactory('./root').getAllRoutesHandlers(),
})

app.listen()

export default app
