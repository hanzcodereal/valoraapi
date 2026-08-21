import Color from './color.js'

const logger = {
    info: (msg: string) => console.log(`${Color.blue('○')} ${Color.gray('info')}  ${msg}`),
    ready: (msg: string) => console.log(`${Color.green('●')} ${Color.gray('ready')} ${msg}`),
    warn: (msg: string) => console.log(`${Color.yellow('○')} ${Color.gray('warn')}  ${msg}`),
    error: (msg: string) => console.error(`${Color.red('●')} ${Color.gray('error')} ${msg}`),
}

export default logger
