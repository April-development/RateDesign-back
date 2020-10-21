import { readdirSync, statSync } from 'fs'
import { join } from 'path'
import { Router } from 'express'
import type RouteHandler from './RouteHandler'

export default class RouterFactory {
    dir: string
    fullDir: string
    constructor(dir: string) {
        this.dir = dir
        this.fullDir = join(__dirname, dir)
    }

    public getAllRoutesHandlers(): Array<Router> {
        return this.getShortFilesPaths().map(path => this.getRoute(path))
    }

    public getRouteMap(): void {
        console.log('Список всех доступных маршрутов:')
        this.getShortFilesPaths().forEach(path => console.log(path))
    }

    private getRoute(path: string): Router {
        let file = this.importFile(path)
        let router = Router()
        let extendedPath = path+file.regExp
        if (file.middlewares.all != undefined) {
            router.use(extendedPath, file.middlewares.all)
        }
        router.route(extendedPath).get(file.get).post(file.post).put(file.put).delete(file.delete)
        return router
    }

    private importFile(path: string): RouteHandler {
        return new (require(this.dir + path).default)()
    }

    private getShortFilesPaths(): Array<string> {
        return this.getFullFilesPaths().map(path => path.replace(this.fullDir, ''))
    }

    private getFullFilesPaths(dir: string = this.fullDir, paths: Array<string> = []): Array<string> {
        let files = readdirSync(dir)
        for (let file in files) {
            let name = `${dir}/${files[file]}`
            if (statSync(name).isDirectory()) {
                this.getFullFilesPaths(name, paths)
            } else {
                paths.push(name.replace('.ts', ''))
            }
        }
        return paths
    }
}
