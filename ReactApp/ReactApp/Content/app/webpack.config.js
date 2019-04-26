module.exports = {
	context: __dirname,
	entry: "./food.tsx",
	mode: "development",
	output: {
		path: __dirname +"/dist",
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['.ts', '.js', '.tsx', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			}
		]
	}
};