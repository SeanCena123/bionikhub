var express = require('express');
var firebase = require('firebase');
require('firebase/app');
require('firebase/database');
var app = express();
firebase.initializeApp({
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTHDOMAIN,
	databaseURL: process.env.DATABASEURL,
	projectId: process.env.PROJECTID,
	storageBucket: process.env.STORAGEBUCKET,
	messagingSenderId: process.env.MESSAGINGSENDERID,
	appId: process.env.APPID2,
	measurementId: process.env.MEASUREMENTID
});

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

var firebaseAppAppValley = firebase.database().ref().child("appData/app1/Category");


// app.get('/', function(req, res) {
// 	function one() {

// 	// ejs render automatically looks in the views folder
// 	res.render('index', { 
// 		title: 'Name',
// 		variable: 'AppName1',
// 		push: 'test()'
// 	});
// 	}
// 	one();	
// });


app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

// firebase.initializeApp({
// 	apiKey: "AIzaSyCyjont_dMl7FcTx6YWU6SrYtQTPtmJWqE",
// 	authDomain: "bionik-95bba.firebaseapp.com",
// 	databaseURL: "https://bionik-95bba.firebaseio.com",
// 	projectId: "bionik-95bba",
// 	storageBucket: "bionik-95bba.appspot.com",
// 	messagingSenderId: "36958518292",
// 	appId: "1:36958518292:web:c3e8be06da5360dbccbb01",
// 	measurementId: "G-HP5KYB6S5T"
// });

			// firebaseAppAppValley.on('value', function(snapshot) { 
			// 	appName1 = snapshot.val(); 
			// 	console.log(appName1)
			// })  