//Initiating Global Variables
var express = require('express');
var app = express();
const port = process.env.PORT;
const globemail = process.env.EMAIL;
var totalNumApps;
var viewcounter = 0;
var viewcounter2 = 0;
//Firebase Init
var firebase = require('firebase');
require('firebase/app');
require('firebase/database');
firebase.initializeApp({
		apiKey: process.env.API_KEY,
		authDomain: process.env.AUTHDOMAIN,
		databaseURL: process.env.DATABASEURL,
		projectId: process.env.PROJECTID,
		storageBucket: process.env.STORAGEBUCKET,
		messagingSenderId: process.env.MESSAGINGSENDERID,
		appId: process.env.APPID,
		measurementId: process.env.MEASUREMENTID
});

require("firebase/auth");
const admin = require('firebase-admin')

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://bionik-95bba.firebaseio.com"
});



module.exports = { firebase, admin };

//Beginning Server Commands
var server = app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

//Creating socket connection
var socket = require('socket.io');
var io = socket(server)
io.on('connection', function(socket) {

 	var clientIp = socket.request.connection.remoteAddress;
 	var clientTime = socket.handshake.time;

	//Confirming a socket connection
    console.log(socket.id+": Connected.");
	console.log('User Address: '+clientIp);

	//Adding connection from userto database
	var sourceAddress = firebase.database().ref('storeData/clientData/clientAddress');
	var sourceTime = firebase.database().ref('storeData/clientData/clientTime');
	sourceAddress.push().set(clientIp);
    sourceTime.push().set(clientTime);	

//Resetting storeData to 0.
function reset() {

	var appgethomeremove = firebase.database().ref('storeData/appGet/app-get-home');
	appgethomeremove.remove();
	var appgetsourceremove = firebase.database().ref('storeData/appGet/app-source-click');
	appgetsourceremove.remove();
	var appsourcegettotal = firebase.database().ref('storeData/appGet/app-source-get-total');
	appsourcegettotal.remove();
	//Reset the values of appGet/app-home-get
	for (var k = 1; k < totalNumApps; k++) {
	 	var source = firebase.database().ref('storeData/appGet/app-get-home/app'+k+'/app'+k+'-total');
	 	source.set(0);
	}	
	//Reset the values of appGet/app-source-get-total
	for (var k = 1; k < totalNumApps; k++) {
	 	var source = firebase.database().ref('storeData/appGet/app-source-get-total/app'+k+'/app'+k+'-total');
	 	source.set(0);
	}	
	//Reset the values of appGet/app-source-click/app0
	var delArraySor = ["Ignition", "TopStore", "AppValley", "Tweakbox", "IOSNinja", "CoconutX", "iOSGods", "Flekstore", "Emus4", "Emus"];
	for (var k = 1; k < totalNumApps; k++) {
	 	for (var i = 0; i < delArraySor.length; i++) {
	 		var source = firebase.database().ref('storeData/appGet/app-source-click/app'+k+'/app'+k+'-'+delArraySor[i]+'/app'+k+'-'+delArraySor[i]+'-click');
	 		source.set(0);
	 	}
	}
	//Reset the valies of /category-open
	var delArrayCat = ["Jailbreak", "Tweaked", "Entertainment", "Emulators", "Games"]	
	for (var k = 0; k < delArrayCat.length; k++) {
		var source = firebase.database().ref('storeData/category-open/'+delArrayCat[k]+'-open/'+delArrayCat[k]+'-open-clicker');
		source.set(0);
	}
	//Reset the valies of storeData/clientData/clientAddress
	var clientAddressRemove = firebase.database().ref('storeData/clientData/clientAddress');
	clientAddressRemove.remove();
	//Reset the valies of storeData/clientData/clientTime
	var clientTimeRemove = firebase.database().ref('storeData/clientData/clientTime');
	clientTimeRemove.remove();
	//Reset the values of storeData/home-data/legal/legal-click
	var homedatalegal = firebase.database().ref('storeData/home-data/legal/legal-click');
	homedatalegal.set(0);
	//Reset the values of storeData/home-data/source-list
	var delArraySor2 = ["Ignition", "TopStore", "AppValley", "Tweakbox", "IOSNinja", "CoconutX", "IOSGods", "FlekStore", "Emus4u", "IOSEmus"];
	for (var k = 0; k < delArraySor2.length; k++) {
		var homedatasor = firebase.database().ref('storeData/home-data/source-list/'+delArraySor2+'-list/'+delArraySor2[k]+'-twitter-click');
		homedatasor.set(0);
	}
	//Reset the values of storeData/home-data/submission/request-click
	var homedatareq = firebase.database().ref('storeData/home-data/submission/request/request-click');
	homedatareq.set(0);
	//Reset the values of storeData/home-data/twitter/twitter-bionik-click
	var homedatatwitbionik = firebase.database().ref('storeData/home-data/twitter/twitter-bionik/twitter-bionik-click');
	homedatatwitbionik.set(0);
	//Reset the values of storeData/home-data/twitter/twitter-djfeelofficial-click
	var homedatatwitdjfeel = firebase.database().ref('storeData/home-data/twitter/twitter-djfeelofficial/twitter-djfeelofficial-click');
	homedatatwitdjfeel.set(0);
	//Reset the values of storeData/navbar-click/apps-click
	var navbarclickapps = firebase.database().ref('storeData/navbar-click/apps/apps-click');
	navbarclickapps.set(0);
	//Reset the values of storeData/navbar-click/home-click
	var navbarclickhome = firebase.database().ref('storeData/navbar-click/home/home-click');
	navbarclickhome.set(0);
	//Reset the values of storeData/navbar-click/search-click
	var navbarclicksearch = firebase.database().ref('storeData/navbar-click/search/search-click');
	navbarclicksearch.set(0);
	//Reset the values of storeData/navbar-click/sources-click
	var navbarclicksources = firebase.database().ref('storeData/navbar-click/sources/sources-click');
	navbarclicksources.set(0);
	//Reset the values of storeData/navbar-click/stores-click
	var navbarclickstores = firebase.database().ref('storeData/navbar-click/stores/stores-click');
	navbarclickstores.set(0);
	//Reset the values of storeData/navbar-click/updates-click
	var navbarclickupdates = firebase.database().ref('storeData/navbar-click/updates/updates-click');
	navbarclickupdates.set(0);
	//Reset the values of storeData/refresh-counter
	var refreshcounter = firebase.database().ref('storeData/refresh/refresh-counter');
	refreshcounter.set(0);
	//Reset the values of storeData/reportApp
	for (var k = 1; k < totalNumApps; k++) {
		var reportAppReset = firebase.database().ref('storeData/reportApp/app'+k+'/app'+k+'-report');
		reportAppReset.set(0);
	}
	//Reset the values of storeData/source-open
	for (var k = 0; k < delArraySor.length; k++) {
		var sourceopenReset = firebase.database().ref('storeData/source-open/'+delArraySor[k]+'-open/'+delArraySor[k]+'-open-clicker');
		sourceopenReset.set(0);
	}
	//Reset the values of storeData/view-counter
	var viewcounterReset = firebase.database().ref('storeData/view/view-counter');
	viewcounterReset.set(0);
}

// reset();		

const auth = firebase.auth();

/*
CHECKING USER STATUS FOR FIREBASE AUTHENTICATION
*/
// auth.onAuthStateChanged(function(user) {
//     if (user) {
//         socket.on('signoutfunc', async function(data) { 
//         	// await socket.emit('signoutfunc', 'value'); 
//         	await auth.signOut()
//         	var sourceTime = firebase.database().ref('storeData/userProperties/'+user.uid+'/clientData/clientLogout'); 
//         	sourceTime.push().set(clientTime);	 
//         });	 
    	



//     	//Sign out
// 		if (user.emailVerified == 1) {
// 			user.favlist = [];
//        		var email = firebase.database().ref('storeData/userProperties/'+user.uid+'/user-email');
// 	 		email.set(user.email);
// 	 		var uid = firebase.database().ref('storeData/userProperties/'+user.uid+'/user-uid');
// 	 		uid.set(user.uid);
// 			var sourceAddress = firebase.database().ref('storeData/userProperties/'+user.uid+'/clientData/clientAddress');
// 			var sourceTime = firebase.database().ref('storeData/userProperties/'+user.uid+'/clientData/clientTime');
// 			sourceAddress.push().set(clientIp);
// 		    sourceTime.push().set(clientTime);	


// 			var myArray = [1, 2, 3, 4, 5];
// 		    socket.on('hi', function (data) {
// 		    	socket.emit('hi', myArray);
//   			});


// 		    socket.on('disconnect', function () {
//       			console.log(socket.id+": Disconnected.");
// 	      			var sourceTime = firebase.database().ref('storeData/userProperties/'+user.uid+'/clientData/clientDisconnect');
// 			    	sourceTime.push().set(clientTime);	
//   			});


// 			// //Automatically running
//    // 	        var favappnum; //Used to activate other functions after obtaining numcount
// 			// var numcount; //Global variable used to count the number of apps inside favlist
// 			// var totalfavcounter = firebase.database().ref('storeData/userProperties/'+user.uid+'/favlist');
// 			// totalfavcounter.on('value', async function(snapshot) {
// 			// 	numcount = await snapshot.numChildren(); //Gets the total number of apps
// 			// 	await console.log("Total apps in favlist: "+numcount); //Prints it to the server console
// 			// 	await socket.emit('numcount', numcount); //Sends request to numcount on the client
// 			// 	favappnum = 1; //Activates other functions to work
// 			// });	


// 			// //Automatically running
// 			// totalfavcounter.on('value', async function(snapshot) { //Listening for the total value inside 
// 			// numcount = await snapshot.numChildren();
// 			// await socket.emit('numcount', numcount);
// 	  //  			for (var i = 0; i < numcount; i++) {
// 	  //  				var favlist = await firebase.database().ref('storeData/userProperties/'+user.uid+'/favlist/app'+i);
// 			// 			favlist.on("value", async function(snapshot) { 
// 			// 				await user.favlist.push(snapshot.val());	
// 			// 				await socket.emit('favlist', user.favlist);	
// 			// 				if (i == numcount) {
// 			// 					await console.log(user.favlist);		
// 			// 				}
// 			// 			}) 
// 			// }
// 			// });		

//    // 	        var favappnum; //Used to activate other functions after obtaining numcount
// 			// var numcount; //Global variable used to count the number of apps inside favlist
// 			// var totalfavcounter = firebase.database().ref('storeData/userProperties/'+user.uid+'/favlist');

// 			// socket.on('favlist4', async function(data) {
// 			//     var source = await firebase.database().ref().child('storeData/userProperties/'+user.uid+'/favlist/app'+(numcount-1));
//    //              source.remove();
//    //              socket.emit('favlist1', 'value')	
// 			// });	

// 			// socket.on('favlist1', async function(data) {
// 			// 		await totalfavcounter.on('value', async function(snapshot) {
// 			// 			numcount = await snapshot.numChildren();
// 			// 			console.log(numcount);
// 			// 			socket.emit('favlist1', numcount);
// 			// 		});		
// 			// });						

// 			// socket.on('favlist2', async function(data) {
// 			// 	user.favlist = [];
// 			// 	console.log("numcount before: "+numcount);
// 		 //   			for (var i = 0; i < numcount; i++) {
// 		 //   				var favlist = await firebase.database().ref('storeData/userProperties/'+user.uid+'/favlist/app'+i);
// 			// 				favlist.on("value", async function(snapshot) { 
// 			// 					await user.favlist.push(snapshot.val());	
// 			// 					// await socket.emit('favlist', user.favlist);	
// 			// 					if (i == numcount) {
// 			// 						await console.log(user.favlist);		
// 			// 						socket.emit('favlist3', user.favlist);	
// 			// 					}
// 			// 				}) 
// 			// 		}
// 			// });			



// 			// socket.on('favlist5', async function(data) {
// 			// 	var counter = 1;
// 			// 	var number;
// 			// 		if (numcount < 10 ) {
// 			// 			for (var i = 0; i < numcount; i++) {
// 			// 				var favlistnum = firebase.database().ref('storeData/userProperties/'+user.uid+'/favlist/app'+i);
// 			// 				favlistnum.on("value", function(snapshot) {
// 			// 					number = snapshot.val();
// 			// 					if (number == data) {
// 			// 						if (counter == 1) {
// 			// 							counter = 0;
// 			// 						}
// 			// 					}
// 			// 				})
// 			// 			}
// 			// 			if (counter == 1) {
// 			// 				var ref1 = firebase.database().ref('storeData/userProperties/'+user.uid+'/favlist/app'+numcount);
// 			// 				ref1.set(data);
// 			// 				var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/favlist-activity/added/app'+data+'/clientTime');
// 			// 				ref2.push().set(clientTime);
// 			// 			} 
// 			// 		}
// 			// });	


// 			// socket.on('removefavapp', async function(data) {
// 			// if (favappnum == 1) {

// 			// totalfavcounter.on('value', async function(snapshot) {
// 			// 	// numcount = await 0;
// 			// 	numcount = await snapshot.numChildren();
// 			// });	

// 			// 	var ref2 = await firebase.database().ref('storeData/userProperties/'+user.uid+'/favlist-activity/removed/app'+user.favlist[(numcount-1)]+'/clientTime');
// 			// 	ref2.push().set(clientTime);
//    //           	await user.favlist.pop();
//    //              await console.log(user.favlist);
//    //              // await socket.emit('removefavapp', 'value');

//    //              var source = await firebase.database().ref().child('storeData/userProperties/'+user.uid+'/favlist/app'+(numcount-1));
//    //              await source.remove();

// 			// }
// 			// });	

// 			// socket.on('favlistadding', function(data) {
// 			// 	var favlist =  firebase.database().ref('storeData/userProperties/'+user.uid+'/favlist/app'+numcount);
// 			// 	var counter = 1;
// 			// 	var number;
// 			// 	user.favlist = [];
// 			// 	if (favappnum == 1) {
// 			// 		if (numcount < 10) {
// 			// 			for (var i = 0; i < numcount; i++) {
// 			// 				var favlistnum = firebase.database().ref('storeData/userProperties/'+user.uid+'/favlist/app'+i);
// 			// 				favlistnum.on("value", function(snapshot) {
// 			// 					number = snapshot.val();
// 			// 					if (number == data) {
// 			// 						if (counter == 1) {
// 			// 							counter = 0;
// 			// 						}
// 			// 					}
// 			// 				})
// 			// 			}
// 			// 		if (counter == 1) {
// 			// 			favlist.set(data);
// 			// 			var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/favlist-activity/added/app'+data+'/clientTime');
// 			// 			ref2.push().set(clientTime);
// 			// 		} 
// 			// 		} 
// 			// 	}
// 			// });	

// 	//[DATABASE] Adding to App Click when clicking on Sources (Singular Source Click)
// 	function clicking(name, source) {
// 		var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/appGet/app-source-click/app'+name+'/app'+name+'-'+source+'/app'+name+'-'+source+'-click');
// 		var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/appGet/app-source-click/app'+name+'/app'+name+'-'+source+'/clientTime');
// 		ref2.push().set(clientTime);	
// 		ref.transaction(function(currentClicks) {
// 		  return (currentClicks || 0) + 1;
// 		});
// 	}
// 	//[DATABASE] Adding to Total App Click when clicking on Sources (Total Source Clicks)
// 	function submitAppSourceTotal(num) {
// 		var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/appGet/app-source-get-total/app'+num+'/app'+num+'-total');
// 		var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/appGet/app-source-get-total/app'+num+'/clientTime');
// 		ref2.push().set(clientTime);	
// 		ref.transaction(function(currentClicks) {
// 		  return (currentClicks || 0) + 1;
// 		});      
// 	}
// 	//[DATABASE] Adding to Total App Click when clicking on Homescreen
// 	function submitgetAppClick(num) {
// 		var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/appGet/app-get-home/app'+a+'/app'+a+'-total');
// 		var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/appGet/app-get-home/app'+a+'/clientTime');
// 		ref2.push().set(clientTime);	
// 		ref.transaction(function(currentClicks) {
// 		  return (currentClicks || 0) + 1;
// 		});      
// 	}

// 	socket.on('storeData/userProperties/'+user.uid+'/Number', function(data) {
// 		a=data;
// 		data = submitgetAppClick(a);
// 		console.log('storeData/appGet/app-get-home/app'+a+'/app'+a+'-total ADDED');
// 	});

// 	socket.on('ignition-num', function(data) {
// 		var b = data;
// 		data = clicking(b, label[0]);
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[0]+' ADDED');
// 		submitAppSourceTotal(b)
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
// 	});
// 	socket.on('topstore-num', function(data) {
// 		var b = data;
// 		data = clicking(b, label[1]);
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[1]+' ADDED');
// 		submitAppSourceTotal(b)
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
// 	});
// 	socket.on('appvalley-num', function(data) {
// 		var b = data;
// 		data = clicking(b, label[2]);
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[2]+' ADDED');
// 		submitAppSourceTotal(b)
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
// 	});
// 	socket.on('tweakbox-num', function(data) {
// 		var b = data;
// 		data = clicking(b, label[3]);
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[3]+' ADDED');
// 		submitAppSourceTotal(b)
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
// 	});
// 	socket.on('iosninja-num', function(data) {
// 		var b = data;
// 		data = clicking(b, label[4]);
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[4]+' ADDED');
// 		submitAppSourceTotal(b)
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
// 	});
// 	socket.on('coconutx-num', function(data) {
// 		var b = data;
// 		data = clicking(b, label[5]);
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[5]+' ADDED');
// 		submitAppSourceTotal(b)
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
// 	});
// 	socket.on('iosgods-num', function(data) {
// 		var b = data;
// 		data = clicking(b, label[6]);
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[6]+' ADDED');
// 		submitAppSourceTotal(b)
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
// 	});
// 	socket.on('flekstore-num', function(data) {
// 		var b = data;
// 		data = clicking(b, label[7]);
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[7]+' ADDED');
// 		submitAppSourceTotal(b)
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
// 	});
// 	socket.on('emus4u-num', function(data) {
// 		var b = data;
// 		data = clicking(b, label[8]);
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[8]+' ADDED');
// 		submitAppSourceTotal(b)
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
// 	});
// 	socket.on('iosemus-num', function(data) {
// 		var b = data;
// 		data = clicking(b, label[9]);
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[9]+' ADDED');
// 		submitAppSourceTotal(b)
// 		console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
// 	});

