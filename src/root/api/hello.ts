import RouteHandler from '../../RouteHandler'

export default class Hello extends RouteHandler {
    get(req, res) {
        res.send('hello')
    }
}