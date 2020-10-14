import {readdirSync, statSync} from 'fs'
import {join} from 'path'

class RouterFactory {
    dir: string
    constructor(dir: string) {
        this.dir = join(__dirname, dir)
        console.log(this.getFiles(this.dir))
    }

    public importFiles() {
        this.getFiles(this.dir).forEach(file=>require(file))
    }

    private getFiles(dir: string, paths: Array<string> = []) {
        let files = readdirSync(dir)
        for (let file in files) {
            let name = `${dir}/${files[file]}`
            if (statSync(name).isDirectory()) {
                this.getFiles(name, paths);
            } else {
                paths.push(name.replace(__dirname, '').replace('.ts', ''));
            }
        }
        return paths;
    }
}

export default RouterFactory