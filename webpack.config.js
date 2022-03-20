/**
 * Notes: 
 * #How to load jquery in webpack
 * https://stackoverflow.com/questions/28969861/managing-jquery-plugin-dependency-in-webpack
 * https://stackoverflow.com/questions/48579518/how-to-import-jquery-in-webpack
 */


const fs            = require('fs');
const path          = require('path');
const webpack       = require('webpack');
const context_path  = path.resolve(__dirname);
const config_path   = `${path.resolve(__dirname)}/tsconfig.json`;

// var nodeModules = {};
// fs.readdirSync(`${process.cwd()}/node_modules`)
// .filter(function(x) {
// 	return ['.bin'].indexOf(x) === -1;
// })
// .forEach(function(mod) {
// 	nodeModules[mod] = 'commonjs ' + mod;
// });

// console.log('node_modules externals: ', nodeModules);

/**
 * https://webpack.js.org/configuration
 * 
 * - Externals: let you load something externally, like in your index.html and have it in your environment
 *   Then tell webpack about via an object map.
 * - module: tells webpack where to look for the stuff to load and how it should load it 
 */

let config = {
  mode: 'development',
  target: 'web',
  context: path.resolve(__dirname), //absolute path base dir for resolving entry points and loaders
  entry: {
    app:[
      // `${path.resolve(__dirname)}/node_modules/jquery/dist/jquery`,
      `${path.resolve(__dirname)}/node_modules/fancybox/dist/js/jquery.fancybox`,
      // `${path.resolve(__dirname)}/node_modules/slick-carousel/slick/slick.js`,
      `${path.resolve(__dirname)}/node_modules/jquery.scrollto/jquery.scrollTo`,
      `${path.resolve(__dirname)}/node_modules/tooltipster/dist/js/tooltipster.bundle.min.js`,
      `${path.resolve(__dirname)}/js/jquery.flip.js`,
      `${path.resolve(__dirname)}/js/modernizr`,
      `${path.resolve(__dirname)}/js/isotope.js`,
      `${path.resolve(__dirname)}/js/global`,
      // `${path.resolve(__dirname)}/js/gallery`
    ]
  },  //Point(s) to enter the application
	output: {
		filename: '[name].bundle.js',
		path: path.join(__dirname, './dist')
  },
  resolve: {
      extensions: ['.ts', '.js'], //what wp should try to bundle
      modules: [
        path.join(process.cwd(), '/js') //Where wp should look for stuff
      ]
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [],
  //Instructions on how to load each type of module
  module: {
    rules: [
      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery'
        },{
            loader: 'expose-loader',
            options: '$'
        }]
      },
      {
				exclude: [
					/dist/
				],
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
					context: context_path,
					configFile: config_path
				}
			}
    ],
  },
  watch: true
};

console.log('context path: ', context_path);
console.log('config  path: ', config_path);

module.exports = config;