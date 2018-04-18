const fs = require('fs');
const path = require('path');
const projectRoot = process.cwd();
const ProgressPlugin = require('webpack/lib/ProgressPlugin');

const { ProvidePlugin, DefinePlugin, NoEmitOnErrorsPlugin, SourceMapDevToolPlugin, NamedModulesPlugin } = require('webpack');
const { UglifyJsPlugin, CommonsChunkPlugin } = require('webpack').optimize;
const { AotPlugin } = require('@ngtools/webpack');

const nodeModules = path.join(projectRoot, 'node_modules');
const realNodeModules = fs.realpathSync(nodeModules);
const genDirNodeModules = path.join(projectRoot, 'src','$$_gendir','node_modules');
const entryPoints = ["inline","polyfills","sw-register","vendor","main"];
 
 module.exports = {
    resolve: {
    extensions: [
      ".ts",
      ".js"
    ],
    modules: [
        "./node_modules"
    ],
    symlinks: true
    },
    resolveLoader: {
        modules: [
        "./node_modules"
        ]
    },
    entry: {
        main: [
            "./src/main.ts"
                ],
        polyfills: [
            "./src/polyfills.ts"
        ]
    },
    target: 'web',
      output: {
        path: `${__dirname}/wwwroot/dist/`,
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
     },
    module:{ 
        rules: [{
            test: /\.json$/,
            loader: "json-loader"
            },{
            test: /\.html$/,
            use: [{
                    loader: 'raw-loader'
                }],
            }, {
            test: /\.ts$/,       
            loader: '@ngtools/webpack'    
            }]
    },
    plugins:[
        new NoEmitOnErrorsPlugin(),
        new ProvidePlugin({
            $: "jquery",
            jQuery: 'jquery'
        }),
        new UglifyJsPlugin({
            minimize: true
            }),
        new ProgressPlugin(),
        new DefinePlugin({
             'process.env.NODE_ENV': JSON.stringify('production'),
              __DEV__: false
          }),
        new CommonsChunkPlugin({
            minChunks: 2,
            async: "common"
            }),
        new CommonsChunkPlugin({
        name: [
            "inline"
            ],
            "minChunks": null
        }),
        new CommonsChunkPlugin({
            name: [
                "vendor"
            ],
            minChunks: (module) => {
                        return module.resource
                            && (module.resource.startsWith(nodeModules)
                                || module.resource.startsWith(genDirNodeModules)
                                || module.resource.startsWith(realNodeModules));
                    },
            chunks: [
                "main"
            ]
        }),
        new NamedModulesPlugin({}),
        new AotPlugin({
            mainPath:"main.ts",
            hostReplacementPaths: {
                "environments/environment.ts": "environments/environment.ts"
            },
            tsConfigPath: './src/tsconfig.src.json',
            skipCodeGeneration: true
        })
    ]
}