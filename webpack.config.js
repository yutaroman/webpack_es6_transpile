const outputPath = '/dist/'
const filename = 'main.js'

module.exports = {
    mode: 'development',
    entry: `./src/${filename}`,
    output: {
        path: `${__dirname}${outputPath}`,
        filename
    },
    module: {
        rules: [
            // ESLint
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: true
                }
            },
            // Babel
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            // ES2019 を ES5 に変換
                            ['@babel/preset-env', {
                                useBuiltIns: 'usage',
                                corejs: 3
                            }]
                        ]
                    }
                }
            }
        ]
    }
}
