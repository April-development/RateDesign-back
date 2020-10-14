import RouteHandler from '../../RouteHandler'

export default class Bay extends RouteHandler {
    get(req, res) {
        res.send('bay my dear')
    }
}