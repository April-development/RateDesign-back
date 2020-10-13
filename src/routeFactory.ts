import {basename, extname} from 'path'
import {
    Request,
    Response,
    NextFunction,
    Router,
} from 'express'

interface IRequest {
    (req: Request, res: Response, next?: NextFunction):void
}

interface IRouteRequests {
    get: IRequest;
    post: IRequest;
    delete: IRequest;
}


class RouteFactory implements IRouteRequests {
    public path: string
    public router = Router()

    public constructor(filePath: string) {
        this.setPath(filePath)
        this.listenRoute()
        console.log(filePath)
    }

    private listenRoute() {
        this.router.get(this.path, this.get)
        this.router.post(this.path, this.post)
        this.router.delete(this.path, this.delete)
    }

    private setPath(filePath) {
        this.path = `/${basename(filePath, extname(filePath))}`
    }

    get(req: Request, res: Response): void {
        res.status(404)
    }

    delete(req: Request, res: Response): void {
        res.status(404)
    }

    post(req: Request, res: Response): void {
        res.status(404)
    }

}

export default RouteFactory
