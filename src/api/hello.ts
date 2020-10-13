import RouteFactory from '../routeFactory'

class Hello extends RouteFactory{
    get(req, res) {
        res.send('hello')
    }
}

export default new Hello(__filename)
