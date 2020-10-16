import App from './App'
import RouterFactory from './RouterFactory'

const routerFactory = new RouterFactory('./root')

const app = new App({
    port: 3000,
    routes: routerFactory.getAllRoutesHandlers(),
})

routerFactory.getRouteMap()
app.listen()

export default app
