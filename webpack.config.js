var htmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');


//可直接 webpack 进行打包
// module.exports = {
// 	// 打包入口
// 	entry: './src/script/main.js',
// 	// 打包后文件存放目录
// 	output: {
// 		path: __dirname + '/dist/js',
// 		filename: 'bundle.js',

// 		// filename: './dist/js/bundle.js'
// 	},
// }

// 脚本运行， npm run (webpack)--对应下面的脚本 package.json

// module.exports = {
// 	// 打包入口
// 	entry: ['./src/script/main.js','./src/script/a.js'],
// 	// 打包后文件存放目录
// 	output: {
// 		path: '/dist/js',
// 		filename: 'bundle.js',
// 	},
// } 



module.exports = {
	// 打包入口 对象写法（key-chunkname，value-entry） 两个文件或者说是两组。page1 page2 --多页面应用中，不同的页面不同的chunk
	entry: {
		main: './src/script/main.js',
		a: './src/script/a.js',
		b: './src/script/b.js',
		c: './src/script/c.js'
	},
	// 打包后文件存放目录
	output: {
		// 指向资源目录 
		path: __dirname + '/dist',
		// 对象的条件下，filename不能是一个文件，报错。multi-entry can't fit to simple output. 1+ 版本不报错，但会覆盖
		// filename: 'bundle.js',
		// [name]--entry-key [hash]--本次打包的hash值-总的 [chunkhash]--每个chunk的hash值--可以理解为文件的版本号-文件内容改变才会变
		filename: 'js/[name].js',

		// 上线需求发布底子路径
		publicPath: 'http://cdn.com/', 
	},

	plugins: [
		// 多页面可以new多个
		// new htmlWebpackPlugin({
		// 	template: 'index.html',
		// 	// filename: 'index.html',
		// 	inject: 'head',
		// 	title: 'webpack is good',
		// 	data: new Date(),
		// 	// 压缩
		// 	minify: {
		// 		removeComments: true,
		// 		collapseWhiteSpace: true,
		// 	}
		// }),
		// ------ chunks --指定包含的chunk

		new htmlWebpackPlugin({
			filename: 'a.html',
			template: 'index.html',
			inject: 'body',
			title: 'this is a.html',
			// chunks: ['main','a'],
			excludeChunks: ['b','c'], //等价上面
		}),
		new htmlWebpackPlugin({
			filename: 'b.html',
			template: 'index.html',
			inject: 'body',
			title: 'this is b.html',
			chunks: ['b','main'],
			inlineSource: 'b',
		}),
		new htmlWebpackPlugin({
			filename: '/html/c.html',
			template: 'index.html',
			inject: 'body',
			title: 'this is c.html',
			chunks: ['c','main']
		}),

		new htmlWebpackInlineSourcePlugin(),
	]
} 