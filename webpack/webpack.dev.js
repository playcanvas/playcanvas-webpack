import { merge } from 'webpack-merge'
import commonConfiguration from './webpack.common.js'
import portFinderSync from 'portfinder-sync'

const configuration = merge(
    commonConfiguration,
    {
        mode: 'development',
        devServer:
        {
            host: 'localhost',
            port: portFinderSync.getPort(5000),
            open: true,
            https: false
        }
    }
)
export default configuration;