// 	//[DATABASE] Adding to Total Click on specific Category OPEN button
// 	function submitOpenCategory(a) {
// 		var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/category-open/'+a+'-open/'+a+'-open-clicker');
// 		var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/category-open/'+a+'-open/clientTime');
// 		ref2.push().set(clientTime);	
// 		ref.transaction(function(currentClicks) {
// 		  return (currentClicks || 0) + 1;
// 		});      
// 	}
// 	//[DATABASE] Adding to Total Click on specific Source OPEN button
// 	function submitOpenSource(a) {
// 		var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/source-open/'+a+'-open/'+a+'-open-clicker');
// 		var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/source-open/'+a+'-open/clientTime');
// 		ref2.push().set(clientTime);
// 		ref.transaction(function(currentClicks) {
// 		  return (currentClicks || 0) + 1;
// 		});      
// 	}
// 	//[DATABASE] Listening to if clicked on Jailbreak open category on apps page
// 	socket.on('storeData/userProperties/'+user.uid+'/category-open/Jailbreak-open', function(data) {
// 		console.log('storeData/category-open/Jailbreak-open ADDED');
// 		data = submitOpenCategory('Jailbreak');
// 	});		
// 	//[DATABASE] Listening to if clicked on Tweaked open category on apps page
// 	socket.on('storeData/userProperties/'+user.uid+'/category-open/Tweaked-open', function(data) {
// 		console.log('storeData/category-open/Tweaked-open ADDED');
// 		data = submitOpenCategory('Tweaked');
// 	});	
// 	//[DATABASE] Listening to if clicked on Entertainment open category on apps page
// 	socket.on('storeData/userProperties/'+user.uid+'/category-open/Entertainment-open', function(data) {
// 		console.log('storeData/category-open/Entertainment-open ADDED');
// 		data = submitOpenCategory('Entertainment');
// 	});			
// 	//[DATABASE] Listening to if clicked on Emulators open category on apps page
// 	socket.on('storeData/userProperties/'+user.uid+'/category-open/Emulators-open', function(data) {
// 		console.log('storeData/category-open/Emulators-open ADDED');
// 		data = submitOpenCategory('Emulators');
// 	});		
// 	//[DATABASE] Listening to if clicked on Games open category on apps page
// 	socket.on('storeData/userProperties/'+user.uid+'/category-open/Games-open', function(data) {
// 		console.log('storeData/category-open/Games-open ADDED');
// 		data = submitOpenCategory('Games');
// 	});			

	
// 	//[DATABASE] Listening to if clicked on Ignition open on source page
// 	socket.on('storeData/userProperties/'+user.uid+'/source-open/Ignition-open', function(data) {
// 		console.log('storeData/source-open/Ignition-open ADDED');
// 		data = submitOpenSource('Ignition');
// 	});		
// 	//[DATABASE] Listening to if clicked on TopStore open on source page
// 	socket.on('storeData/userProperties/'+user.uid+'/source-open/TopStore-open', function(data) {
// 		console.log('storeData/source-open/TopStore-open ADDED');
// 		data = submitOpenSource('TopStore');
// 	});		
// 	//[DATABASE] Listening to if clicked on AppValley open on source page
// 	socket.on('storeData/userProperties/'+user.uid+'/source-open/AppValley-open', function(data) {
// 		console.log('storeData/source-open/AppValley-open ADDED');
// 		data = submitOpenSource('AppValley');
// 	});		
// 	//[DATABASE] Listening to if clicked on Tweakbox open on source page
// 	socket.on('storeData/userProperties/'+user.uid+'/source-open/Tweakbox-open', function(data) {
// 		console.log('storeData/source-open/Tweakbox-open ADDED');
// 		data = submitOpenSource('Tweakbox');
// 	});		
// 	//[DATABASE] Listening to if clicked on IOSNinja open on source page
// 	socket.on('storeData/userProperties/'+user.uid+'/source-open/IOSNinja-open', function(data) {
// 		console.log('storeData/source-open/IOSNinja-open ADDED');
// 		data = submitOpenSource('IOSNinja');
// 	});		
// 	//[DATABASE] Listening to if clicked on CoconutX open on source page
// 	socket.on('storeData/userProperties/'+user.uid+'/source-open/CoconutX-open', function(data) {
// 		console.log('storeData/source-open/CoconutX-open ADDED');
// 		data = submitOpenSource('CoconutX');
// 	});		
// 	//[DATABASE] Listening to if clicked on iOSGods open on source page
// 	socket.on('storeData/userProperties/'+user.uid+'/source-open/iOSGods-open', function(data) {
// 		console.log('storeData/source-open/iOSGods-open ADDED');
// 		data = submitOpenSource('iOSGods');
// 	});		
// 	//[DATABASE] Listening to if clicked on Flekstore open on source page
// 	socket.on('storeData/userProperties/'+user.uid+'/source-open/Flekstore-open', function(data) {
// 		console.log('storeData/source-open/Flekstore-open ADDED');
// 		data = submitOpenSource('Flekstore');
// 	});		
// 	//[DATABASE] Listening to if clicked on Emus4 open on source page
// 	socket.on('storeData/userProperties/'+user.uid+'/source-open/Emus4-open', function(data) {
// 		console.log('storeData/source-open/Emus4-open ADDED');
// 		data = submitOpenSource('Emus4');
// 	});		
// 	//[DATABASE] Listening to if clicked on Emus open on source page
// 	socket.on('storeData/userProperties/'+user.uid+'/source-open/Emus-open', function(data) {
// 		console.log('storeData/source-open/Emus-open ADDED');
// 		data = submitOpenSource('Emus');
// 	});	
// //[DATABASE] Function that adds refresh counter
// function countRefresh() {
// 	var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/refresh/refresh-counter');
// 	var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/refresh/clientTime');
// 	ref2.push().set(clientTime);
// 	ref.transaction(function(currentClicks) {
// 	  return (currentClicks || 0) + 1;
// 	});      
// }
// //[DATABASE] Function that adds view counter
// function countView() {
// 	var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/view/view-counter/');
// 	var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/view/clientTime');

