# webpack-config-cloud9
Webpack configuration for Cloud9 (Testing purpose only)
For localhost configuration, please follow: https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm

The below configuration is for Cloud9:
##1: __dirname for absolutely path
##2: host: process.env.IP
##3: port: process.env.PORT
##4: disableHostCheck: true
##5: loader: 'babel-loader'

var config = {
   entry: __dirname + '/main.js',
	
   output: {
      path:__dirname,
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      disableHostCheck: true,
      port: process.env.PORT,
      host: process.env.IP
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;
