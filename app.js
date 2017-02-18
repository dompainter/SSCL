var express 			=	require('express')
	, app				=	express()
	, request			=	require('request')
	, bodyParser		=	require('body-parser')
	, methodOverride 	= 	require("method-override")
	, fs 				= 	require('fs')
	, _ 				= 	require('underscore')
	, waterfall			=	require('waterfall')
	, favicon = require('serve-favicon')

var router = express.Router()
var data = JSON.parse(fs.readFileSync('./public/portfolio.json'))

app.set("views", __dirname + '/views')
app.engine('html', require('ejs').renderFile);
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(favicon(__dirname + '/public/favicon.png'));

app.get('/', function(req, res){

	res.render('home', {
		data: data,
		projects: data
	})
})

app.get('/projects/:id', function(req, res){
	res.render('project', {
		data: _.findWhere(data.houses, { folder:req.params.id }),
		projects: data
	})
})

app.get('/*', function(req, res){
	res.render('error', {
		data: data,
		projects: data
	})
})

app.listen((process.env.PORT || 3000), function(){
    console.log("Server started...");
})