// 	ref2.push().set(clientTime);
// 	ref.transaction(function(currentClicks) {
// 	  return (currentClicks || 0) + 1;
// 	});      
// }
// //[DATABASE] Listening for refresh click
// 	socket.on('storeData/userProperties/'+user.uid+'/refresh-counter', function(data) {
// 		countRefresh();
// 	})
// //[DATABASE] Listening for view click
// socket.on('storeData/userProperties/'+user.uid+'/view-counter', function(data) {
// 	if (viewcounter2 == 0) {
// 		countView();
// 		viewcounter2 = 1;
// 	}
// })
// //[DATABASE] Function for click on Twitter Name
// 	function submitTwitter(name) {
// 		var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/twitter/twitter-'+name+'/twitter-'+name+'-click');
// 		var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/twitter/twitter-'+name+'/clientTime');

// 		ref2.push().set(clientTime);
// 		ref.transaction(function(currentClicks) {
// 		  return (currentClicks || 0) + 1;
// 		});      
// 	}

// 	//[DATABASE] Listening for Click on Bionik Twitter
// 	socket.on('storeData/userProperties/'+user.uid+'/home-data/twitter/twitter-bionik-click', function(data) {
// 		data = submitTwitter('bionik');
// 		console.log('home-data/twitter/twitter-bionik-click ADDED');
// 	})
// 	//[DATABASE] Listening for Click on DJFeelOfficial Twitter
// 	socket.on('storeData/userProperties/'+user.uid+'/home-data/twitter/twitter-djfeelofficial-click', function(data) {
// 		data = submitTwitter('djfeelofficial');
// 		console.log('home-data/twitter/twitter-djfeelofficial-click ADDED');
// 	})
// 	//[DATABASE] Function for click on ToS
// 	function submitLegal() {
// 		var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/legal/legal-click');
// 		var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/legal/clientTime');
// 		ref2.push().set(clientTime);	
// 		ref.transaction(function(currentClicks) {
// 		  return (currentClicks || 0) + 1;
// 		});      
// 	}
// 	//[DATABASE] Listening for Click on ToS Page
// 	socket.on('storeData/userProperties/'+user.uid+'/home-data/legal/legal-click', function(data) {
// 		data = submitLegal();
// 		console.log('home-data/twitter/legal-click ADDED');
// 	})
// 	//[DATABASE] Function for click on Request on Home
// 	function submitRequest() {
// 		var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/submission/request/request-click');
// 		var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/submission/request/clientTime');
// 		ref2.push().set(clientTime);	
// 		ref.transaction(function(currentClicks) {
// 		  return (currentClicks || 0) + 1;
// 		});      
// 	}
// 	//[DATABASE] Listening for Click on Request on Home
// 	socket.on('storeData/userProperties/'+user.uid+'/home-data/submission/request-click', function(data) {
// 		data = submitRequest();
// 		console.log('home-data/submission/request-click ADDED');
// 	})
// 	//[DATABASE] Function for click on Twitter Sources
// 	function submitHomeSource(name) {
// 		var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/source-list/'+name+'-list/'+name+'-twitter-click');
// 		var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/source-list/'+name+'-list/clientTime');
// 		ref2.push().set(clientTime);
// 		ref.transaction(function(currentClicks) {
// 		  return (currentClicks || 0) + 1;
// 		});      
// 	}
// 	//[DATABASE]Listening for Click on Ignition Twitter
// 	socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/ignition-twitter-click', function(data) {
// 		data = submitHomeSource('Ignition');
// 		console.log('home-data/source-list/ignition-twitter-click ADDED');
// 	})
// 	//[DATABASE]Listening for Click on TopStore Twitter
// 	socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/topstore-twitter-click', function(data) {
// 		data = submitHomeSource('TopStore');
// 		console.log('home-data/source-list/topstore-twitter-click ADDED');
// 	})
// 	//[DATABASE]Listening for Click on AppValley Twitter
// 	socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/appvalley-twitter-click', function(data) {
// 		data = submitHomeSource('AppValley');
// 		console.log('home-data/source-list/appvalley-twitter-click ADDED');
// 	})
// 	//[DATABASE]Listening for Click on Tweakbox Twitter
// 	socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/tweakbox-twitter-click', function(data) {
// 		data = submitHomeSource('Tweakbox');
// 		console.log('home-data/source-list/tweakbox-twitter-click ADDED');
// 	})
// 	//[DATABASE]Listening for Click on IOSNinja Twitter
// 	socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/iosninja-twitter-click', function(data) {
// 		data = submitHomeSource('IOSNinja');
// 		console.log('home-data/source-list/iosninja-twitter-click ADDED');
// 	})
// 	//[DATABASE]Listening for Click on CoconutX Twitter
// 	socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/coconutx-twitter-click', function(data) {
// 		data = submitHomeSource('CoconutX');
// 		socket.emit('home-data/source-list/coconutx-twitter-click', data);
// 		console.log('home-data/source-list/coconutx-twitter-click ADDED');
// 	})
// 	//[DATABASE]Listening for Click on IOSGods Twitter
// 	socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/iosgods-twitter-click', function(data) {
// 		data = submitHomeSource('IOSGods');
// 		console.log('home-data/source-list/iosgods-twitter-click ADDED');
// 	})
// 	//[DATABASE]Listening for Click on FlekStore Twitter
// 	socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/flekstore-twitter-click', function(data) {
// 		data = submitHomeSource('FlekStore');
// 		console.log('home-data/source-list/flekstore-twitter-click ADDED');
// 	})
// 	//[DATABASE]Listening for Click on Emus4u Twitter
// 	socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/emus4u-twitter-click', function(data) {
// 		data = submitHomeSource('Emus4u');
// 		console.log('home-data/source-list/emus4u-twitter-click ADDED');
// 	})
// 	//[DATABASE]Listening for Click on IOSEmus Twitter
// 	socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/iosemus-twitter-click', function(data) {
// 		data = submitHomeSource('IOSEmus');
// 		console.log('home-data/source-list/iosemus-twitter-click ADDED');
// 	})
// 	function submitReportApp(a) {
// 		var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/reportApp/app'+a+'/app'+a+"-report");
// 		var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/reportApp/app'+a+'/clientTime');
// 		ref2.push().set(clientTime);
// 		ref.transaction(function(currentClicks) {
// 		  return (currentClicks || 0) + 1;
// 		});   
// 	}
// 		socket.on('report-num', function(data) {
// 		var b = data;
// 		console.log('storeData/userProperties/'+user.uid+'/reportApp/app'+b+"-report");
// 		submitReportApp(b);
// 	});
// 	//[DATABASE] Function for click on Navbar Elements
// 	function submitnav(name) {
// 		var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/navbar-click/'+name+'/'+name+"-click");
// 		var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/navbar-click/'+name+'/clientTime');
// 		ref2.push().set(clientTime);
// 		ref.transaction(function(currentClicks) {
// 		  return (currentClicks || 0) + 1;
// 		});      
// 	}
// 	//[DATABASE] Listening for Click on Home Navbar
// 	socket.on('navbar-click/home-click', function(data) {
// 		data = submitnav('home');
// 		console.log('navbar-click/home-click ADDED');
// 	})
// 	//[DATABASE] Listening for Click on Apps Navbar
// 	socket.on('navbar-click/apps-click', function(data) {
// 		data = submitnav('apps');
// 		console.log('navbar-click/apps-click ADDED');
// 	})
// 	//[DATABASE] Listening for Click on Sources Navbar
// 	socket.on('navbar-click/stores-click', function(data) {
// 		data = submitnav('stores');
// 		console.log('navbar-click/stores-click ADDED');
// 	})
// 	//[DATABASE] Listening for Click on Updates Navbar
// 	socket.on('navbar-click/updates-click', function(data) {
// 		data = submitnav('updates');
// 		console.log('navbar-click/updates-click ADDED');
// 	})
// 	//[DATABASE] Listening for Click on Search Navbar
// 	socket.on('navbar-click/search-click', function(data) {
// 		data = submitnav('search');
// 		console.log('navbar-click/search-click ADDED');
// 	})

//     		console.log("User Logged In. (Verified Account)");
// 			//Recieving total number of apps
// 			socket.on('appData1', function(data) {
// 				var ref = firebase.database().ref('appData');
// 				ref.on('value', async function(snapshot) { 
// 					data = await snapshot.numChildren();
// 					totalNumApps = (data+1);
// 					console.log("Total Apps (verified account): "+totalNumApps);
// 					socket.emit('appData1', totalNumApps);

// 					//Recieving request to load Popular Apps
// 					async function requestPopularApps() {
// 					var a = [];
// 					var value;
// 					for (var g = 0; g < totalNumApps; g++) {
// 						a.push([g])
// 					}
// 					function running(num) {
// 						var source = firebase.database().ref().child('storeData/appGet/app-source-get-total/app'+num+'/app'+num+'-total');

// 						source.on('value', function(snapshot) {
// 							value = snapshot.val(); 
// 							a[num].push(value) 
// 							socket.emit('requestPopularApps1', a);
// 						}); 
// 					}
// 					for (var i = 1; i < totalNumApps; i++) {
// 						running(i)
// 					}
// 					}
// 					requestPopularApps();

// 					//Resetting the database
// 					// await reset();

// 				})
// 			});	
//     	} else if (user.emailVerified == 0) {
//        		console.log("User Logged In. (Not Verified Account)");
// 	    	//Recieving total number of apps
// 			socket.on('appData2', function(data) {
// 				var ref = firebase.database().ref('appData');
// 				ref.on('value', async function(snapshot) { 
// 					data = await snapshot.numChildren();
// 					totalNumApps = ((data+1)/2);
// 					console.log("Total Apps (!verified account): "+totalNumApps);
// 					socket.emit('appData2', totalNumApps);

// 					//Recieving request to load Popular Apps
// 					async function requestPopularApps() {
// 					var a = [];
// 					var value;
// 					for (var g = 0; g < totalNumApps; g++) {
// 						a.push([g])
// 					}
// 					function running(num) {
// 						var source = firebase.database().ref().child('storeData/appGet/app-source-get-total/app'+num+'/app'+num+'-total');

// 						source.on('value', function(snapshot) {
// 							value = snapshot.val(); 
// 							a[num].push(value) 
// 							socket.emit('requestPopularApps2', a);
// 						}); 
// 					}
// 					for (var i = 1; i < totalNumApps; i++) {
// 						running(i)
// 					}
// 					}
// 					requestPopularApps();

// 					//Resetting the database
// 					// await reset();

