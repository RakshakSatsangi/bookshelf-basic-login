module.exports ={

	entry: "./app/components/inst_Main.js",
	output:{
		filename: "public/inst_bundle.js"
	},
	module:{
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader:'babel-loader'


			}
		]
	}
};