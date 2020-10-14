import RouteHandler from '../../../RouteHandler'

export default class Fight extends RouteHandler {
    get(req, res) {
        res.send('fight!')
    }
}