// 				})
// 			});		
// 			//Verify Email
//     		socket.on('verifyemail', function(data) { var user = firebase.auth().currentUser; user.sendEmailVerification().then(function() { console.log("sent"); }).catch(function(error) { console.log(error); socket.emit('verificationerror', error);}); });	 
//     	} 
//     } else {
//        		console.log("User Logged In. (No Account)");
// 	    	//Recieving total number of apps
// 		socket.on('appData3', function(data) {
// 			var ref = firebase.database().ref('appData');
// 			ref.on('value', async function(snapshot) { 
// 				data = await snapshot.numChildren();
// 				totalNumApps = ((data+1)/2);
// 				console.log("Total Apps (no account): "+totalNumApps);
// 				socket.emit('appData3', totalNumApps);

// 				//Recieving request to load Popular Apps
// 				async function requestPopularApps() {
// 				var a = [];
// 				var value;
// 				for (var g = 0; g < totalNumApps; g++) {
// 					a.push([g])
// 				}
// 				function running(num) {
// 					var source = firebase.database().ref().child('storeData/appGet/app-source-get-total/app'+num+'/app'+num+'-total');

// 					source.on('value', function(snapshot) {
// 						value = snapshot.val(); 
// 						a[num].push(value) 
// 						socket.emit('requestPopularApps3', a);
// 					}); 
// 				}
// 				for (var i = 1; i < totalNumApps; i++) {
// 					running(i)
// 				}
// 				}
// 				requestPopularApps();

// 				//Resetting the database
// 				// await reset();

// 			})
// 		});	


//     	}
// 	return socket.emit('checkuserstat', user);
// })

