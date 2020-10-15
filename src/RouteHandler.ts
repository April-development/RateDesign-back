import { Request, Response, NextFunction, Router } from 'express'

interface IHandler {
    (req: Request, res: Response, next?: NextFunction): void
}

export interface IRouteHandler {
    get: IHandler
    post: IHandler
    delete: IHandler
    put: IHandler
}

export default class RouteHandler implements IRouteHandler {
    get(req: Request, res: Response, _next?: NextFunction): void {
        res.status(404)
    }

    delete(req: Request, res: Response, _next?: NextFunction): void {
        res.status(404)
    }

    post(req: Request, res: Response, _next?: NextFunction): void {
        res.status(404)
    }

    put(req: Request, res: Response, _next?: NextFunction): void {
        res.status(404)
    }

    public getRouter(path: string): Router {
        const router = Router()
        router.route(path).get(this.get).post(this.post).put(this.put).delete(this.delete)
        return router
    }
}
