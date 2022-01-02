/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path");

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const WebpackUserscriptPlugin = require("webpack-userscript");

module.exports = {
	entry: "./src/index.user.ts",
	mode: process.env.WEBPACK_MODE || "production",
	module: {
		rules: [{
			include: path.resolve(__dirname, "./src"),
			loader: "ts-loader",
			options: {
				transpileOnly: true,
			},
			test: /\.ts$/,
		}],
	},
	output: {
		filename: "index.user.js",
		path: path.resolve(__dirname, "./dist"),
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
		new WebpackUserscriptPlugin({
			headers: {
				match: "https://*.reddit.com/*",
				name: "Embellish",
				namespace: "https://snakeroom.org/",
			},
			pretty: process.env.WEBPACK_MODE === "development",
		}),
	],
	resolve: {
		extensions: [
			".js",
			".ts",
		],
	},
};