auth.onAuthStateChanged(user => {
var ref = firebase.database().ref('appData');
	if (user) {

        if (user.emailVerified == 1) {

        user.getIdTokenResult().then(idTokenResult => {
            console.log("Admin Check: "+idTokenResult.claims.admin);
            console.log(idTokenResult);

            if (idTokenResult.claims.admin == true) {
		    		var adminData = `<div class="card"><div class="accordion-item"><a href="#" class="item-content item-link"><div class="item-inner"><div class="item-tite card-header">REMOVE USERS</div></div></a><div class="accordion-item-content"><form data-search-list=".list-block-search" data-search-in=".item-title" class="searchbar searchbar-init searchbar-active" style="padding:0px;"><div class="searchbar-input"><input type="search" style="background-color:#e8e8ea;" placeholder="Search"><a href="#" class="searchbar-clear"></a></div><a href="#" class="searchbar-cancel">Cancel</a></form><div class="searchbar-overlay"></div><div class="content-block searchbar-not-found"><div class="content-block-inner">Nothing found</div></div><div class="list-block list-block-search searchbar-found media-list lazy lazy-fadeIn"><ul>       <div class="list-block media-list"><div class="card-content lazy lazy-fadeIn"><div class="block"><li class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">EMAIL</div><div style="margin-right: 20px;"><a class="tab-link" href="#view-app"><em class="button button-fill button-round" onclick="loadApp(2)" style="background: rgb(240, 241, 246); color: rgb(0, 122, 255); font-weight: bold;">REMOVE</em></a></div></div><div class="app-subtitle" style="font-size: 12px;">USER.UID</div><div class="app-subtitle" style="font-size: 12px;">NAME</div><div class="app-subtitle" style="font-size: 12px;">ACTIVITY</div><div class="app-subtitle" style="font-size: 12px;">COMMENTS</div></div></li><li class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">EMAIL</div><div style="margin-right: 20px;"><a class="tab-link" href="#view-app"><em class="button button-fill button-round" onclick="loadApp(2)" style="background: rgb(240, 241, 246); color: rgb(0, 122, 255); font-weight: bold;">REMOVE</em></a></div></div><div class="app-subtitle" style="font-size: 12px;">USER.UID</div><div class="app-subtitle" style="font-size: 12px;">NAME</div><div class="app-subtitle" style="font-size: 12px;">ACTIVITY</div><div class="app-subtitle" style="font-size: 12px;">COMMENTS</div></div></li></div>                         </div></div>                         </ul>       </div></div>  </div></div>`;
		    		socket.emit('adminData', adminData);
            }

			// socket.on('makeAdmin', async function(data) {
			// 	if (idTokenResult.claims.admin == true) {
			// 		return admin.auth().setCustomUserClaims(user.uid, {
			// 			admin: true
			// 		}).then(() => {
			// 			//Create custom claim in database
			// 			var adminCustomClaim = firebase.database().ref('storeData/userProperties/'+user.uid+'/customClaims/admin');
			//             idTokenResult.claims.admin = true;
			//             console.log("Admin Check: "+idTokenResult.claims.admin);
			//             adminCustomClaim.set(idTokenResult.claims.admin);
			// 		})
			// 	} else {
			// 		console.log("aren't allowed");
			// 	}
			// });	

			// socket.on('noAdmin', async function(data) {
			// 	if (idTokenResult.claims.admin == true) {
			// 		return admin.auth().setCustomUserClaims(user.uid, {
			// 			admin: false
			// 		}).then(() => {
			// 			var adminCustomClaim = firebase.database().ref('storeData/userProperties/'+user.uid+'/customClaims/admin');
			//             idTokenResult.claims.admin = false;
			//             console.log("Admin Check: "+idTokenResult.claims.admin);
			//             adminCustomClaim.set(idTokenResult.claims.admin);
			// 		})
			// 	} else {
			// 		console.log("aren't allowed");
			// 	}
			// });	


        })
		


    //     	if (user.email == globemail) {
    //     		var adminData = '<div class="card"><div class="accordion-item"><a href="#" class="item-content item-link"><div class="item-inner"><div class="item-tite card-header">REMOVE USERS</div></div></a><div class="accordion-item-content"><form data-search-list=".list-block-search" data-search-in=".item-title" class="searchbar searchbar-init searchbar-active" style="padding:0px;"><div class="searchbar-input"><input type="search" style="background-color:#e8e8ea;" placeholder="Search"><a href="#" class="searchbar-clear"></a></div><a href="#" class="searchbar-cancel">Cancel</a></form><div class="searchbar-overlay"></div><div class="content-block searchbar-not-found"><div class="content-block-inner">Nothing found</div></div><div class="list-block list-block-search searchbar-found media-list lazy lazy-fadeIn"><ul>       <div class="list-block media-list"><div class="card-content lazy lazy-fadeIn"><div class="block"><li class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">EMAIL</div><div style="margin-right: 20px;"><a class="tab-link" href="#view-app"><em class="button button-fill button-round" onclick="loadApp(2)" style="background: rgb(240, 241, 246); color: rgb(0, 122, 255); font-weight: bold;">REMOVE</em></a></div></div><div class="app-subtitle" style="font-size: 12px;">USER.UID</div><div class="app-subtitle" style="font-size: 12px;">NAME</div><div class="app-subtitle" style="font-size: 12px;">ACTIVITY</div><div class="app-subtitle" style="font-size: 12px;">COMMENTS</div></div></li><li class="item-content"><div class="item-media"></div><div class="item-inner"><div class="item-title-row"><div class="item-title">EMAIL</div><div style="margin-right: 20px;"><a class="tab-link" href="#view-app"><em class="button button-fill button-round" onclick="loadApp(2)" style="background: rgb(240, 241, 246); color: rgb(0, 122, 255); font-weight: bold;">REMOVE</em></a></div></div><div class="app-subtitle" style="font-size: 12px;">USER.UID</div><div class="app-subtitle" style="font-size: 12px;">NAME</div><div class="app-subtitle" style="font-size: 12px;">ACTIVITY</div><div class="app-subtitle" style="font-size: 12px;">COMMENTS</div></div></li></div>                         </div></div>                         </ul>       </div></div>  </div></div>';
				
				// socket.emit('adminAccount', globemail);
    //     		socket.emit('adminData', adminData);
    //     	}

	        console.log("user logged in (verified account)");
	        socket.on('signoutfunc', async function(data) { auth.signOut(); var sourceTime = firebase.database().ref('storeData/userProperties/'+user.uid+'/clientData/clientLogout'); sourceTime.push().set(clientTime); activeUser.remove(); });	

       		var email = firebase.database().ref('storeData/userProperties/'+user.uid+'/user-email');
	 		email.set(user.email);
			var sourceAddress = firebase.database().ref('storeData/userProperties/'+user.uid+'/clientData/clientAddress');
			var sourceTime = firebase.database().ref('storeData/userProperties/'+user.uid+'/clientData/clientTime');
			sourceAddress.push().set(clientIp);
		    sourceTime.push().set(clientTime);	
		    socket.emit('clock-time', clientTime);
			var activeUser = firebase.database().ref('storeData/activeUsers/'+user.uid);
			activeUser.push().set(user.email);


			async function runProp() {
	 		var uid = await firebase.database().ref('storeData/userProperties/'+user.uid+'/user-uid');
	 		await uid.set(user.uid);
			console.log("UID IS: "+user.uid);

        	await admin.auth().createCustomToken(user.uid)
			.then((customToken) => {
				console.log("TOKEN: "+customToken);
			})

			}

			runProp();


	        //Loading Apps and Popular Apps
			ref.on('value', async function(snapshot) { 
				data = await snapshot.numChildren();
				totalNumApps = (data+1);
				console.log("Total Apps (verified account): "+totalNumApps);
				socket.emit('appDataAccount', totalNumApps);

				//Recieving request to load Popular Apps
				async function requestPopularApps() { var a = []; var value; for (var g = 0; g < totalNumApps; g++) { a.push([g]) } function running(num) { var source = firebase.database().ref().child('storeData/appGet/app-source-get-total/app'+num+'/app'+num+'-total'); source.on('value', function(snapshot) {
						value = snapshot.val(); 
						a[num].push(value) 
						socket.emit('requestPopularAppsAccount', a);
					}); 
				}
				for (var i = 1; i < totalNumApps; i++) {
					running(i)
				}
				}
				requestPopularApps(); })

			//Getting total favlist children
			var favref = firebase.database().ref('storeData/userProperties/'+user.uid+'/favlist');
			favref.on('value', async function(snapshot) { 
				numcount = await snapshot.numChildren();	

				user.favlist = [];
		   			for (var i = 0; i < numcount; i++) {
		   				var favlist = await firebase.database().ref('storeData/userProperties/'+user.uid+'/favlist/app'+i);
							favlist.on("value", async function(snapshot) { 
								await user.favlist.push(snapshot.val());	
								if (i == numcount) {
									await console.log(user.favlist);		
									socket.emit('favlist1', user.favlist);	
								}
							}) 
					} })
			socket.on('favlist4', async function(data) {
			    var source = await firebase.database().ref().child('storeData/userProperties/'+user.uid+'/favlist/app'+(numcount-1));
			    source.remove(); });	
			socket.on('favlist5', async function(data) {
	            var ref1 = firebase.database().ref('storeData/userProperties/'+user.uid+'/favlist/app'+numcount);
	            ref1.set(data);
	            var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/favlist-activity/added/app'+data+'/clientTime');
	            ref2.push().set(clientTime); });

            //Obtaining Data
		    socket.on('disconnect', function () { console.log(socket.id+": Disconnected."); var sourceTime = firebase.database().ref('storeData/userProperties/'+user.uid+'/clientData/clientDisconnect'); sourceTime.push().set(clientTime); activeUser.remove(); });
			function clicking(name, source) { var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/appGet/app-source-click/app'+name+'/app'+name+'-'+source+'/app'+name+'-'+source+'-click'); var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/appGet/app-source-click/app'+name+'/app'+name+'-'+source+'/clientTime'); ref2.push().set(clientTime); ref.transaction(function(currentClicks) { return (currentClicks || 0) + 1; }); }
			function submitAppSourceTotal(num) { var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/appGet/app-source-get-total/app'+num+'/app'+num+'-total'); var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/appGet/app-source-get-total/app'+num+'/clientTime'); ref2.push().set(clientTime); ref.transaction(function(currentClicks) { return (currentClicks || 0) + 1; }); }
			function submitgetAppClick(num) { var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/appGet/app-get-home/app'+a+'/app'+a+'-total'); var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/appGet/app-get-home/app'+a+'/clientTime'); ref2.push().set(clientTime); ref.transaction(function(currentClicks) { return (currentClicks || 0) + 1; }); }
			socket.on('storeData/userProperties/'+user.uid+'/Number', function(data) {
			a=data;
			data = submitgetAppClick(a);
			console.log('storeData/appGet/app-get-home/app'+a+'/app'+a+'-total ADDED');
			});
			socket.on('ignition-num', function(data) {
			var b = data;
			data = clicking(b, label[0]);
			console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[0]+' ADDED');
			submitAppSourceTotal(b)
			console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
			});
			socket.on('topstore-num', function(data) {
			var b = data;
			data = clicking(b, label[1]);
			console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[1]+' ADDED');
			submitAppSourceTotal(b)
			console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
			});
			socket.on('appvalley-num', function(data) {
			var b = data;
			data = clicking(b, label[2]);
			console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[2]+' ADDED');
			submitAppSourceTotal(b)
			console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
			});
			socket.on('tweakbox-num', function(data) {
			var b = data;
			data = clicking(b, label[3]);
			console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[3]+' ADDED');
			submitAppSourceTotal(b)
			console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
			});
			socket.on('iosninja-num', function(data) {
			var b = data;
			data = clicking(b, label[4]);
			console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[4]+' ADDED');
			submitAppSourceTotal(b)
			console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
			});
			socket.on('coconutx-num', function(data) {
			var b = data;
			data = clicking(b, label[5]);
			console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[5]+' ADDED');
			submitAppSourceTotal(b)
			console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
			});
			socket.on('iosgods-num', function(data) {
			var b = data;
			data = clicking(b, label[6]);
			console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[6]+' ADDED');
			submitAppSourceTotal(b)
			console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
			});
			socket.on('flekstore-num', function(data) {
			var b = data;
			data = clicking(b, label[7]);
			console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[7]+' ADDED');
			submitAppSourceTotal(b)
			console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
			});
			socket.on('emus4u-num', function(data) {
			var b = data;
			data = clicking(b, label[8]);
			console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[8]+' ADDED');
			submitAppSourceTotal(b)
			console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
			});
			socket.on('iosemus-num', function(data) {
			var b = data;
			data = clicking(b, label[9]);
			console.log('storeData/userProperties/'+user.uid+'/app-source-click/app'+b+'/app'+b+'-'+label[9]+' ADDED');
			submitAppSourceTotal(b)
			console.log('storeData/userProperties/'+user.uid+'/app-source-get-total/app'+b+'-total ADDED');
			});
			function submitOpenCategory(a) {
			var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/category-open/'+a+'-open/'+a+'-open-clicker');
			var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/category-open/'+a+'-open/clientTime');
			ref2.push().set(clientTime);	
			ref.transaction(function(currentClicks) {
			  return (currentClicks || 0) + 1;
			});      
			}
			function submitOpenSource(a) {
			var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/source-open/'+a+'-open/'+a+'-open-clicker');
			var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/source-open/'+a+'-open/clientTime');
			ref2.push().set(clientTime);
			ref.transaction(function(currentClicks) {
			return (currentClicks || 0) + 1;
			});      
			}
			socket.on('storeData/userProperties/'+user.uid+'/category-open/Jailbreak-open', function(data) {
			console.log('storeData/category-open/Jailbreak-open ADDED');
			data = submitOpenCategory('Jailbreak');
			});		
			socket.on('storeData/userProperties/'+user.uid+'/category-open/Tweaked-open', function(data) {
			console.log('storeData/category-open/Tweaked-open ADDED');
			data = submitOpenCategory('Tweaked');
			});	
			socket.on('storeData/userProperties/'+user.uid+'/category-open/Entertainment-open', function(data) {
			console.log('storeData/category-open/Entertainment-open ADDED');
			data = submitOpenCategory('Entertainment');
			});			
			socket.on('storeData/userProperties/'+user.uid+'/category-open/Emulators-open', function(data) {
			console.log('storeData/category-open/Emulators-open ADDED');
			data = submitOpenCategory('Emulators');
			});		
			socket.on('storeData/userProperties/'+user.uid+'/category-open/Games-open', function(data) {
			console.log('storeData/category-open/Games-open ADDED');
			data = submitOpenCategory('Games');
			});			
			socket.on('storeData/userProperties/'+user.uid+'/source-open/Ignition-open', function(data) {
			console.log('storeData/source-open/Ignition-open ADDED');
			data = submitOpenSource('Ignition');
			});		
			socket.on('storeData/userProperties/'+user.uid+'/source-open/TopStore-open', function(data) {
			console.log('storeData/source-open/TopStore-open ADDED');
			data = submitOpenSource('TopStore');
			});		
			socket.on('storeData/userProperties/'+user.uid+'/source-open/AppValley-open', function(data) {
			console.log('storeData/source-open/AppValley-open ADDED');
			data = submitOpenSource('AppValley');
			});		
			socket.on('storeData/userProperties/'+user.uid+'/source-open/Tweakbox-open', function(data) {
			console.log('storeData/source-open/Tweakbox-open ADDED');
			data = submitOpenSource('Tweakbox');
			});		
			socket.on('storeData/userProperties/'+user.uid+'/source-open/IOSNinja-open', function(data) {
			console.log('storeData/source-open/IOSNinja-open ADDED');
			data = submitOpenSource('IOSNinja');
			});		
			socket.on('storeData/userProperties/'+user.uid+'/source-open/CoconutX-open', function(data) {
			console.log('storeData/source-open/CoconutX-open ADDED');
			data = submitOpenSource('CoconutX');
			});		
			socket.on('storeData/userProperties/'+user.uid+'/source-open/iOSGods-open', function(data) {
			console.log('storeData/source-open/iOSGods-open ADDED');
			data = submitOpenSource('iOSGods');
			});		
			socket.on('storeData/userProperties/'+user.uid+'/source-open/Flekstore-open', function(data) {
			console.log('storeData/source-open/Flekstore-open ADDED');
			data = submitOpenSource('Flekstore');
			});		
			socket.on('storeData/userProperties/'+user.uid+'/source-open/Emus4-open', function(data) {
			console.log('storeData/source-open/Emus4-open ADDED');
			data = submitOpenSource('Emus4');
			});		
			socket.on('storeData/userProperties/'+user.uid+'/source-open/Emus-open', function(data) {
			console.log('storeData/source-open/Emus-open ADDED');
			data = submitOpenSource('Emus');
			});	
			function countRefresh() {
			var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/refresh/refresh-counter');
			var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/refresh/clientTime');
			ref2.push().set(clientTime);
			ref.transaction(function(currentClicks) {
			  return (currentClicks || 0) + 1;
			});      
			}
			function countView() {
			var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/view/view-counter/');
			var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/view/clientTime');
			ref2.push().set(clientTime);
			ref.transaction(function(currentClicks) {
			  return (currentClicks || 0) + 1;
			});      
			}
			socket.on('storeData/userProperties/'+user.uid+'/refresh-counter', function(data) {
			countRefresh();
			})
			socket.on('storeData/userProperties/'+user.uid+'/view-counter', function(data) {
			if (viewcounter2 == 0) {
			countView();
			viewcounter2 = 1;
			}
			})
			function submitTwitter(name) {
			var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/twitter/twitter-'+name+'/twitter-'+name+'-click');
			var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/twitter/twitter-'+name+'/clientTime');
			ref2.push().set(clientTime);
			ref.transaction(function(currentClicks) {
			  return (currentClicks || 0) + 1;
			});      
			}
			socket.on('storeData/userProperties/'+user.uid+'/home-data/twitter/twitter-bionik-click', function(data) {
			data = submitTwitter('bionik');
			console.log('home-data/twitter/twitter-bionik-click ADDED');
			})
			socket.on('storeData/userProperties/'+user.uid+'/home-data/twitter/twitter-djfeelofficial-click', function(data) {
			data = submitTwitter('djfeelofficial');
			console.log('home-data/twitter/twitter-djfeelofficial-click ADDED');
			})
			function submitLegal() {
			var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/legal/legal-click');
			var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/legal/clientTime');
			ref2.push().set(clientTime);	
			ref.transaction(function(currentClicks) {
			  return (currentClicks || 0) + 1;
			});      
			}
			socket.on('storeData/userProperties/'+user.uid+'/home-data/legal/legal-click', function(data) {
			data = submitLegal();
			console.log('home-data/twitter/legal-click ADDED');
			})
			function submitRequest() {
			var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/submission/request/request-click');
			var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/submission/request/clientTime');
			ref2.push().set(clientTime);	
			ref.transaction(function(currentClicks) {
			  return (currentClicks || 0) + 1;
			});      
			}
			socket.on('storeData/userProperties/'+user.uid+'/home-data/submission/request-click', function(data) {
			data = submitRequest();
			console.log('home-data/submission/request-click ADDED');
			})
			function submitHomeSource(name) {
			var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/source-list/'+name+'-list/'+name+'-twitter-click');
			var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/home-data/source-list/'+name+'-list/clientTime');
			ref2.push().set(clientTime);
			ref.transaction(function(currentClicks) {
			  return (currentClicks || 0) + 1;
			});      
			}
			socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/ignition-twitter-click', function(data) {
			data = submitHomeSource('Ignition');
			console.log('home-data/source-list/ignition-twitter-click ADDED');
			})
			socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/topstore-twitter-click', function(data) {
			data = submitHomeSource('TopStore');
			console.log('home-data/source-list/topstore-twitter-click ADDED');
			})
			socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/appvalley-twitter-click', function(data) {
			data = submitHomeSource('AppValley');
			console.log('home-data/source-list/appvalley-twitter-click ADDED');
			})
			socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/tweakbox-twitter-click', function(data) {
			data = submitHomeSource('Tweakbox');
			console.log('home-data/source-list/tweakbox-twitter-click ADDED');
			})
			socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/iosninja-twitter-click', function(data) {
			data = submitHomeSource('IOSNinja');
			console.log('home-data/source-list/iosninja-twitter-click ADDED');
			})
			socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/coconutx-twitter-click', function(data) {
			data = submitHomeSource('CoconutX');
			socket.emit('home-data/source-list/coconutx-twitter-click', data);
			console.log('home-data/source-list/coconutx-twitter-click ADDED');
			})
			socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/iosgods-twitter-click', function(data) {
			data = submitHomeSource('IOSGods');
			console.log('home-data/source-list/iosgods-twitter-click ADDED');
			})
			socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/flekstore-twitter-click', function(data) {
			data = submitHomeSource('FlekStore');
			console.log('home-data/source-list/flekstore-twitter-click ADDED');
			})
			socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/emus4u-twitter-click', function(data) {
			data = submitHomeSource('Emus4u');
			console.log('home-data/source-list/emus4u-twitter-click ADDED');
			})
			socket.on('storeData/userProperties/'+user.uid+'/home-data/source-list/iosemus-twitter-click', function(data) {
			data = submitHomeSource('IOSEmus');
			console.log('home-data/source-list/iosemus-twitter-click ADDED');
			})
			function submitReportApp(a) {
			var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/reportApp/app'+a+'/app'+a+"-report");
			var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/reportApp/app'+a+'/clientTime');
			ref2.push().set(clientTime);
			ref.transaction(function(currentClicks) {
			  return (currentClicks || 0) + 1;
			});   
			}
			socket.on('report-num', function(data) {
			var b = data;
			console.log('storeData/userProperties/'+user.uid+'/reportApp/app'+b+"-report");
			submitReportApp(b);
			});
			function submitnav(name) {
			var ref = firebase.database().ref('storeData/userProperties/'+user.uid+'/navbar-click/'+name+'/'+name+"-click");
			var ref2 = firebase.database().ref('storeData/userProperties/'+user.uid+'/navbar-click/'+name+'/clientTime');
			ref2.push().set(clientTime);
			ref.transaction(function(currentClicks) {
			return (currentClicks || 0) + 1;
			});      
			}
			socket.on('navbar-click/home-click', function(data) {
			data = submitnav('home');
			console.log('navbar-click/home-click ADDED');
			})
			socket.on('navbar-click/apps-click', function(data) {
			data = submitnav('apps');
			console.log('navbar-click/apps-click ADDED');
			})
			socket.on('navbar-click/stores-click', function(data) {
			data = submitnav('stores');
			console.log('navbar-click/stores-click ADDED');
			})
			socket.on('navbar-click/updates-click', function(data) {
			data = submitnav('updates');
			console.log('navbar-click/updates-click ADDED');
			})
			socket.on('navbar-click/search-click', function(data) {
			data = submitnav('search');
			console.log('navbar-click/search-click ADDED');
			})

        } else if (user.emailVerified == 0) {
	        console.log("user logged in (!verified account)");
	        socket.on('signoutfunc', async function(data) { auth.signOut() });	
    		socket.on('verifyemail', function(data) { var user = firebase.auth().currentUser; user.sendEmailVerification().then(function() { console.log("sent"); }).catch(function(error) { console.log(error); socket.emit('verificationerror', error);}); });	 

        user.getIdTokenResult().then(idTokenResult => {
            console.log("Admin Check: "+idTokenResult.claims.admin);
        })

	        //Loading Apps and Popular Apps
			ref.on('value', async function(snapshot) { 
				data = await snapshot.numChildren();
				totalNumApps = ((data+1)/2);
				console.log("Total Apps (!verified account): "+totalNumApps);
				socket.emit('appDataNoAccount', totalNumApps);

				//Recieving request to load Popular Apps
				async function requestPopularApps() {
				var a = [];
				var value;
				for (var g = 0; g < totalNumApps; g++) {
					a.push([g])
				}
				function running(num) {
					var source = firebase.database().ref().child('storeData/appGet/app-source-get-total/app'+num+'/app'+num+'-total');

					source.on('value', function(snapshot) {
						value = snapshot.val(); 
						a[num].push(value) 
						socket.emit('requestPopularAppsNoAccount', a);
					}); 
				}
				for (var i = 1; i < totalNumApps; i++) {
					running(i)
				}
				}
				requestPopularApps(); })

        }

	} else {
		console.log("user logged out");

			async function runProp() {
	 		var uid = await firebase.database().ref('storeData/userProperties/'+user.uid+'/user-uid');
	 		await uid.set(user.uid);
			console.log("UID IS: "+user.uid);

        	await admin.auth().createCustomToken(user.uid)
			.then((customToken) => {
				console.log("TOKEN: "+customToken);
			})

			}

			runProp();


        //Loading Apps and Popular Apps
		ref.on('value', async function(snapshot) { 
			data = await snapshot.numChildren();
			totalNumApps = ((data+1)/2);
			console.log("Total Apps (no account): "+totalNumApps);
			socket.emit('appDataNoAccount', totalNumApps);

			//Recieving request to load Popular Apps
			async function requestPopularApps() {
			var a = [];
			var value;
			for (var g = 0; g < totalNumApps; g++) {
				a.push([g])
			}
			function running(num) {
				var source = firebase.database().ref().child('storeData/appGet/app-source-get-total/app'+num+'/app'+num+'-total');

				source.on('value', function(snapshot) {
					value = snapshot.val(); 
					a[num].push(value) 
					socket.emit('requestPopularAppsNoAccount', a);
				}); 
			}
			for (var i = 1; i < totalNumApps; i++) {
				running(i)
			}
			}
			requestPopularApps(); })

	}
