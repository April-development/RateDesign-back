import {readdirSync, statSync} from 'fs'
import {join} from 'path'
import {IRouteHandler} from "./RouteHandler"
import * as express from 'express'

export default class RouterFactory {
    static createRouter(dir: string) {
        let schema = RouterFactory.importFiles(dir)
        console.log(schema)
        const router = express()
        schema.map(route =>
            router.route(route.path)
                .get(route.object.get)
                .post(route.object.post)
                .put(route.object.put)
                .delete(route.object.delete)
        )
        return router;
    }

    private static importFiles(dir: string): Array<{path: string, object: IRouteHandler}> {
        let fullDir = join(__dirname, dir)
        return RouterFactory.getFiles(fullDir).map(
            function (file: string) {
                return {
                    path: file.replace(fullDir, ''),
                    object: new (require(file).default)
                }
            })
    }

    private static getFiles(dir: string, paths: Array<string> = []) {
        let files = readdirSync(dir)
        for (let file in files) {
            let name = `${dir}/${files[file]}`
            if (statSync(name).isDirectory()) {
                this.getFiles(name, paths);
            } else {
                paths.push(name.replace('.ts', ''));
            }
        }
        return paths;
    }
}