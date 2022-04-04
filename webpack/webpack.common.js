import HtmlWebpackPlugin from 'html-webpack-plugin'

const webpackCommon = {
    plugins:
    [
        new HtmlWebpackPlugin({
            favicon: 'src/favicon.png',
            meta: {
                'viewport': 'width=device-width, user-scalable=no, minimum-scale=1, maximum-scale=1'
            },
            title: 'PlayCanvas Webpack Example',
            minify: true
        })
    ],
    module:
    {
        rules:
        [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}

export default webpackCommon;
