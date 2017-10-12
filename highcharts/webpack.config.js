
module.exports={
	entry:__dirname+"/main.js",
	output:{
		path:__dirname,
		filename:"bundle_1.js"
	},
	module:{  
        rules:[  
	            {
	            test: /\.js$/,
	            loader: 'babel-loader',
	            exclude: /node_modules/
	        } 
        ]  
    }
}