return socket.emit('checkuserstat', user);
})





// console.log("User Logged In. (No Account)");
	    	//Recieving total number of apps
		// socket.on('appData3', function(data) {
		// 	var ref = firebase.database().ref('appData');
		// 	ref.on('value', async function(snapshot) { 
		// 		data = await snapshot.numChildren();
		// 		totalNumApps = ((data+1)/2);
		// 		console.log("Total Apps (no account): "+totalNumApps);
		// 		socket.emit('appData3', totalNumApps);

		// 		//Recieving request to load Popular Apps
		// 		async function requestPopularApps() {
		// 		var a = [];
		// 		var value;
		// 		for (var g = 0; g < totalNumApps; g++) {
		// 			a.push([g])
		// 		}
		// 		function running(num) {
		// 			var source = firebase.database().ref().child('storeData/appGet/app-source-get-total/app'+num+'/app'+num+'-total');

		// 			source.on('value', function(snapshot) {
		// 				value = snapshot.val(); 
		// 				a[num].push(value) 
		// 				socket.emit('requestPopularApps3', a);
		// 			}); 
		// 		}
		// 		for (var i = 1; i < totalNumApps; i++) {
		// 			running(i)
		// 		}
		// 		}
		// 		requestPopularApps();

		// 		//Resetting the database
		// 		// await reset();

		// 	})
		// });	


