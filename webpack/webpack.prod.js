import { merge } from 'webpack-merge'
import commonConfiguration from './webpack.common.js'

const configuration = merge(
    commonConfiguration,
    {
        mode: 'production'
    }
)

export default configuration;