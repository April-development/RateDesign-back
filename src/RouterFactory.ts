import { readdirSync, statSync } from 'fs'
import { join } from 'path'
import type RouteHandler from './RouteHandler'
import { Router } from 'express'

export default class RouterFactory {
    dir: string
    fullDir: string
    constructor(dir: string) {
        this.dir = dir
        this.fullDir = join(__dirname, dir)
    }

    public getAllRoutesHandlers(): Array<Router> {
        return this.getFullFilesPathsWithoutExtension().map(path => {
            let shortPath = path.replace(this.fullDir, '')
            return this.initRouter(shortPath)
        })
    }

    private initRouter(path): Router {
        let file: RouteHandler = this.importFile(path)
        let router: Router = Router()
        router.route(path).get(file.get).post(file.post).put(file.put).delete(file.delete)
        return router
    }

    private importFile(path: string): RouteHandler {
        return new (require(this.dir + path).default)()
    }

    private getFullFilesPathsWithoutExtension(dir: string = this.fullDir, paths: Array<string> = []) {
        let files = readdirSync(dir)
        for (let file in files) {
            let name = `${dir}/${files[file]}`
            if (statSync(name).isDirectory()) {
                this.getFullFilesPathsWithoutExtension(name, paths)
            } else {
                paths.push(name.replace('.ts', ''))
            }
        }
        return paths
    }
}
