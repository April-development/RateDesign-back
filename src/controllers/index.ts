import { Request, Response, Router } from 'express'
import IController from 'interfaces/controller'

class Index implements IController {
    public path = '/'
    public router = Router()

    constructor() {
        this.initRoutes()
    }

    public initRoutes(): void {
        this.router.get(this.path, this.index)
    }

    index (req: Request, res: Response) {
        res.send('Hello, world!')
    }
}

export default Index