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
		a: './src/script/a.js'
	},
	// 打包后文件存放目录
	output: {
		path: '/dist/js',
		// 对象的条件下，filename不能是一个文件，报错。multi-entry can't fit to simple output. 1+ 版本不报错，但会覆盖
		// filename: 'bundle.js',
		// [name]--entry-key [hash]--本次打包的hash值-总的 [chunkhash]--每个chunk的hash值--可以理解为文件的版本号-文件内容改变才会变
		filename: '[name]-[hash].js',
	},
} 