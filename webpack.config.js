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