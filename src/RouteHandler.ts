import { Request, Response, NextFunction } from 'express'

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
    get(_req: Request, _res: Response, _next?: NextFunction): void {
        _res.status(404)
    }

    delete(_req: Request, _res: Response, _next?: NextFunction): void {
        _res.status(404)
    }

    post(_req: Request, _res: Response, _next?: NextFunction): void {
        _res.status(404)
    }

    put(_req: Request, _res: Response, _next?: NextFunction): void {
        _res.status(404)
    }
}
