import RouteHandler from '../../RouteHandler'

export default class Hello extends RouteHandler {
    middlewares: {
        all: [],
        get: []
    }
    get(req, res) {
        res.send('hello')
    }
}
