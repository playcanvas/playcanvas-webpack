import { merge } from 'webpack-merge'
import commonConfiguration from './webpack.common.js'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'

const configuration = merge(
    commonConfiguration,
    {
        mode: 'production',
        plugins:
        [
            new CleanWebpackPlugin()
        ]
    }
)

export default configuration;