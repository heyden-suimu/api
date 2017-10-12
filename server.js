const connect = require('connect'),
serveStatic = require('serve-static')

const app = connect()
// .use(test)
.use(serveStatic(__dirname))
.listen('8030')

function test(req,res,next){
	console.log("listen 3030")
	res.end("hello")
	next()
}