//Submitting the 'SIGN IN' button in non-sign in
socket.on('loginsignin', async function(data) {
	var a = 1; function myError(error) { console.log('signIn error: ', error); socket.emit('signinuserinvalid', error); a = 0; }
	var usercred = data; await auth.signInWithEmailAndPassword(usercred[0], usercred[1]).catch((error) => myError(error))
	if (a == 1) { socket.emit('signinuservalid', 'value'); }    
}); 
//Submitting the 'SIGN UP' button in non-sign in
socket.on('signindata', async function(data) {
	var a = 1; function myError(error) { console.log('signIn error: ', error); socket.emit('userinvalid', error); a = 0; }
	var usercred = data; await auth.createUserWithEmailAndPassword(usercred[0], usercred[1]).catch((error) => myError(error))
	if (a == 1) { socket.emit('uservalid', 'value'); var user = firebase.auth().currentUser; user.sendEmailVerification().then(function() { console.log("sent"); }).catch(function(error) { console.log(error); }); }    
}); 




		//Recieving request to load Popular Apps
		socket.on('statusignition', async function(data) {
			var source = firebase.database().ref('signedData/Ignition-signed');
			source.on('value', function(snapshot) {
				value = snapshot.val(); 
				socket.emit('statusignition', value);
			}); 

		});	
		socket.on('statustopstore', async function(data) {
			var source = firebase.database().ref('signedData/TopStore-signed');
			source.on('value', function(snapshot) {
				value = snapshot.val(); 
				socket.emit('statustopstore', value);
			}); 

		});	
		socket.on('statusappvalley', async function(data) {
			var source = firebase.database().ref('signedData/AppValley-signed');
			source.on('value', function(snapshot) {
				value = snapshot.val(); 
				socket.emit('statusappvalley', value);
			}); 

		});	

		socket.on('statustweakbox', async function(data) {
			var source = firebase.database().ref('signedData/Tweakbox-signed');
			source.on('value', function(snapshot) {
				value = snapshot.val(); 
				socket.emit('statustweakbox', value);
			}); 
		});	

		socket.on('statusiosninja', async function(data) {
			var source = firebase.database().ref('signedData/IOSNinja-signed');
			source.on('value', function(snapshot) {
				value = snapshot.val(); 
				socket.emit('statusiosninja', value);
			}); 
		});	

		socket.on('statuscoconutx', async function(data) {
			var source = firebase.database().ref('signedData/CoconutX-signed');
			source.on('value', function(snapshot) {
				value = snapshot.val(); 
				socket.emit('statuscoconutx', value);
			}); 
		});	

		socket.on('statusflekstore', async function(data) {
			var source = firebase.database().ref('signedData/FlekStore-signed');
			source.on('value', function(snapshot) {
				value = snapshot.val(); 
				socket.emit('statusflekstore', value);
			}); 
		});	

		socket.on('statusiosgods', async function(data) {
			var source = firebase.database().ref('signedData/IOSGods-signed');
			source.on('value', function(snapshot) {
				value = snapshot.val(); 
				socket.emit('statusiosgods', value);
			}); 
		});	

		socket.on('statusemus4u', async function(data) {
			var source = firebase.database().ref('signedData/Emus4u-signed');
			source.on('value', function(snapshot) {
				value = snapshot.val(); 
				socket.emit('statusemus4u', value);
			}); 
		});	


		socket.on('statusiosemus', async function(data) {
			var source = firebase.database().ref('signedData/IOSEmus-signed');
			source.on('value', function(snapshot) {
				value = snapshot.val(); 
				socket.emit('statusiosemus', value);
			}); 
		});	


	//[DATABASE] Function for click on Navbar Elements
	function submitnav(name) {
		var ref = firebase.database().ref('storeData/navbar-click/'+name+'/'+name+"-click");
		var ref2 = firebase.database().ref('storeData/navbar-click/'+name+'/clientTime');
		ref2.push().set(clientTime);	
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}
	//[DATABASE] Listening for Click on Home Navbar
	socket.on('navbar-click/home-click', function(data) {
		data = submitnav('home');
		socket.emit('navbar-click/home-click', data);
		console.log('navbar-click/home-click ADDED');
	})
	//[DATABASE] Listening for Click on Apps Navbar
	socket.on('navbar-click/apps-click', function(data) {
		data = submitnav('apps');
		socket.emit('navbar-click/apps-click', data);
		console.log('navbar-click/apps-click ADDED');
	})
	//[DATABASE] Listening for Click on Sources Navbar
	socket.on('navbar-click/stores-click', function(data) {
		data = submitnav('stores');
		socket.emit('navbar-click/stores-click', data);
		console.log('navbar-click/stores-click ADDED');
	})
	//[DATABASE] Listening for Click on Updates Navbar
	socket.on('navbar-click/updates-click', function(data) {
		data = submitnav('updates');
		socket.emit('navbar-click/updates-click', data);
		console.log('navbar-click/updates-click ADDED');
	})
	//[DATABASE] Listening for Click on Search Navbar
	socket.on('navbar-click/search-click', function(data) {
		data = submitnav('search');
		socket.emit('navbar-click/search-click', data);
		console.log('navbar-click/search-click ADDED');
	})
	//[DATABASE] Function for click on Twitter Name
	function submitTwitter(name) {
		var ref = firebase.database().ref('storeData/home-data/twitter/twitter-'+name+'/twitter-'+name+"-click");
		var ref2 = firebase.database().ref('storeData/home-data/twitter/twitter-'+name+'/clientTime');
		ref2.push().set(clientTime);	
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}

	//[DATABASE] Listening for Click on Bionik Twitter
	socket.on('home-data/twitter/twitter-bionik-click', function(data) {
		data = submitTwitter('bionik');
		socket.emit('home-data/twitter/twitter-bionik-click', data);
		console.log('home-data/twitter/twitter-bionik-click ADDED');
	})
	//[DATABASE] Listening for Click on DJFeelOfficial Twitter
	socket.on('home-data/twitter/twitter-djfeelofficial-click', function(data) {
		data = submitTwitter('djfeelofficial');
		socket.emit('home-data/twitter/twitter-djfeelofficial-click', data);
		console.log('home-data/twitter/twitter-djfeelofficial-click ADDED');
	})
	//[DATABASE] Function for click on ToS
	function submitLegal() {
		var ref = firebase.database().ref('storeData/home-data/legal/legal-click');
		var ref2 = firebase.database().ref('storeData/home-data/legal/clientTime');
		ref2.push().set(clientTime);	
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}
	//[DATABASE] Listening for Click on ToS Page
	socket.on('home-data/legal/legal-click', function(data) {
		data = submitLegal();
		socket.emit('home-data/legal/legal-click', data);
		console.log('home-data/twitter/legal-click ADDED');
	})
	//[DATABASE] Function for click on Request on Home
	function submitRequest() {
		var ref = firebase.database().ref('storeData/home-data/submission/request/request-click');
		var ref2 = firebase.database().ref('storeData/home-data/submission/request/clientTime');
		ref2.push().set(clientTime);	
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}
	//[DATABASE] Listening for Click on Request on Home
	socket.on('home-data/submission/request-click', function(data) {
		data = submitRequest();
		socket.emit('home-data/submission/request-click', data);
		console.log('home-data/submission/request-click ADDED');
	})
	//[DATABASE] Function for click on Twitter Sources
	function submitHomeSource(name) {
		var ref = firebase.database().ref('storeData/home-data/source-list/'+name+'-list/'+name+'-twitter-click');
		var ref2 = firebase.database().ref('storeData/home-data/source-list/'+name+'-list/clientTime');
		ref2.push().set(clientTime);	
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}
	//[DATABASE]Listening for Click on Ignition Twitter
	socket.on('home-data/source-list/ignition-twitter-click', function(data) {
		data = submitHomeSource('Ignition');
		socket.emit('home-data/source-list/ignition-twitter-click', data);
		console.log('home-data/source-list/ignition-twitter-click ADDED');
	})
	//[DATABASE]Listening for Click on TopStore Twitter
	socket.on('home-data/source-list/topstore-twitter-click', function(data) {
		data = submitHomeSource('TopStore');
		socket.emit('home-data/source-list/topstore-twitter-click', data);
		console.log('home-data/source-list/topstore-twitter-click ADDED');
	})
	//[DATABASE]Listening for Click on AppValley Twitter
	socket.on('home-data/source-list/appvalley-twitter-click', function(data) {
		data = submitHomeSource('AppValley');
		socket.emit('home-data/source-list/appvalley-twitter-click', data);
		console.log('home-data/source-list/appvalley-twitter-click ADDED');
	})
	//[DATABASE]Listening for Click on Tweakbox Twitter
	socket.on('home-data/source-list/tweakbox-twitter-click', function(data) {
		data = submitHomeSource('Tweakbox');
		socket.emit('home-data/source-list/tweakbox-twitter-click', data);
		console.log('home-data/source-list/tweakbox-twitter-click ADDED');
	})
	//[DATABASE]Listening for Click on IOSNinja Twitter
	socket.on('home-data/source-list/iosninja-twitter-click', function(data) {
		data = submitHomeSource('IOSNinja');
		socket.emit('home-data/source-list/iosninja-twitter-click', data);
		console.log('home-data/source-list/iosninja-twitter-click ADDED');
	})
	//[DATABASE]Listening for Click on CoconutX Twitter
	socket.on('home-data/source-list/coconutx-twitter-click', function(data) {
		data = submitHomeSource('CoconutX');
		socket.emit('home-data/source-list/coconutx-twitter-click', data);
		console.log('home-data/source-list/coconutx-twitter-click ADDED');
	})
	//[DATABASE]Listening for Click on IOSGods Twitter
	socket.on('home-data/source-list/iosgods-twitter-click', function(data) {
		data = submitHomeSource('IOSGods');
		socket.emit('home-data/source-list/iosgods-twitter-click', data);
		console.log('home-data/source-list/iosgods-twitter-click ADDED');
	})
	//[DATABASE]Listening for Click on FlekStore Twitter
	socket.on('home-data/source-list/flekstore-twitter-click', function(data) {
		data = submitHomeSource('FlekStore');
		socket.emit('home-data/source-list/flekstore-twitter-click', data);
		console.log('home-data/source-list/flekstore-twitter-click ADDED');
	})
	//[DATABASE]Listening for Click on Emus4u Twitter
	socket.on('home-data/source-list/emus4u-twitter-click', function(data) {
		data = submitHomeSource('Emus4u');
		socket.emit('home-data/source-list/emus4u-twitter-click', data);
		console.log('home-data/source-list/emus4u-twitter-click ADDED');
	})
	//[DATABASE]Listening for Click on IOSEmus Twitter
	socket.on('home-data/source-list/iosemus-twitter-click', function(data) {
		data = submitHomeSource('IOSEmus');
		socket.emit('home-data/source-list/iosemus-twitter-click', data);
		console.log('home-data/source-list/iosemus-twitter-click ADDED');
	})

	//[DATABASE] Adding to App Click when clicking on Sources (Singular Source Click)
	function clicking(name, source) {
		var ref = firebase.database().ref('storeData/appGet/app-source-click/app'+name+'/app'+name+'-'+source+'/app'+name+'-'+source+'-click');
		var ref2 = firebase.database().ref('storeData/appGet/app-source-click/app'+name+'/app'+name+'-'+source+'/clientTime');
		ref2.push().set(clientTime);	
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});
	}
	//[DATABASE] Adding to Total App Click when clicking on Sources (Total Source Clicks)
	function submitAppSourceTotal(num) {
		var ref = firebase.database().ref('storeData/appGet/app-source-get-total/app'+num+'/app'+num+'-total');
		var ref2 = firebase.database().ref('storeData/appGet/app-source-get-total/app'+num+'/clientTime');
		ref2.push().set(clientTime);	
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}
	//[DATABASE] Adding to Total App Click when clicking on Homescreen
	function submitgetAppClick(num) {
		var ref = firebase.database().ref('storeData/appGet/app-get-home/app'+num+'/app'+num+'-total');
		var ref2 = firebase.database().ref('storeData/appGet/app-get-home/app'+num+'/clientTime');
		ref2.push().set(clientTime);	
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}
	//[DATABASE] Function that adds refresh counter
	function countRefresh() {
		var ref = firebase.database().ref('storeData/refresh/refresh-counter');
		var ref2 = firebase.database().ref('storeData/refresh/clientTime');
		ref2.push().set(clientTime);
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}
	//[DATABASE] Function that adds view counter
	function countView() {
		var ref = firebase.database().ref('storeData/view/view-counter');
		var ref2 = firebase.database().ref('storeData/view/clientTime');
		ref2.push().set(clientTime);
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}
	//[DATABASE] Adding to Total Click on specific Category OPEN button
	function submitOpenCategory(a) {
		var ref = firebase.database().ref('storeData/category-open/'+a+'-open/'+a+'-open-clicker');
		var ref2 = firebase.database().ref('storeData/category-open/'+a+'-open/clientTime');
		ref2.push().set(clientTime);
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}
	//[DATABASE] Adding to Total Click on specific Source OPEN button
	function submitOpenSource(a) {
		var ref = firebase.database().ref('storeData/source-open/'+a+'-open/'+a+'-open-clicker');
		var ref2 = firebase.database().ref('storeData/source-open/'+a+'-open/clientTime');
		ref2.push().set(clientTime);
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}

	function submitReportApp(a) {
		var ref = firebase.database().ref('storeData/reportApp/app'+a+'/app'+a+'-report');
		var ref2 = firebase.database().ref('storeData/reportApp/app'+a+'/clientTime');
		ref2.push().set(clientTime);
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});   
	}
	//[DATABASE] Listening for refresh click
		socket.on('storeData/refresh-counter', function(data) {
			countRefresh();
			socket.emit('storeData/refresh-counter', data);
		})
	//[DATABASE] Listening for view click
	socket.on('storeData/view-counter', function(data) {
		if (viewcounter == 0) {
			countView();
			socket.emit('storeData/view-counter', data);
			viewcounter = 1;
		}
	})

	//Loading Apps Information for Create Tag
	socket.on('appNumber', function(data) {
		a = data;

		//Listening for App Name Request
		socket.on('App'+a+'_Name_View', function(data) {
			var something;
			var firebaseAppName = firebase.database().ref().child("appData/app"+a+"/Name");
			firebaseAppName.on('value', function(snapshot) { 
				something = snapshot.val(); 
				data = something; 
				socket.emit('App'+a+'_Name_View', data); 
			});
		});
		//Listening for App Image Request
		socket.on('App'+a+'_Image_View', function(data) {
			var something;
			var firebaseAppImage = firebase.database().ref().child("appData/app"+a+"/Image");
			firebaseAppImage.on('value', function(snapshot) { 
				something = snapshot.val(); 
				data = something; 
				socket.emit('App'+a+'_Image_View', data); 
			});
		});
		//Listening for App Category Request
		socket.on('App'+a+'_Category_View', function(data) {
			var something;
			var firebaseAppCategory = firebase.database().ref().child("appData/app"+a+"/Category");
			firebaseAppCategory.on('value', function(snapshot) { 
				something = snapshot.val(); 
				data = something; 
				socket.emit('App'+a+'_Category_View', data); 
			});
		});
	});

	//Loading App Information
	socket.on('Number', function(data) {
		a=data;

		socket.emit('Number', data); 
			//Listening for App Image Request
			socket.on('App'+a+'_Image', function(data) {
				var something;
				var firebaseAppImage = firebase.database().ref().child("appData/app"+a+"/Image");
				firebaseAppImage.on('value', function(snapshot) { 
					something = snapshot.val(); 
					data = something; 
					// console.log("App"+a+" Image: "+data); 
					socket.emit('App'+a+'_Image', data); 
				});
			});
			//Listening for App Name Request
			socket.on('App'+a+'_Name', function(data) {
				var something;
				var firebaseAppName = firebase.database().ref().child("appData/app"+a+"/Name");
				firebaseAppName.on('value', function(snapshot) { 
					something = snapshot.val(); 
					data = something; 
					// console.log("App"+a+" Name: "+data); 
					socket.emit('App'+a+'_Name', data); 
				});
			});
			//Listening for App Description Request
			socket.on('App'+a+'_Description', function(data) {
				var something;
				var firebaseAppDescription = firebase.database().ref().child("appData/app"+a+"/Description");
				firebaseAppDescription.on('value', function(snapshot) { 
					something = snapshot.val(); 
					data = something; 
					// console.log("App"+a+" Description: "+data); 
					socket.emit('App'+a+'_Description', data); 
				});
			});
			//Listening for App Developer Request
			socket.on('App'+a+'_Developer', function(data) {
				var something;
				var firebaseAppDeveloper = firebase.database().ref().child("appData/app"+a+"/Developer");
				firebaseAppDeveloper.on('value', function(snapshot) { 
					something = snapshot.val(); 
					data = something; 
					// console.log("App"+a+" Developer: "+data); 
					socket.emit('App'+a+'_Developer', data); 
				});
			});
			//Listening for App Version Request
			socket.on('App'+a+'_Version', function(data) {
				var something;
				var firebaseAppVersion = firebase.database().ref().child("appData/app"+a+"/Version");
				firebaseAppVersion.on('value', function(snapshot) { 
					something = snapshot.val(); 
					data = something; 
					// console.log("App"+a+" Version: "+data); 
					socket.emit('App'+a+'_Version', data); 
				});
			});
			//Listening for App Category Request
			socket.on('App'+a+'_Category', function(data) {
				var something;
				var firebaseAppCategory = firebase.database().ref().child("appData/app"+a+"/Category");
				firebaseAppCategory.on('value', function(snapshot) { 
					something = snapshot.val(); 
					data = something; 
					// console.log("App"+a+" Category: "+data); 
					socket.emit('App'+a+'_Category', data); 
				});
			});
			//Listening for App Size Request (Specific App)
			socket.on('App'+a+'_Size', function(data) {
				var something;
				var firebaseAppSize = firebase.database().ref().child("appData/app"+a+"/Size");
				firebaseAppSize.on('value', function(snapshot) { 
					something = snapshot.val(); 
					data = something; 
					// console.log("App"+a+" Size: "+data); 
					socket.emit('App'+a+'_Size', data); 
				});
			});

			//Source Array Variables for Assigning Sources to Desired App
			var firebaseAppIgnition, firebaseAppTopStore, firebaseAppAppValley, firebaseAppTweakbox, firebaseAppIOSNinja, firebaseAppCoconutX, firebaseAppIOSGods, firebaseAppEmus, firebaseAppEmus4, firebaseAppFlekstore
			var myotherArray = [firebaseAppIgnition, firebaseAppTopStore, firebaseAppAppValley, firebaseAppTweakbox, firebaseAppIOSNinja, firebaseAppCoconutX, firebaseAppIOSGods, firebaseAppEmus, firebaseAppEmus4, firebaseAppFlekstore];

			//Loading source values
			function sourceLoad(value) {
				socket.on('App'+a+'_'+label[value]+'', function(data) {
					var something;
					myotherArray[value] = firebase.database().ref().child("appData/app"+a+"/"+label[value]+"");
					myotherArray[value].on('value', function(snapshot) { 
						something = snapshot.val(); 
						data = something; 
						// console.log("App"+a+" "+label[value]+": "+data); 
						socket.emit('App'+a+'_'+label[value]+'', data); 
					});
				});	
			}
			for (var value = 0; value < 10; value++) {
				sourceLoad(value);
			}

			data = submitgetAppClick(a);
			console.log('storeData/appGet/app-get-home/app'+a+'-total ADDED');

			//Listening for report app number
			socket.on('numkey', function(data) {
				socket.emit('numkey', data);
			});
	});

	socket.on('report-num', function(data) {
		var b = data;
		console.log('storeData/reportApp/app'+b+"-report ADDED");
		submitReportApp(b);
	});

	var label = ["Ignition", "TopStore", "AppValley", "Tweakbox", "IOSNinja", "CoconutX", "iOSGods", "Flekstore", "Emus4", "Emus"];
	socket.on('ignition-num', function(data) {
		var b = data;
		data = clicking(b, label[0]);
		console.log('storeData/app-source-click/app'+b+'/app'+b+'-'+label[0]+' ADDED');
		submitAppSourceTotal(b)
		console.log('storeData/app-source-get-total/app'+b+'-total ADDED');
	});
	socket.on('topstore-num', function(data) {
		var b = data;
		data = clicking(b, label[1]);
		console.log('storeData/app-source-click/app'+b+'/app'+b+'-'+label[1]+' ADDED');
		submitAppSourceTotal(b)
		console.log('storeData/app-source-get-total/app'+b+'-total ADDED');
	});
	socket.on('appvalley-num', function(data) {
		var b = data;
		data = clicking(b, label[2]);
		console.log('storeData/app-source-click/app'+b+'/app'+b+'-'+label[2]+' ADDED');
		submitAppSourceTotal(b)
		console.log('storeData/app-source-get-total/app'+b+'-total ADDED');
	});
	socket.on('tweakbox-num', function(data) {
		var b = data;
		data = clicking(b, label[3]);
		console.log('storeData/app-source-click/app'+b+'/app'+b+'-'+label[3]+' ADDED');
		submitAppSourceTotal(b)
		console.log('storeData/app-source-get-total/app'+b+'-total ADDED');
	});
	socket.on('iosninja-num', function(data) {
		var b = data;
		data = clicking(b, label[4]);
		console.log('storeData/app-source-click/app'+b+'/app'+b+'-'+label[4]+' ADDED');
		submitAppSourceTotal(b)
		console.log('storeData/app-source-get-total/app'+b+'-total ADDED');
	});
	socket.on('coconutx-num', function(data) {
		var b = data;
		data = clicking(b, label[5]);
		console.log('storeData/app-source-click/app'+b+'/app'+b+'-'+label[5]+' ADDED');
		submitAppSourceTotal(b)
		console.log('storeData/app-source-get-total/app'+b+'-total ADDED');
	});
	socket.on('iosgods-num', function(data) {
		var b = data;
		data = clicking(b, label[6]);
		console.log('storeData/app-source-click/app'+b+'/app'+b+'-'+label[6]+' ADDED');
		submitAppSourceTotal(b)
		console.log('storeData/app-source-get-total/app'+b+'-total ADDED');
	});
	socket.on('flekstore-num', function(data) {
		var b = data;
		data = clicking(b, label[7]);
		console.log('storeData/app-source-click/app'+b+'/app'+b+'-'+label[7]+' ADDED');
		submitAppSourceTotal(b)
		console.log('storeData/app-source-get-total/app'+b+'-total ADDED');
	});
	socket.on('emus4u-num', function(data) {
		var b = data;
		data = clicking(b, label[8]);
		console.log('storeData/app-source-click/app'+b+'/app'+b+'-'+label[8]+' ADDED');
		submitAppSourceTotal(b)
		console.log('storeData/app-source-get-total/app'+b+'-total ADDED');
	});
	socket.on('iosemus-num', function(data) {
		var b = data;
		data = clicking(b, label[9]);
		console.log('storeData/app-source-click/app'+b+'/app'+b+'-'+label[9]+' ADDED');
		submitAppSourceTotal(b)
		console.log('storeData/app-source-get-total/app'+b+'-total ADDED');
	});

	//[DATABASE] Listening to if clicked on Jailbreak open category on apps page
	socket.on('storeData/category-open/Jailbreak-open', function(data) {
		console.log('storeData/category-open/Jailbreak-open ADDED');
		data = submitOpenCategory('Jailbreak');
		socket.emit('storeData/category-open/Jailbreak-open',data);
	});		
	//[DATABASE] Listening to if clicked on Tweaked open category on apps page
	socket.on('storeData/category-open/Tweaked-open', function(data) {
		console.log('storeData/category-open/Tweaked-open ADDED');
		data = submitOpenCategory('Tweaked');
		socket.emit('storeData/category-open/Tweaked-open',data);
	});	
	//[DATABASE] Listening to if clicked on Entertainment open category on apps page
	socket.on('storeData/category-open/Entertainment-open', function(data) {
		console.log('storeData/category-open/Entertainment-open ADDED');
		data = submitOpenCategory('Entertainment');
		socket.emit('storeData/category-open/Entertainment-open',data);
	});			
	//[DATABASE] Listening to if clicked on Emulators open category on apps page
	socket.on('storeData/category-open/Emulators-open', function(data) {
		console.log('storeData/category-open/Emulators-open ADDED');
		data = submitOpenCategory('Emulators');
		socket.emit('storeData/category-open/Emulators-open',data);
	});		
	//[DATABASE] Listening to if clicked on Games open category on apps page
	socket.on('storeData/category-open/Games-open', function(data) {
		console.log('storeData/category-open/Games-open ADDED');
		data = submitOpenCategory('Games');
		socket.emit('storeData/category-open/Games-open',data);
	});			

	
	//[DATABASE] Listening to if clicked on Ignition open on source page
	socket.on('storeData/source-open/Ignition-open', function(data) {
		console.log('storeData/source-open/Ignition-open ADDED');
		data = submitOpenSource('Ignition');
		socket.emit('storeData/source-open/Ignition-open',data);
	});		
	//[DATABASE] Listening to if clicked on TopStore open on source page
	socket.on('storeData/source-open/TopStore-open', function(data) {
		console.log('storeData/source-open/TopStore-open ADDED');
		data = submitOpenSource('TopStore');
		socket.emit('storeData/source-open/TopStore-open',data);
	});		
	//[DATABASE] Listening to if clicked on AppValley open on source page
	socket.on('storeData/source-open/AppValley-open', function(data) {
		console.log('storeData/source-open/AppValley-open ADDED');
		data = submitOpenSource('AppValley');
		socket.emit('storeData/source-open/AppValley-open',data);
	});		
	//[DATABASE] Listening to if clicked on Tweakbox open on source page
	socket.on('storeData/source-open/Tweakbox-open', function(data) {
		console.log('storeData/source-open/Tweakbox-open ADDED');
		data = submitOpenSource('Tweakbox');
		socket.emit('storeData/source-open/Tweakbox-open',data);
	});		
	//[DATABASE] Listening to if clicked on IOSNinja open on source page
	socket.on('storeData/source-open/IOSNinja-open', function(data) {
		console.log('storeData/source-open/IOSNinja-open ADDED');
		data = submitOpenSource('IOSNinja');
		socket.emit('storeData/source-open/IOSNinja-open',data);
	});		
	//[DATABASE] Listening to if clicked on CoconutX open on source page
	socket.on('storeData/source-open/CoconutX-open', function(data) {
		console.log('storeData/source-open/CoconutX-open ADDED');
		data = submitOpenSource('CoconutX');
		socket.emit('storeData/source-open/CoconutX-open',data);
	});		
	//[DATABASE] Listening to if clicked on iOSGods open on source page
	socket.on('storeData/source-open/iOSGods-open', function(data) {
		console.log('storeData/source-open/iOSGods-open ADDED');
		data = submitOpenSource('iOSGods');
		socket.emit('storeData/source-open/iOSGods-open',data);
	});		
	//[DATABASE] Listening to if clicked on Flekstore open on source page
	socket.on('storeData/source-open/Flekstore-open', function(data) {
		console.log('storeData/source-open/Flekstore-open ADDED');
		data = submitOpenSource('Flekstore');
		socket.emit('storeData/source-open/Flekstore-open',data);
	});		
	//[DATABASE] Listening to if clicked on Emus4 open on source page
	socket.on('storeData/source-open/Emus4-open', function(data) {
		console.log('storeData/source-open/Emus4-open ADDED');
		data = submitOpenSource('Emus4');
		socket.emit('storeData/source-open/Emus4-open',data);
	});		
	//[DATABASE] Listening to if clicked on Emus open on source page
	socket.on('storeData/source-open/Emus-open', function(data) {
		console.log('storeData/source-open/Emus-open ADDED');
		data = submitOpenSource('Emus');
		socket.emit('storeData/source-open/Emus-open',data);
	});	

	//Sources Page Apps	
	var CategoryArray2 = ["Ignition", "TopStore", "AppValley", "Tweakbox", "IOSNinja", "CoconutX", "iOSGods", "Flekstore", "Emus4", "Emus"];
	var num2;
	socket.on('num2', async function(data) {
		num2 = data;
		var k = 1;
		var i = 1;
		while (k < totalNumApps) {
			var firebaseAppCategory = await firebase.database().ref().child("appData/app"+k+"/"+CategoryArray2[num2]);
				firebaseAppCategory.on('value', async function(snapshot) { 
					data = await snapshot.val();
					if (i < totalNumApps) {
						if (data !== "none") {
							socket.emit('sent2', i) 
							i++
						} else {
							if (i < totalNumApps) 							
							i++
						}
					}
				})
				k++;
		}
	});

	//Category Page Apps
	var CategoryArray = ["Jailbreak", "Tweaked", "Entertainment", "Emulators", "Games"]
	var num;
	socket.on('num', function(data) {
		num = data;
		async function retrieving() {
			for (var k = 1; k < totalNumApps; k++) { 
				var firebaseAppCategory = await firebase.database().ref().child("appData/app"+k+"/Category");
				await firebaseAppCategory.on('value', async function(snapshot) { 
					data = await snapshot.val(); 
					if (k < totalNumApps) {
						if (CategoryArray[num] == data) {
							return (socket.emit('sent', k));
						} else {
							// return (console.log("App"+k+": "+data));
						}
					}
				});
			}
		}
		retrieving();
	});

	//Search Page Apps
	var CategoryArray3 = ["search-apps"]
	var num3;
	socket.on('num3', async function(data) {
		num3 = data;
		var k = 1;
		var i = 1;
		while (k < totalNumApps) {
			var firebaseAppCategory = await firebase.database().ref().child("appData/app"+k+"/"+CategoryArray3[num3]);
				firebaseAppCategory.on('value', async function(snapshot) { 
					data = await snapshot.val();
					if (i < totalNumApps) {
						if (((data !== "none") || (data == "none"))) {
							socket.emit('sent3', i) 
							i++
						} 
					}
				})
				k++;
		}
	});

  socket.on('disconnect', function () {
      	console.log(socket.id+": Disconnected.");
  });

});



//Init index.ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); 
app.get('/', function(req, res) {
	res.render('index', { 
		title: 'Name',
	});
});


