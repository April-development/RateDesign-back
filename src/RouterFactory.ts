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

    private getRoute(path: string): Router {
        return this.importFile(path).getRouter(path)
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
