import { Response, Request, NextFunction } from 'express'

interface IHandler {
    (req: Request, res: Response, next?: NextFunction): void
}

interface IRouteHandler {
    get: IHandler
    post: IHandler
    delete: IHandler
    put: IHandler
}

export default class RouteHandler implements IRouteHandler {
    middlewares: {
        all?: Array<any>
        get?: Array<any>
        post?: Array<any>
        put?: Array<any>
        delete?: Array<any>
    }

    regExp: string = ''

    get(_req: Request, _res: Response, _next?: NextFunction): void {
        _res.status(405)
    }

    delete(_req: Request, _res: Response, _next?: NextFunction): void {
        _res.status(405)
    }

    post(_req: Request, _res: Response, _next?: NextFunction): void {
        _res.status(405)
    }

    put(_req: Request, _res: Response, _next?: NextFunction): void {
        _res.status(405)
    }
}
