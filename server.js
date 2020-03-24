//Initiating Global Variables
var express = require('express');
var app = express();
const port = process.env.PORT;
var totalNumApps;
var viewcounter = 0;
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
//Beginning Server Commands
var server = app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});

//Creating socket connection
var socket = require('socket.io');
var io = socket(server)
io.on('connection', function(socket) {

 	var clientIp = socket.request.connection.remoteAddress;
 	var address = socket.handshake.address;
	
	//Confirming a socket connection
	console.log('made socket connection: ' + socket.id)
	console.log('User Address: '+clientIp);
	console.log('User Address2: '+address);


	//Recieving total number of apps
	socket.on('appData', function(data) {
		var ref = firebase.database().ref('appData');
		ref.on('value', async function(snapshot) { 
			data = 	snapshot.numChildren();
			totalNumApps = (data+1);
			console.log("Total Apps: "+totalNumApps);
			socket.emit('appData', totalNumApps);
		})
	});	

		//Recieving request to load Popular Apps
		socket.on('requestPopularApps', async function(data) {
			var a = [];
			var value;
			for (var g = 0; g < 10; g++) {
				a.push([g])
			}
			function running(num) {
				var source = firebase.database().ref().child("storeData/appGet/app-source-get-total/app"+num+"-total");

				source.on('value', function(snapshot) {
					value = snapshot.val(); 
					a[num].push(value) 
					socket.emit('requestPopularApps', a);
				}); 
			}
			for (var i = 1; i < 10; i++) {
				running(i)
			}
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
		var ref = firebase.database().ref('storeData/navbar-click/'+name+"-click");
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
		var ref = firebase.database().ref('storeData/home-data/twitter/twitter-'+name+"-click");
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
		var ref = firebase.database().ref('storeData/home-data/submission/request-click');
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
		var ref = firebase.database().ref('storeData/home-data/source-list/'+name+'-twitter-click');
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
		var ref = firebase.database().ref('storeData/appGet/app-source-click/app'+name+'/app'+name+'-'+source+'');
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});
	}
	//[DATABASE] Adding to Total App Click when clicking on Sources (Total Source Clicks)
	function submitAppSourceTotal(num) {
		var ref = firebase.database().ref('storeData/appGet/app-source-get-total/'+'app'+num+'-total');
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}
	//[DATABASE] Adding to Total App Click when clicking on Homescreen
	function submitgetAppClick(num) {
		var ref = firebase.database().ref('storeData/appGet/app-get-home/app'+a+'-total');
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}
	//[DATABASE] Function that adds refresh counter
	function countRefresh() {
		var ref = firebase.database().ref('storeData/refresh-counter');
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}
	//[DATABASE] Function that adds view counter
	function countView() {
		var ref = firebase.database().ref('storeData/view-counter');
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}
	//[DATABASE] Adding to Total Click on specific Category OPEN button
	function submitOpenCategory(a) {
		var ref = firebase.database().ref('storeData/category-open/'+a+'-open');
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}
	//[DATABASE] Adding to Total Click on specific Source OPEN button
	function submitOpenSource(a) {
		var ref = firebase.database().ref('storeData/source-open/'+a+'-open');
		ref.transaction(function(currentClicks) {
		  return (currentClicks || 0) + 1;
		});      
	}

	function submitReportApp(a) {
		var ref = firebase.database().ref('storeData/reportApp/app'+a+'-report');
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

});

//Init index.ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); 
app.get('/', function(req, res) {
	res.render('index', { 
		title: 'Name',
	});
});


