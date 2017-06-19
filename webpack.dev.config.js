// webpack --config webpack.dev.config.js config新文件后才能打包 ;非默认配置文件
module.exports = {
	// 打包入口
	entry: './src/script/main.js',
	// 打包后文件存放目录
	output: {
		path: __dirname + '/dist/js',
		filename: 'bundle_dev.js',

		// filename: './dist/js/bundle.js'
	},
}
