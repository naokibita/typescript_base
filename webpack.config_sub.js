const path = require('path');
module.export = {
	entry: {
		bundle: './src/app.ts'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions:['.ts','.js']
	},
	devServer: {
		contentBase: path.join()
	},
	module: {
		roles: [
			{
				test:/\.ts$/,loader:'ts-loader'
			}
		]
	}
},