//Init socket connection
var socket = io.connect();
//Array associated with the removal of tags
var myCatArray = ["Jailbreak", "Tweaked", "Entertainment", "Emulators", "Games", "Ignition", "TopStore", "AppValley", "Tweakbox", "IOSNinja", "CoconutX", "iOSGods", "Emus", "Emus4", "Flekstore", "search-apps"];
var valnum;

//Variables associated with event clicking on navbar icons/text
var home = document.getElementById('home');
var apps = document.getElementById('apps');
var stores = document.getElementById('stores');
var updates = document.getElementById('updates');
var search = document.getElementById('search');

//Variables associated with button clicking for database
var twitterbionik = document.getElementById('twitter-bionik');
var twitterdjfeel = document.getElementById('twitter-djfeel');
var legalbutton = document.getElementById('legal-button');
var submissionbutton = document.getElementById('submission-button');
var twitterignition = document.getElementById('twitter-ignition');
var twittertopstore = document.getElementById('twitter-topstore');
var twitterappvalley = document.getElementById('twitter-appvalley');
var twittertweakbox = document.getElementById('twitter-tweakbox');
var twitteriosninja = document.getElementById('twitter-iosninja');
var twittercoconutx = document.getElementById('twitter-coconutx');
var twitteriosgods = document.getElementById('twitter-iosgods');
var twitterflekstore = document.getElementById('twitter-flekstore');
var twitteremus4u = document.getElementById('twitter-emus4u');
var twitteriosemus = document.getElementById('twitter-iosemus');

//Variables associated with back button events
var counter = 0;
var backhref = document.getElementById('backview');
var backleft = document.getElementById('back-left');
var backleftcat = document.getElementById('back-left-cat');
var backleftsor = document.getElementById('back-left-sor');
var backleftcatapp = document.getElementById('back-left-cat-app');
var backlefttos = document.getElementById('back-left-tos')

//Variables associated with navbar text and icons
var homefont = document.getElementById('home-font');
var appsfont = document.getElementById('apps-font');
var updatesfont = document.getElementById('updates-font');
var sourcesfont = document.getElementById('sources-font');
var searchfont = document.getElementById('search-font');

var iconright = document.getElementById('icon-right');



//VARIABLES FOR FIREBASE AUTHENTICATION
var emailinput = document.getElementById('email');
var passwordinput = document.getElementById('password');
var signinsubmit = document.getElementById('signinsubmit');
var inputquery = document.getElementById('inputquery');
var accountclick = document.getElementById('accountclick');
var accountname = document.getElementById('account-name');
var signincontent = document.getElementById('signincontent');
var admincontent = document.getElementById('admincontent');
var accountinname = document.getElementById('account-in-name');
var verifycounter = 1;

var popularapps = document.getElementById('popular-apps');
var searchapps = document.getElementById('search-apps');
var userfav = document.getElementById('user-fav');
var sourcelimit = document.getElementById('source-limit');
var globemail;
var admindata;
var sourceactive;
var favarray;
var userid;
var showclock = document.getElementById("show-clock");

var totalNumApps;

var titlechange = document.getElementById("title-change");

        socket.on('socketid', function(data) { 
            console.log(data);
        });

// //Loading Popular Apps
// var i = 0; socket.on('requestPopularAppsNoAccount', function(data) { var a = data; i++; function sortFunction(a, b) { if (a[1] === b[1]) { return 0; } else { return (a[1] > b[1]) ? -1 : 1; } } a.sort(sortFunction); if (i == (totalNumApps-1)) { createTag(a[1][0], "popular-apps"); createTag(a[2][0], "popular-apps"); createTag(a[3][0], "popular-apps"); createTag(a[4][0], "popular-apps"); } })

socket.on('appDataNoAccount', async function(data) { 
    removeTags("search-apps");
    totalNumApps = data; 
    console.log(totalNumApps); 

    // for (var i = 1; i < totalNumApps; i++) { createTag(i, "search-apps"); }

});
socket.on('appDataAccount', async function(data) { 
    removeTags("search-apps");
    totalNumApps = data; 
    console.log(totalNumApps); 

    // for (var i = 1; i < totalNumApps; i++) { createTag(i, "search-apps"); }

});

socket.on('favlist1', async function(data) {
    favarray = data;
    var favlist = document.getElementById('fav-list');
    favlist.innerHTML = '';  
    async function run(i) {
        await createTag(data[i], "fav-list");
    }
    for (var i = 0; i < data.length; i++) {
        run(i);
    }
});

            socket.on('clock-time', async function(data) {
                showclock.innerHTML = await '<div class="content-block-title" style="margin-top: -10px; margin-left: 5px; font-size: 15px;"><h3 id="clock"></h3></div>';
                var clockElement = await document.getElementById("clock");

                var showdate1 = data.substr(0, 3); //Shows DAY
                var showdate2 = data.substr(3, 12); //Shows MONTH/YEAR
                clockElement.style.visibility = "visible";
                clockElement.innerHTML = ''+showdate1+''+showdate2;

            });

var auth;
socket.on('credentialfirebase', async function(data) {
await firebase.initializeApp({
        apiKey: data[0],
        authDomain: data[1],
        databaseURL: data[2],
        projectId: data[3],
        storageBucket: data[4],
        messagingSenderId: data[5],
        appId: data[6],
        measurementId: data[7]
});
console.log("initialised");
auth = await firebase.auth();
console.log(auth);
await socket.emit('returnauth', 'value')
})

socket.on('returnauth', async function(data) {
    auth.onAuthStateChanged(user => {
    var ref = firebase.database().ref('appData');
    var user = firebase.auth().currentUser;
        if (user) {
            if (user.emailVerified == 1) {
                console.log("user logged in (verified account)");
                function accountPageChange() { accountname.innerHTML = "Account"; accountinname.innerHTML = "Account"; while (signincontent.firstChild) { signincontent.removeChild(signincontent.firstChild); } } accountPageChange();
                // admin.auth().createCustomToken(user.uid).then((customToken) => { currentToken = customToken; console.log("customToken: "+currentToken); }) //Creating Token


            } else if (user.emailVerified == 0) {
                console.log("user logged in (!verified account)");


            }

        } else {
            console.log("user logged out");
            accountname.innerHTML = "Sign In";
            accountinname.innerHTML = "Sign In";
            signincontent.innerHTML = '<div class="content-block-title"><h1 class="text color-text-flow"> SIGN IN </h1></div><div class="card" style="margin-top: -5px"><div class="card-header">Login into BionikHub to gain more apps and features. </div><div class="list-block media-list"></div></div><div class="list-block inset" style="margin-top: -3px"><ul><!-- Text inputs --><li><div class="item-content"><div class="item-inner"><div class="item-title label">Email</div><div class="item-input"><input id="loginemail" type="email" placeholder="Enter Email"></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title label">Password</div><div class="item-input"><input id="loginpassword" type="password" placeholder="Enter Password"></div></div></div></li></ul></div> <div id="inputquery2"></div><a href="#" class="tab-link"><i id="loginsignin" class="icon button button-fill button-big" style="margin-top: 0px; width: 100%;">Sign In</i></a><br><br><a href="#view-signup" href="#" class="tab-link"> <i class="icon button button-fill color-green button-big" style="margin-top: -5px; width: 100%;">Sign Up</i></a><a href="#view-1" id="clicker" class="tab-link"></a>';

            //Authentication Login 
            var loginsignin = document.getElementById('loginsignin'); 
            var loginemail = document.getElementById('loginemail'); 
            var loginpassword = document.getElementById('loginpassword'); 
            var inputquery2 = document.getElementById('inputquery2'); 
            loginsignin.addEventListener('click', function() { 
                var usercred = []; 
                var emailsignval = loginemail.value; 
                var passwordsignval = loginpassword.value; 
                usercred.push(emailsignval, passwordsignval); 
                socket.emit('loginsignin',usercred); 
                inputquery2.removeChild(inputquery2.lastChild); 
            });   

            var newsourceauth = document.getElementById('new-sourceauth'); 
            newsourceauth.innerHTML = ''; 
            socket.on('signinuservalid', async function(data) { 

                await auth.signInWithEmailAndPassword(data[0], data[1]).catch((error) => myError(error))

                loginemail.value = ""; 
                loginpassword.value = ""; 
                document.getElementById("clicker").click(); 
            });

        }
    })
})


// socket.on('apiKey', async function(data) {
//     console.log("apiKey: "+data);
// });
// socket.on('authDomain', async function(data) {
//     console.log("authDomain: "+data);
// });
// socket.on('databaseURL', async function(data) {
//     console.log("databaseURL: "+data);
// });
// socket.on('projectId', async function(data) {
//     console.log("projectId: "+data);
// });
// socket.on('storageBucket', async function(data) {
//     console.log("storageBucket: "+data);
// });
// socket.on('messagingSenderId', async function(data) {
//     console.log("messagingSenderId: "+data);
// });
// socket.on('appId', async function(data) {
//     console.log("appId: "+data);
// });
// socket.on('measurementId', async function(data) {
//     console.log("measurementId: "+data);
// });


// socket.on('checkuserstat', function(data) {
//     if (data) {
//         console.log("logged in (user verified)")
//             // function accountPageChangeAccount() { accountname.innerHTML = "Account"; accountinname.innerHTML = "Account"; while (signincontent.firstChild) { signincontent.removeChild(signincontent.firstChild); } } accountPageChangeAccount();
//             accountname.addEventListener('click', function() { socket.emit('signoutfunc', 'value'); }); 

//             socket.on('portray', function(data) {
//                 socket.emit('portray', 'value');
//             });

//             socket.on('display', function(data) {
//                 function accountPageChange() { accountname.innerHTML = "Account"; accountinname.innerHTML = "Account"; while (signincontent.firstChild) { signincontent.removeChild(signincontent.firstChild); } }
//                 accountPageChange();
//             });



//     } else {
//         console.log("user logged out");
//         admincontent.innerHTML = "";
//         while (popularapps.firstChild) { popularapps.removeChild(popularapps.firstChild); a=0; }
//         while (searchapps.firstChild) { searchapps.removeChild(searchapps.firstChild); a=0; }

//         showclock.innerHTML = '';

//         //Loading Popular Apps
//         var i = 0; socket.on('requestPopularAppsNoAccount', function(data) { var a = data; i++; function sortFunction(a, b) { if (a[1] === b[1]) { return 0; } else { return (a[1] > b[1]) ? -1 : 1; } } a.sort(sortFunction); if (i == (totalNumApps-1)) { createTag(a[1][0], "popular-apps"); createTag(a[2][0], "popular-apps"); createTag(a[3][0], "popular-apps"); createTag(a[4][0], "popular-apps"); } })

//         socket.on('clock-time', function(data) {
//             clockElement.style.visibility = "hidden";
//         })

//         //Changes UI of Account Page
//         accountname.innerHTML = "Sign In";
//         accountinname.innerHTML = "Sign In";
//         signincontent.innerHTML = '<div class="content-block-title"><h1 class="text color-text-flow"> SIGN IN </h1></div><div class="card" style="margin-top: -5px"><div class="card-header">Login into BionikHub to gain more apps and features. </div><div class="list-block media-list"></div></div><div class="list-block inset" style="margin-top: -3px"><ul><!-- Text inputs --><li><div class="item-content"><div class="item-inner"><div class="item-title label">Email</div><div class="item-input"><input id="loginemail" type="email" placeholder="Enter Email"></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title label">Password</div><div class="item-input"><input id="loginpassword" type="password" placeholder="Enter Password"></div></div></div></li></ul></div> <div id="inputquery2"></div><a href="#" class="tab-link"><i id="loginsignin" class="icon button button-fill button-big" style="margin-top: 0px; width: 100%;">Sign In</i></a><br><br><a href="#view-signup" href="#" class="tab-link"> <i class="icon button button-fill color-green button-big" style="margin-top: -5px; width: 100%;">Sign Up</i></a><a href="#view-1" id="clicker" class="tab-link"></a>';

//         //Resetting the sources page (View-Page App)
//         var newsourceauth = document.getElementById('new-sourceauth');
//         newsourceauth.innerHTML = '';

//         //Adding the extra sources 
//         sourcelimit.innerHTML = '';















































//     }
// })

/*
CHECKING USER STATUS FOR FIREBASE AUTHENTICATION
*/
// socket.on('checkuserstat', function(data) {

//     if (data) { //Content shown to user that IS logged in
//         userid = data.uid;
//         console.log("user logged in."); 
//         document.getElementById("clicker").click(); 
//         function accountPageChange() { accountname.innerHTML = "Account"; accountinname.innerHTML = "Account"; while (signincontent.firstChild) { signincontent.removeChild(signincontent.firstChild); } }
//         socket.on('signoutfunc', function() { while (popularapps.firstChild) { popularapps.removeChild(popularapps.firstChild); a=0; } });

//         accountPageChange();
//         var useremail = data.email;
//         var useremailver = data.emailVerified;
//         if (useremailver == 1) { //Verified
//             socket.emit('appData1','value');
//             console.log(data);

//             var sourcelimit = document.getElementById('source-limit')    

//             sourcelimit.innerHTML = '<li class="item-content"> <div class="item-media"> <img class="lazy-fadeIn lazy-loaded" width="44" srcset="https://pbs.twimg.com/profile_images/1183929081164943360/pCEXaf-M_400x400.jpg"> </div> <div class="item-inner"> <div class="item-title-row"> <div id="app1" class="item-title">IOSNinja</div> <div class="" style="margin-right: 20px;"> <a class="tab-link" href="#view-6" id="iosninja-open"><em class="button button-fill button-round" style="background: rgb(240, 241, 246); color: rgb(0, 122, 255); font-weight: bold;">OPEN</em></a> </div> </div> <div class="app-subtitle">3rd Party Appstore</div> </div> </li> <li class="item-content"> <div class="item-media"> <img class="lazy-fadeIn lazy-loaded" width="44" srcset="https://pbs.twimg.com/profile_images/1041622852896620544/64l3Eg7A_400x400.jpg"> </div> <div class="item-inner"> <div class="item-title-row"> <div id="app1" class="item-title">CoconutX</div> <div class="" style="margin-right: 20px;"> <a class="tab-link" href="#view-6" id="coconutx-open"><em class="button button-fill button-round" style="background: rgb(240, 241, 246); color: rgb(0, 122, 255); font-weight: bold;">OPEN</em></a> </div> </div> <div class="app-subtitle">3rd Party Appstore</div> </div> </li> <li class="item-content"> <div class="item-media"> <img class="lazy-fadeIn lazy-loaded" width="44" srcset="https://pbs.twimg.com/profile_images/1053003638443036672/UhwU_4du_400x400.jpg"> </div> <div class="item-inner"> <div class="item-title-row"> <div id="app1" class="item-title">IOSGods</div> <div class="" style="margin-right: 20px;"> <a class="tab-link" href="#view-6" id="iosgods-open"><em class="button button-fill button-round" style="background: rgb(240, 241, 246); color: rgb(0, 122, 255); font-weight: bold;">OPEN</em></a> </div> </div> <div class="app-subtitle">3rd Party Appstore</div> </div> </li> <li class="item-content"> <div class="item-media"> <img class="lazy-fadeIn lazy-loaded" width="44" srcset="https://pbs.twimg.com/profile_images/1155768313781379077/M4BMFCfC_400x400.jpg"> </div> <div class="item-inner"> <div class="item-title-row"> <div id="app1" class="item-title">FlekSt0re</div> <div class="" style="margin-right: 20px;"> <a class="tab-link" href="#view-6" id="flekstore-open"><em class="button button-fill button-round" style="background: rgb(240, 241, 246); color: rgb(0, 122, 255); font-weight: bold;">OPEN</em></a> </div> </div> <div class="app-subtitle">3rd Party Appstore</div> </div> </li> <li class="item-content"> <div class="item-media"> <img class="lazy-fadeIn lazy-loaded" width="44" srcset="https://pbs.twimg.com/profile_images/796862544790982656/VA7rUFwQ_400x400.jpg"> </div> <div class="item-inner"> <div class="item-title-row"> <div id="app1" class="item-title">Emus4u</div> <div class="" style="margin-right: 20px;"> <a class="tab-link" href="#view-6" id="emus4u-open"><em class="button button-fill button-round" style="background: rgb(240, 241, 246); color: rgb(0, 122, 255); font-weight: bold;">OPEN</em></a> </div> </div> <div class="app-subtitle">3rd Party Appstore</div> </div> </li> <li class="item-content"> <div class="item-media"> <img class="lazy-fadeIn lazy-loaded" width="44" srcset="https://pbs.twimg.com/profile_images/945699436608524288/oM1Y_3vh_400x400.jpg"> </div> <div class="item-inner"> <div class="item-title-row"> <div id="app1" class="item-title">IOSEmus</div> <div class="" style="margin-right: 20px;"> <a class="tab-link" href="#view-6" id="iosemus-open"><em class="button button-fill button-round" style="background: rgb(240, 241, 246); color: rgb(0, 122, 255); font-weight: bold;">OPEN</em></a> </div> </div> <div class="app-subtitle">3rd Party Appstore</div> </div> </li>';



// var iosninjaopen = document.getElementById('iosninja-open');
// var coconutxopen = document.getElementById('coconutx-open');
// var iosgodsopen = document.getElementById('iosgods-open');
// var flekstoreopen = document.getElementById('flekstore-open');
// var emus4uopen = document.getElementById('emus4u-open');
// var iosemusopen = document.getElementById('iosemus-open');

// /*
// SOURCES PAGE BUTTON LISTENERS
// */
// //Listening for when clicking Ignition 'GET' at Source Page
// ignitionopen.addEventListener('click', async function() { 
//     categorynamesor.innerHTML = "Ignition";
//     categorytitlesor.innerHTML = "Ignition";
//     categorylocsor.id = "Ignition";
//     socket.emit('storeData/source-open/Ignition-open','value');
//     show_backleftsor(); 
//     appCatLoad2(0);
// });
// //Listening for when clicking TopStore 'GET' at Source Page
// topstoreopen.addEventListener('click', function() { 
//     categorynamesor.innerHTML = "Top Store";
//     categorytitlesor.innerHTML = "Top Store";
//     categorylocsor.id = "TopStore";
//     socket.emit('storeData/source-open/TopStore-open','value');
//     show_backleftsor(); 
//     appCatLoad2(1);
// });
// //Listening for when clicking AppValley 'GET' at Source Page
// appvalleyopen.addEventListener('click', function() { 
//     categorynamesor.innerHTML = "App Valley";
//     categorytitlesor.innerHTML = "App Valley";
//     categorylocsor.id = "AppValley";
//     socket.emit('storeData/source-open/AppValley-open','value');
//     show_backleftsor(); 
//     appCatLoad2(2);
// });
// //Listening for when clicking Tweakbox 'GET' at Source Page
// tweakboxopen.addEventListener('click', function() { 
//     categorynamesor.innerHTML = "Tweakbox";
//     categorytitlesor.innerHTML = "Tweakbox";
//     categorylocsor.id = "Tweakbox";
//     socket.emit('storeData/source-open/Tweakbox-open','value');
//     show_backleftsor(); 
//     appCatLoad2(3);
// });
// //Listening for when clicking IOSNinja 'GET' at Source Page
// iosninjaopen.addEventListener('click', function() { 
//     categorynamesor.innerHTML = "IOSNinja";
//     categorytitlesor.innerHTML = "IOSNinja";
//     categorylocsor.id = "IOSNinja";
//     socket.emit('storeData/source-open/IOSNinja-open','value');
//     show_backleftsor(); 
//     appCatLoad2(4);
// });
// //Listening for when clicking CoconutX 'GET' at Source Page
// coconutxopen.addEventListener('click', function() { 
//     categorynamesor.innerHTML = "CoconutX";
//     categorytitlesor.innerHTML = "CoconutX";
//     categorylocsor.id = "CoconutX";
//     socket.emit('storeData/source-open/CoconutX-open','value');
//     show_backleftsor(); 
//     appCatLoad2(5);
// });
// //Listening for when clicking IOSGods 'GET' at Source Page
// iosgodsopen.addEventListener('click', function() { 
//     categorynamesor.innerHTML = "IOSGods";
//     categorytitlesor.innerHTML = "IOSGods";
//     categorylocsor.id = "iOSGods";
//     socket.emit('storeData/source-open/iOSGods-open','value');
//     show_backleftsor(); 
//     appCatLoad2(6);
// });
// //Listening for when clicking FlekStore 'GET' at Source Page
// flekstoreopen.addEventListener('click', function() { 
//     categorynamesor.innerHTML = "FlekStore";
//     categorytitlesor.innerHTML = "FlekStore";
//     categorylocsor.id = "Flekstore";
//     socket.emit('storeData/source-open/Flekstore-open','value');
//     show_backleftsor(); 
//     appCatLoad2(7);
// });
// //Listening for when clicking Emus4u 'GET' at Source Page
// emus4uopen.addEventListener('click', function() { 
//     categorynamesor.innerHTML = "Emus4u";
//     categorytitlesor.innerHTML = "Emus4u";
//     categorylocsor.id = "Emus4";
//     socket.emit('storeData/source-open/Emus4-open','value');
//     show_backleftsor(); 
//     appCatLoad2(8);
// });
// //Listening for when clicking IOSEmus 'GET' at Source Page
// iosemusopen.addEventListener('click', function() { 
//     categorynamesor.innerHTML = "IOSEmus";
//     categorytitlesor.innerHTML = "IOSEmus";
//     categorylocsor.id = "Emus";
//     socket.emit('storeData/source-open/Emus-open','value');
//     show_backleftsor(); 
//     appCatLoad2(9);
// });

// /*
// OBTAINING DATA FROM SPECIFIC USER
// */

// jailbreakopen.addEventListener('click', function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/category-open/Jailbreak-open','value');
// });
// //Listening for when clicking Tweaked 'GET' at Category/Apps Page
// tweakedopen.addEventListener('click', function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/category-open/Tweaked-open','value');
// });
// //Listening for when clicking Entertainment 'GET' at Category/Apps Page
// entertainmentopen.addEventListener('click', function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/category-open/Entertainment-open','value');
// });
// //Listening for when clicking Emulator 'GET' at Category/Apps Page
// emulatorsopen.addEventListener('click', function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/category-open/Emulators-open','value');
// });
// //Listening for when clicking Games/Other 'GET' at Category/Apps Page
// gamesopen.addEventListener('click', function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/category-open/Games-open','value');
// });
// /*
// SOURCES PAGE BUTTON LISTENERS
// */
// //Listening for when clicking Ignition 'GET' at Source Page
// ignitionopen.addEventListener('click', async function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/source-open/Ignition-open','value');
// });
// //Listening for when clicking TopStore 'GET' at Source Page
// topstoreopen.addEventListener('click', function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/source-open/TopStore-open','value');
// });
// //Listening for when clicking AppValley 'GET' at Source Page
// appvalleyopen.addEventListener('click', function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/source-open/AppValley-open','value');
// });
// //Listening for when clicking Tweakbox 'GET' at Source Page
// tweakboxopen.addEventListener('click', function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/source-open/Tweakbox-open','value');
// });
// //Listening for when clicking IOSNinja 'GET' at Source Page
// iosninjaopen.addEventListener('click', function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/source-open/IOSNinja-open','value');
// });
// //Listening for when clicking CoconutX 'GET' at Source Page
// coconutxopen.addEventListener('click', function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/source-open/CoconutX-open','value');
// });
// //Listening for when clicking IOSGods 'GET' at Source Page
// iosgodsopen.addEventListener('click', function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/source-open/iOSGods-open','value');
// });
// //Listening for when clicking FlekStore 'GET' at Source Page
// flekstoreopen.addEventListener('click', function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/source-open/Flekstore-open','value');
// });
// //Listening for when clicking Emus4u 'GET' at Source Page
// emus4uopen.addEventListener('click', function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/source-open/Emus4-open','value');
// });
// //Listening for when clicking IOSEmus 'GET' at Source Page
// iosemusopen.addEventListener('click', function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/source-open/Emus-open','value');
// });
// var refreshcount = 0;
// if (refreshcount == 0) {
//     socket.emit('storeData/userProperties/'+data.uid+'/refresh-counter','value');
//     refreshcount = 1;
// }
// socket.emit('storeData/userProperties/'+data.uid+'/view-counter','value');
// //[DATABSE] Requesting bionik twitter data press
// twitterbionik.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/home-data/twitter/twitter-bionik-click','value');
// });
// //[DATABSE] Requesting djfeelofficial twitter data press
// twitterdjfeel.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/home-data/twitter/twitter-djfeelofficial-click','value');
// });

// //[DATABSE] Requesting ignition twitter data press
// twitterignition.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/home-data/source-list/ignition-twitter-click','value');
// });
// //[DATABSE] Requesting topstore twitter data press
// twittertopstore.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/home-data/source-list/topstore-twitter-click','value');
// });
// //[DATABSE] Requesting appvalley twitter data press
// twitterappvalley.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/home-data/source-list/appvalley-twitter-click','value');
// });
// //[DATABSE] Requesting tweakbox twitter data press
// twittertweakbox.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/home-data/source-list/tweakbox-twitter-click','value');
// });
// //[DATABSE] Requesting iosninja twitter data press
// twitteriosninja.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/home-data/source-list/iosninja-twitter-click','value');
// });
// //[DATABSE] Requesting coconutx twitter data press
// twittercoconutx.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/home-data/source-list/coconutx-twitter-click','value');
// });
// //[DATABSE] Requesting iosgods twitter data press
// twitteriosgods.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/home-data/source-list/iosgods-twitter-click','value');
// });
// //[DATABSE] Requesting flekstore twitter data press
// twitterflekstore.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/home-data/source-list/flekstore-twitter-click','value');
// });
// //[DATABSE] Requesting emus4u twitter data press
// twitteremus4u.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/home-data/source-list/emus4u-twitter-click','value');
// });
// //[DATABSE] Requesting iosemus twitter data press
// twitteriosemus.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/home-data/source-list/iosemus-twitter-click','value');
// });

// //[DATABSE] Requesting ToS Page data press
// legalbutton.addEventListener('click', function() {
//     backlefttos.style.visibility = 'visible';
//     socket.emit('storeData/userProperties/'+data.uid+'/home-data/legal/legal-click','value');
// });
// //[DATABSE] Requesting Submission data press
// submissionbutton.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/home-data/submission/request-click','value');
// });


// //Listener for back button event
// iconright.addEventListener('click', function() { 
//     socket.emit('storeData/userProperties/'+data.uid+'/reportApp/app'+keyval+"-report", keyval) 
// });


// //Listening to event when pressing home navbar button
// home.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/navbar-click/home-click','value');
// });
// //Listening to event when pressing categories/apps navbar button
// apps.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/navbar-click/apps-click','value');
// });
// //Listening to event when pressing stores/sources navbar button
// stores.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/navbar-click/stores-click','value');
// });
// //Listening to event when pressing stores/sources navbar button
// updates.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/navbar-click/updates-click','value');
// });
// //Listening to event when pressing search navbar button
// search.addEventListener('click', function() {
//     socket.emit('storeData/userProperties/'+data.uid+'/navbar-click/search-click','value');
// });


//             var numcountvalue; //global numcount variable
//             var favlistcount = 0; //Preventing certain functions from activating as they require the numcount variable
//             // socket.on('numcount', async function(numcountval) { //numcountval is obtained from the server which counts the number of childs under favlist
//             //     numcountvalue = numcountval; //Setting the numcount value to global variable numcountvalue so it can be used by all functions
//             //     console.log("numcountvalue: "+numcountvalue);
//             //     favlistcount = 1; //Allowing functions to run as numcountvalue has gotten its value
//             // }) 

//             signincontent.innerHTML = '<div class="content-block-title"><h1 class="text color-text-flow"> ACCOUNT </h1></div><div class="card" style="margin-top: -5px"><div class="card-header">Welcome to BionikHub '+useremail+'. <br> Email Verification: '+useremailver+' </div></div> <div class="content-block-title"><h1 class="text color-text-flow"> FAVOURITES </h1><div><a href="#" class="tab-link"> <i id="remove-fav-app" class="icon button button-fill button-big color-red" style="margin-top: 0px; width: 100%;">REMOVE APP</i></a><div class="card" style="margin-top: 15px"><div class="list-block media-list"><div class="card-content lazy lazy-fadeIn"><div class="list-block media-list"><div id="fav-list"></div></div></div></div></div></div> <a href="#" class="tab-link"> <i id="signout" class="icon button button-fill button-big color-red" style="margin-top: 10px; width: 100%;">Logout</i></a><br><br>';

//             // socket.on('favlist', async function(dataref) { //dataref is the array of favourite apps being sent from the server 
//             //     if (favlistcount == 1) { //Checking if I got the numcount value to continue the code
//             //         if (dataref.length == numcountvalue) { //With socket.on('favlist') is recieving every .push request (e.g: [0], [0, 2])...  This will simply print the final favlist array making it easier to see
//             //             await console.log("countervalue: "+dataref.length); 
//             //             await console.log("numcounter: "+numcountvalue);  
//             //             data.favlist = await dataref; //Assigning client-side variable data.favlist with the serverside array user.favlist
//             //             console.log(data.favlist);
//             //         }   
//             //     }
//             // }) 

//             // var removefavapp = document.getElementById('remove-fav-app');
//             // removefavapp.addEventListener('click', async function() { 
//             //     await socket.emit('removefavapp', 'value');
                
//             //     await data.favlist.pop();
//             //     await numcountvalue--;
//             //     console.log(data); 
//             //     favlist.innerHTML = " "; 
//             //     async function run(i) {
//             //         await createTag(data.favlist[i], "fav-list");
//             //     }
//             //     for (var i = 0; i < (numcountvalue); i++) {
//             //         run(i);
//             //     }                
//             // }); 

//             // socket.on('removefavapp', async function(val) { 
//             //     await data.favlist.pop();
//             //     await numcountvalue--;
//             //     console.log(data); 
//             //     favlist.innerHTML = " "; 
//             //     async function run(i) {
//             //         await createTag(data.favlist[i], "fav-list");
//             //     }
//             //     for (var i = 0; i < (numcountvalue); i++) {
//             //         run(i);
//             //     }
//             // })

































//             // var favlist = document.getElementById('fav-list');


//             // socket.on('favlist1', function(numcountval) { //numcountval is obtained from the server which counts the number of childs under favlist
//             //     socket.emit('favlist2', 'value');
//             // }) 

//             // socket.on('favlist3', function(data) { //numcountval is obtained from the server which counts the number of childs under favlist
//             //     favlist.innerHTML = " "; 
//             //     console.log(data);

//             //     function run(i) {
//             //         createTag(data[i], "fav-list");
//             //     }
//             //     for (var i = 0; i < data.length; i++) {
//             //         run(i);
//             //     }
//             // }) 

//             // accountclick.addEventListener('click', async function() {
//             //     await socket.emit('favlist1', 'value'); //Request to server to add it to the database
//             //     console.log("click!");
//             // });

//             // var removefavapp = document.getElementById('remove-fav-app');
//             // removefavapp.addEventListener('click', async function() { 
//             //     await socket.emit('favlist4', 'value');             
//             // }); 

//             // // while (popularapps.firstChild) { popularapps.removeChild(popularapps.firstChild); }
//             // socket.on('appData1', function(data) { totalNumApps = (data); console.log(totalNumApps); })
            
//             //     //In view-app, setting the application scene to make it have were you can add apps to favourite list
//             //     userfav.innerHTML = '<div class="card" style="margin-top: -10px"> <div class="list-block media-list"> <div class="card-content lazy lazy-fadeIn"> <div class="list-block media-list"> <div class="all-file-managers"> <div class="list-block media-list"> <div class="card-content lazy lazy-fadeIn"> <div class="list-block media-list"> <li class="item-content"> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">Add to Favourites</div> <div class="" style="margin-right: 20px;"> <a id="fav-app-add" class="button button-fill button-round" style="background: #F0F1F6; color: #007AFF; font-weight:bold;">ADD</a> </div> </div> <div class="app-subtitle">Easy access to apps</div> </div> </li> </div> </div> </div> </div> </div> </div> </div> </div><br>';

//             // var favappadd = document.getElementById('fav-app-add');
//             // favappadd.addEventListener('click', async function() {  //Listenfer for clicking on 'ADD' in view-appß
//             //     await socket.emit('favlist5', valnum);    
//             // });    


//             var favlist = document.getElementById('fav-list');

//             socket.emit('hi', 'value');

//             socket.on('hi', function(data) { //numcountval is obtained from the server which counts the number of childs under favlist
//                 favlist.innerHTML = " "; 
//                 function run(i) {
//                     createTag(data[i], "fav-list");
//                 }
//                 for (var i = 0; i < data.length; i++) {
//                     run(i);
//                 }
//             })         
























//                 // var favappnum = 0; //This prevents functions from continuing as they require the val variable
//                 // var val; //Val variable will contain the app ID which will be used to add into the database for favlist of the user
//                 // socket.on('numkey', function(num) { //socket.on('numkey') is used when clicking on loadApp(num). So basically i'm retrieving that value of num to get specific app ID.
//                     // val = num; //Setting the app ID to global variable val so it can be used in other functions
//                 //     favappnum = 1; //Allow functions to continue as they have the val variable
//                 // });

//                 // var favappadd = document.getElementById('fav-app-add');
//                 // favappadd.addEventListener('click', async function() {  //Listenfer for clicking on 'ADD' in view-appß
//                 //     if (favappnum == 1) { //Checking if recieved val variable
//                 //         // await data.favlist.push(val);
//                 //         // console.log(data.favlist); //Printing favlist from client-side to client console
//                 //         console.log(val); //Printing app ID to client console
//                 //         socket.emit('favlistadding', val); //Request to server to add it to the database
//                 //     }
//                 // }); 
            
//             var i = 0;
//             while (popularapps.firstChild) { popularapps.removeChild(popularapps.firstChild); }
//             socket.on('requestPopularApps1', function(data) {
//                 var a = data;
//                 i++;
//                 function sortFunction(a, b) {
//                     if (a[1] === b[1]) {
//                         return 0;
//                     }
//                     else {
//                         return (a[1] > b[1]) ? -1 : 1;
//                     }
//                 }

//                 a.sort(sortFunction);
//                 if (i == (totalNumApps-1)) { //Make sure that the list of apps is available in chronological order on the database, otherwise it won't work.
//                     createTag(a[1][0], "popular-apps");
//                     createTag(a[2][0], "popular-apps");
//                     createTag(a[3][0], "popular-apps");
//                     createTag(a[4][0], "popular-apps");
//                 }
//             })

//             console.log("Verified"); 

//             var signout = document.getElementById('signout');
//             signout.addEventListener('click', function() { socket.emit('signoutfunc', 'value'); }); 
//             var newsourceauth = document.getElementById('new-sourceauth');
//             newsourceauth.innerHTML = '<div class="list-block media-list"> <div class="card-content lazy lazy-fadeIn"> <div class="list-block media-list"> <div class="all-file-managers"> <div class="list-block media-list"> <div class="card-content lazy lazy-fadeIn"> <div class="list-block media-list"> <li class="item-content"> <div class="item-media"> <img class="lazy-fadeIn lazy-loaded" width="44" srcset="https://pbs.twimg.com/profile_images/1183929081164943360/pCEXaf-M_400x400.jpg"> </div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">IOSNinja</div> <div class="" style="margin-right: 20px;"> <a id="ninja-get" class="button button-fill button-round" style="background: #F0F1F6; color: #007AFF; font-weight:bold;">GET</a> </div> </div> <div class="app-subtitle">3rd Party Appstore</div> </div> </li> </div> </div> </div> </div> </div> </div> </div> <div class="list-block media-list"> <div class="card-content lazy lazy-fadeIn"> <div class="list-block media-list"> <div class="all-file-managers"> <div class="list-block media-list"> <div class="card-content lazy lazy-fadeIn"> <div class="list-block media-list"> <li class="item-content"> <div class="item-media"> <img class="lazy-fadeIn lazy-loaded" width="44" srcset="https://pbs.twimg.com/profile_images/1041622852896620544/64l3Eg7A_400x400.jpg"> </div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">CoconutX</div> <div class="" style="margin-right: 20px;"> <a id="coco-get" onclick="myElement()" class="button button-fill button-round" style="background: #F0F1F6; color: #007AFF; font-weight:bold;">GET</a> </div> </div> <div class="app-subtitle">3rd Party Appstore</div> </div> </li> </div> </div> </div> </div> </div> </div> </div> <div class="list-block media-list"> <div class="card-content lazy lazy-fadeIn"> <div class="list-block media-list"> <div class="all-file-managers"> <div class="list-block media-list"> <div class="card-content lazy lazy-fadeIn"> <div class="list-block media-list"> <li class="item-content"> <div class="item-media"> <img class="lazy-fadeIn lazy-loaded" width="44" srcset="https://pbs.twimg.com/profile_images/1053003638443036672/UhwU_4du_400x400.jpg"> </div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">IOSGods</div> <div class="" style="margin-right: 20px;"> <a id="god-get" class="button button-fill button-round" style="background: #F0F1F6; color: #007AFF; font-weight:bold;">GET</a> </div> </div> <div class="app-subtitle">3rd Party Appstore</div> </div> </li> </div> </div> </div> </div> </div> </div> </div> <div class="list-block media-list"> <div class="card-content lazy lazy-fadeIn"> <div class="list-block media-list"> <div class="all-file-managers"> <div class="list-block media-list"> <div class="card-content lazy lazy-fadeIn"> <div class="list-block media-list"> <li class="item-content"> <div class="item-media"> <img class="lazy-fadeIn lazy-loaded" width="44" srcset="https://pbs.twimg.com/profile_images/1155768313781379077/M4BMFCfC_400x400.jpg"> </div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">FlekSt0re</div> <div class="" style="margin-right: 20px;"> <a id="flek-get" class="button button-fill button-round" style="background: #F0F1F6; color: #007AFF; font-weight:bold;">GET</a> </div> </div> <div class="app-subtitle">3rd Party Appstore</div> </div> </li> </div> </div> </div> </div> </div> </div> </div> <div class="list-block media-list"> <div class="card-content lazy lazy-fadeIn"> <div class="list-block media-list"> <div class="all-file-managers"> <div class="list-block media-list"> <div class="card-content lazy lazy-fadeIn"> <div class="list-block media-list"> <li class="item-content"> <div class="item-media"> <img class="lazy-fadeIn lazy-loaded" width="44" srcset="https://pbs.twimg.com/profile_images/796862544790982656/VA7rUFwQ_400x400.jpg"> </div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">Emus4u</div> <div class="" style="margin-right: 20px;"> <a id="emus4-get" class="button button-fill button-round" style="background: #F0F1F6; color: #007AFF; font-weight:bold;">GET</a> </div> </div> <div class="app-subtitle">3rd Party Appstore</div> </div> </li> </div> </div> </div> </div> </div> </div> </div> <div class="list-block media-list"> <div class="card-content lazy lazy-fadeIn"> <div class="list-block media-list"> <div class="all-file-managers"> <div class="list-block media-list"> <div class="card-content lazy lazy-fadeIn"> <div class="list-block media-list"> <li class="item-content"> <div class="item-media"> <img class="lazy-fadeIn lazy-loaded" width="44" srcset="https://pbs.twimg.com/profile_images/945699436608524288/oM1Y_3vh_400x400.jpg"> </div> <div class="item-inner"> <div class="item-title-row"> <div class="item-title">IOSEmus</div> <div class="" style="margin-right: 20px;"> <a id="emus-get" class="button button-fill button-round" style="background: #F0F1F6; color: #007AFF; font-weight:bold;">GET</a> </div> </div> <div class="app-subtitle">3rd Party Appstore</div> </div> </li> </div> </div> </div> </div> </div> </div> </div>';
            
//             var ninjaValue = document.getElementById('ninja-get')
//             var cocoValue = document.getElementById('coco-get')
//             var godValue = document.getElementById('god-get')
//             var emusValue = document.getElementById('emus-get')
//             var emus4Value = document.getElementById('emus4-get')
//             var flekValue = document.getElementById('flek-get')

//             //[DATABASE] Requesting to database to count the click for IOSNinja Source
//             ninjaValue.addEventListener('click', function() {
//             socket.emit('iosninja-num', a);
//             });
//             //[DATABASE] Requesting to database to count the click for CoconutX Source
//             cocoValue.addEventListener('click', function() {
//             socket.emit('coconutx-num', a);
//             });
//             //[DATABASE] Requesting to database to count the click for IOSGods Source
//             godValue.addEventListener('click', function() {
//             socket.emit('iosgods-num', a);
//             });
//             //[DATABASE] Requesting to database to count the click for IOSEmus Source
//             emusValue.addEventListener('click', function() {
//             socket.emit('iosemus-num', a);
//             });
//             //[DATABASE] Requesting to database to count the click for Emus4u Source
//             emus4Value.addEventListener('click', function() {
//             socket.emit('emus4u-num', a);
//             });
//             //[DATABASE] Requesting to database to count the click for Flekstore Source
//             flekValue.addEventListener('click', function() {
//             socket.emit('flekstore-num', a);
//             });

//             var myArray = [ignitionValue, topValue, valleyValue, boxValue, ninjaValue, cocoValue, godValue, emusValue, emus4Value, flekValue];
//             socket.on('Number', function(data) {
//                 a=data;

//                 //Displaying App Name from Database
//                 socket.on('App'+a+'_Name', function(data) {
//                     var appName1 = document.getElementById("appname_1")
//                     var appName2 = document.getElementById("appname_2")
//                     appName1.innerHTML = data;
//                     appName2.innerHTML = data;
//                 })
//                 //Displaying App Image from Database
//                 socket.on('App'+a+'_Image', function(data) {
//                     var appImage = document.getElementById('frontimage')
//                     var att = document.createAttribute("srcset")
//                     att.value = data;
//                     appImage.setAttribute("srcset", att.value);
//                 })
//                 //Displaying App Description from Database
//                 socket.on('App'+a+'_Description', function(data) {
//                     var appDescription = document.getElementById("description")
//                     appDescription.innerHTML = data;
//                 })
//                 //Displaying App Developer from Database
//                 socket.on('App'+a+'_Developer', function(data) {
//                     var appDeveloper1 = document.getElementById("developer_1")
//                     var appDeveloper2 = document.getElementById("developer_2")
//                     appDeveloper1.innerHTML = data;
//                     appDeveloper2.innerHTML = data;
//                 })
//                 //Displaying App Version from Database
//                 socket.on('App'+a+'_Version', function(data) {
//                     var appVersion = document.getElementById("version")
//                     appVersion.innerHTML = data;
//                 })
//                 //Displaying App Category from Database
//                 socket.on('App'+a+'_Category', function(data) {
//                     var appCategory = document.getElementById("category")
//                     appCategory.innerHTML = data;
//                 })
//                 //Displaying App Size from Database
//                 socket.on('App'+a+'_Size', function(data) {
//                     var appSize = document.getElementById("size")
//                     appSize.innerHTML = data;
//                 })
//                 //Displaying App Category (Ignition) from Database
//                 socket.on('App'+a+'_Ignition', function(data) {
//                     if (data !== "none") {
//                         myArray[0].innerHTML = "GET";
//                         myArray[0].setAttribute("onclick", `window.open('${data}');`);
//                     } else if (data == "none") {
//                         myArray[0].innerHTML = "NONE";
//                         myArray[0].setAttribute("onclick", `window.open('none');`);
//                     }
//                 })
//                 //Displaying App Category (TopStore) from Database
//                 socket.on('App'+a+'_TopStore', function(data) {
//                     if (data !== "none") {
//                         myArray[1].setAttribute("onclick", `window.open('${data}');`);
//                         myArray[1].innerHTML = "GET";
//                     } else if (data == "none") {
//                         myArray[1].innerHTML = "NONE";
//                         myArray[1].setAttribute("onclick", `window.open('none');`);
//                     }
//                 })
//                 //Displaying App Category (AppValley) from Database
//                 socket.on('App'+a+'_AppValley', function(data) {
//                     if (data !== "none") {
//                         myArray[2].innerHTML = "GET";
//                         myArray[2].setAttribute("onclick", `window.open('${data}');`);
//                     } else if (data == "none") {
//                         myArray[2].innerHTML = "NONE";
//                         myArray[2].setAttribute("onclick", `window.open('none');`);
//                     }
//                 })
//                 //Displaying App Category (Tweakbox) from Database
//                 socket.on('App'+a+'_Tweakbox', function(data) {
//                     if (data !== "none") {
//                         myArray[3].innerHTML = "GET";
//                         myArray[3].setAttribute("onclick", `window.open('${data}');`);
//                     } else if (data == "none") {
//                         myArray[3].innerHTML = "NONE";
//                         myArray[3].setAttribute("onclick", `window.open('none');`);
//                     }
//                 })
//                 //Displaying App Category (IOSNinja) from Database
//                 socket.on('App'+a+'_IOSNinja', function(data) {
//                     if (data !== "none") {
//                         myArray[4].innerHTML = "GET";
//                         myArray[4].setAttribute("onclick", `window.open('${data}');`);
//                     } else if (data == "none") {
//                         myArray[4].innerHTML = "NONE";
//                         myArray[4].setAttribute("onclick", `window.open('none');`);
//                     }
//                 })
//                 //Displaying App Category (CoconutX) from Database
//                 socket.on('App'+a+'_CoconutX', function(data) {
//                     if (data !== "none") {
//                         myArray[5].innerHTML = "GET";
//                         myArray[5].setAttribute("onclick", `window.open('${data}');`);
//                     } else if (data == "none") {
//                         myArray[5].innerHTML = "NONE";
//                         myArray[5].setAttribute("onclick", `window.open('none');`);
//                     }
//                 })
//                 //Displaying App Category (iOSGods) from Database
//                 socket.on('App'+a+'_iOSGods', function(data) {
//                     if (data !== "none") {
//                         myArray[6].innerHTML = "GET";
//                         myArray[6].setAttribute("onclick", `window.open('${data}');`);
//                     } else if (data == "none") {
//                         myArray[6].innerHTML = "NONE";
//                         myArray[6].setAttribute("onclick", `window.open('none');`);
//                     }
//                 })
//                 //Displaying App Category (Emus) from Database
//                 socket.on('App'+a+'_Emus', function(data) {
//                     if (data !== "none") {
//                         myArray[7].innerHTML = "GET";
//                         myArray[7].setAttribute("onclick", `window.open('${data}');`);
//                     } else if (data == "none") {
//                         myArray[7].innerHTML = "NONE";
//                         myArray[7].setAttribute("onclick", `window.open('none');`);
//                     }
//                 })
//                 //Displaying App Category (Emus4) from Database
//                 socket.on('App'+a+'_Emus4', function(data) {
//                     if (data !== "none") {
//                         myArray[8].innerHTML = "GET";
//                         myArray[8].setAttribute("onclick", `window.open('${data}');`);
//                     } else if (data == "none") {
//                         myArray[8].innerHTML = "NONE";
//                         myArray[8].setAttribute("onclick", `window.open('none');`);
//                     }
//                 })
//                 //Displaying App Category (Flekstore) from Database
//                 socket.on('App'+a+'_Flekstore', function(data) {
//                     if (data !== "none") {
//                         myArray[9].innerHTML = "GET";
//                         myArray[9].setAttribute("onclick", `window.open('${data}');`);
//                     } else if (data == "none") {
//                         myArray[9].innerHTML = "NONE";
//                         myArray[9].setAttribute("onclick", `window.open('none');`);
//                     }
//                 })
//             });

//         } else if (useremailver == 0) { //Not Verified
//             userid = 0;
//             favlistcount = 0;
//             console.log("Not Verified");    
//             socket.emit('appData2','value');
//             socket.on('appData2', function(data) { totalNumApps = (data); console.log(totalNumApps); })
//             userfav.innerHTML = ''


//             var i = 0;
//             while (popularapps.firstChild) { popularapps.removeChild(popularapps.firstChild); }
//             socket.on('requestPopularApps2', function(data) {
//                 var a = data;
//                 i++;
//                 function sortFunction(a, b) {
//                     if (a[1] === b[1]) {
//                         return 0;
//                     }
//                     else {
//                         return (a[1] > b[1]) ? -1 : 1;
//                     }
//                 }

//                 a.sort(sortFunction);
//                 if (i == (totalNumApps-1)) { //Make sure that the list of apps is available in chronological order on the database, otherwise it won't work.
//                     createTag(a[1][0], "popular-apps");
//                     createTag(a[2][0], "popular-apps");
//                     createTag(a[3][0], "popular-apps");
//                     createTag(a[4][0], "popular-apps");
//                 }
//             })

//             signincontent.innerHTML = '<div class="content-block-title"><h1 class="text color-text-flow"> ACCOUNT </h1></div><div class="card" style="margin-top: -5px"><div class="card-header"> Note: Please verify your account. We have sent you an email regarding your verification. <br> After verifying, make sure to relogin. </div><a href="#" class="tab-link"> <i id="verify-email" class="icon button button-fill button-big" style="margin-top: 10px; width: 100%;">Send Verification</i></a><a href="#" class="tab-link"> <i id="signout" class="icon button button-fill button-big color-red" style="margin-top: 13px; width: 100%;">Logout</i></a>';
//             var signout = document.getElementById('signout');
//             var verifyemail = document.getElementById('verify-email');
//             socket.on('verificationerror', function(data) { verifyemail.className = "icon button button-fill button-big color-red"; });
//             verifyemail.addEventListener('click', function() { socket.emit('verifyemail', 'value'); }); 
//             signout.addEventListener('click', function() { socket.emit('signoutfunc', 'value'); }); 
//             var newsourceauth = document.getElementById('new-sourceauth');
//             newsourceauth.innerHTML = '';

//             var myArray = [ignitionValue, topValue, valleyValue, boxValue];
//             //Retrieving data from database for App
//             socket.on('Number', function(data) {
//                 a=data;

//                 //Displaying App Name from Database
//                 socket.on('App'+a+'_Name', function(data) {
//                     var appName1 = document.getElementById("appname_1")
//                     var appName2 = document.getElementById("appname_2")
//                     appName1.innerHTML = data;
//                     appName2.innerHTML = data;
//                 })
//                 //Displaying App Image from Database
//                 socket.on('App'+a+'_Image', function(data) {
//                     var appImage = document.getElementById('frontimage')
//                     var att = document.createAttribute("srcset")
//                     att.value = data;
//                     appImage.setAttribute("srcset", att.value);
//                 })
//                 //Displaying App Description from Database
//                 socket.on('App'+a+'_Description', function(data) {
//                     var appDescription = document.getElementById("description")
//                     appDescription.innerHTML = data;
//                 })
//                 //Displaying App Developer from Database
//                 socket.on('App'+a+'_Developer', function(data) {
//                     var appDeveloper1 = document.getElementById("developer_1")
//                     var appDeveloper2 = document.getElementById("developer_2")
//                     appDeveloper1.innerHTML = data;
//                     appDeveloper2.innerHTML = data;
//                 })
//                 //Displaying App Version from Database
//                 socket.on('App'+a+'_Version', function(data) {
//                     var appVersion = document.getElementById("version")
//                     appVersion.innerHTML = data;
//                 })
//                 //Displaying App Category from Database
//                 socket.on('App'+a+'_Category', function(data) {
//                     var appCategory = document.getElementById("category")
//                     appCategory.innerHTML = data;
//                 })
//                 //Displaying App Size from Database
//                 socket.on('App'+a+'_Size', function(data) {
//                     var appSize = document.getElementById("size")
//                     appSize.innerHTML = data;
//                 })
//                 //Displaying App Category (Ignition) from Database
//                 socket.on('App'+a+'_Ignition', function(data) {
//                     if (data !== "none") {
//                         myArray[0].innerHTML = "GET";
//                         myArray[0].setAttribute("onclick", `window.open('${data}');`);
//                     } else if (data == "none") {
//                         myArray[0].innerHTML = "NONE";
//                         myArray[0].setAttribute("onclick", `window.open('none');`);
//                     }
//                 })
//                 //Displaying App Category (TopStore) from Database
//                 socket.on('App'+a+'_TopStore', function(data) {
//                     if (data !== "none") {
//                         myArray[1].setAttribute("onclick", `window.open('${data}');`);
//                         myArray[1].innerHTML = "GET";
//                     } else if (data == "none") {
//                         myArray[1].innerHTML = "NONE";
//                         myArray[1].setAttribute("onclick", `window.open('none');`);
//                     }
//                 })
//                 //Displaying App Category (AppValley) from Database
//                 socket.on('App'+a+'_AppValley', function(data) {
//                     if (data !== "none") {
//                         myArray[2].innerHTML = "GET";
//                         myArray[2].setAttribute("onclick", `window.open('${data}');`);
//                     } else if (data == "none") {
//                         myArray[2].innerHTML = "NONE";
//                         myArray[2].setAttribute("onclick", `window.open('none');`);
//                     }
//                 })
//                 //Displaying App Category (Tweakbox) from Database
//                 socket.on('App'+a+'_Tweakbox', function(data) {
//                     if (data !== "none") {
//                         myArray[3].innerHTML = "GET";
//                         myArray[3].setAttribute("onclick", `window.open('${data}');`);
//                     } else if (data == "none") {
//                         myArray[3].innerHTML = "NONE";
//                         myArray[3].setAttribute("onclick", `window.open('none');`);
//                     }
//                 })
//             });
//         } //End of checking for verification
//     } else {
//         userid = 0;
//         var favlistcount = 0;
//         console.log("user logged out.");
//         // while (popularapps.firstChild) { popularapps.removeChild(popularapps.firstChild); }
//         socket.emit('appData3','value');
//         socket.on('appData3', function(data) { totalNumApps = (data); console.log(totalNumApps); })
//         userfav.innerHTML = ''

//         var i = 0;
//         socket.on('requestPopularApps3', function(data) {
//             var a = data;
//             i++;
//             function sortFunction(a, b) {
//                 if (a[1] === b[1]) {
//                     return 0;
//                 }
//                 else {
//                     return (a[1] > b[1]) ? -1 : 1;
//                 }
//             }

//             a.sort(sortFunction);
//             if (i == (totalNumApps-1)) { //Make sure that the list of apps is available in chronological order on the database, otherwise it won't work.
//                 createTag(a[1][0], "popular-apps");
//                 createTag(a[2][0], "popular-apps");
//                 createTag(a[3][0], "popular-apps");
//                 createTag(a[4][0], "popular-apps");
//             }
//         })

//         accountname.innerHTML = "Sign In";
//         accountinname.innerHTML = "Sign In";
//         signincontent.innerHTML = '<div class="content-block-title"><h1 class="text color-text-flow"> SIGN IN </h1></div><div class="card" style="margin-top: -5px"><div class="card-header">Login into BionikHub to gain more apps and features. </div><div class="list-block media-list"></div></div><div class="list-block inset" style="margin-top: -3px"><ul><!-- Text inputs --><li><div class="item-content"><div class="item-inner"><div class="item-title label">Email</div><div class="item-input"><input id="loginemail" type="email" placeholder="Enter Email"></div></div></div></li><li><div class="item-content"><div class="item-inner"><div class="item-title label">Password</div><div class="item-input"><input id="loginpassword" type="password" placeholder="Enter Password"></div></div></div></li></ul></div> <div id="inputquery2"></div><a href="#" class="tab-link"><i id="loginsignin" class="icon button button-fill button-big" style="margin-top: 0px; width: 100%;">Sign In</i></a><br><br><a href="#view-signup" href="#" class="tab-link"> <i class="icon button button-fill color-green button-big" style="margin-top: -5px; width: 100%;">Sign Up</i></a><a href="#view-1" id="clicker" class="tab-link"></a>';

//         var loginsignin = document.getElementById('loginsignin');
//         var loginemail = document.getElementById('loginemail');
//         var loginpassword = document.getElementById('loginpassword');
//         var inputquery2 = document.getElementById('inputquery2');

//         //Listener for button 'sign in' on the SIGN IN page
//         loginsignin.addEventListener('click', function() { console.log("check"); var usercred = []; var emailsignval = loginemail.value; var passwordsignval = loginpassword.value; usercred.push(emailsignval, passwordsignval); socket.emit('loginsignin',usercred); inputquery2.removeChild(inputquery2.lastChild); });  
//         var newsourceauth = document.getElementById('new-sourceauth');
//         newsourceauth.innerHTML = '';

//         //Event called when SIGNNING IN and when user is VALID
//         socket.on('signinuservalid', function(data) { loginemail.value = ""; loginpassword.value = ""; document.getElementById("clicker").click(); });


//             var sourcelimit = document.getElementById('source-limit')    

//             sourcelimit.innerHTML = '';


//         var myArray = [ignitionValue, topValue, valleyValue, boxValue];
//         //Retrieving data from database for App
//         socket.on('Number', function(data) {
//             a=data;

//             //Displaying App Name from Database
//             socket.on('App'+a+'_Name', function(data) {
//                 var appName1 = document.getElementById("appname_1")
//                 var appName2 = document.getElementById("appname_2")
//                 appName1.innerHTML = data;
//                 appName2.innerHTML = data;
//             })
//             //Displaying App Image from Database
//             socket.on('App'+a+'_Image', function(data) {
//                 var appImage = document.getElementById('frontimage')
//                 var att = document.createAttribute("srcset")
//                 att.value = data;
//                 appImage.setAttribute("srcset", att.value);
//             })
//             //Displaying App Description from Database
//             socket.on('App'+a+'_Description', function(data) {
//                 var appDescription = document.getElementById("description")
//                 appDescription.innerHTML = data;
//             })
//             //Displaying App Developer from Database
//             socket.on('App'+a+'_Developer', function(data) {
//                 var appDeveloper1 = document.getElementById("developer_1")
//                 var appDeveloper2 = document.getElementById("developer_2")
//                 appDeveloper1.innerHTML = data;
//                 appDeveloper2.innerHTML = data;
//             })
//             //Displaying App Version from Database
//             socket.on('App'+a+'_Version', function(data) {
//                 var appVersion = document.getElementById("version")
//                 appVersion.innerHTML = data;
//             })
//             //Displaying App Category from Database
//             socket.on('App'+a+'_Category', function(data) {
//                 var appCategory = document.getElementById("category")
//                 appCategory.innerHTML = data;
//             })
//             //Displaying App Size from Database
//             socket.on('App'+a+'_Size', function(data) {
//                 var appSize = document.getElementById("size")
//                 appSize.innerHTML = data;
//             })
//             //Displaying App Category (Ignition) from Database
//             socket.on('App'+a+'_Ignition', function(data) {
//                 if (data !== "none") {
//                     myArray[0].innerHTML = "GET";
//                     myArray[0].setAttribute("onclick", `window.open('${data}');`);
//                 } else if (data == "none") {
//                     myArray[0].innerHTML = "NONE";
//                     myArray[0].setAttribute("onclick", `window.open('none');`);
//                 }
//             })
//             //Displaying App Category (TopStore) from Database
//             socket.on('App'+a+'_TopStore', function(data) {
//                 if (data !== "none") {
//                     myArray[1].setAttribute("onclick", `window.open('${data}');`);
//                     myArray[1].innerHTML = "GET";
//                 } else if (data == "none") {
//                     myArray[1].innerHTML = "NONE";
//                     myArray[1].setAttribute("onclick", `window.open('none');`);
//                 }
//             })
//             //Displaying App Category (AppValley) from Database
//             socket.on('App'+a+'_AppValley', function(data) {
//                 if (data !== "none") {
//                     myArray[2].innerHTML = "GET";
//                     myArray[2].setAttribute("onclick", `window.open('${data}');`);
//                 } else if (data == "none") {
//                     myArray[2].innerHTML = "NONE";
//                     myArray[2].setAttribute("onclick", `window.open('none');`);
//                 }
//             })
//             //Displaying App Category (Tweakbox) from Database
//             socket.on('App'+a+'_Tweakbox', function(data) {
//                 if (data !== "none") {
//                     myArray[3].innerHTML = "GET";
//                     myArray[3].setAttribute("onclick", `window.open('${data}');`);
//                 } else if (data == "none") {
//                     myArray[3].innerHTML = "NONE";
//                     myArray[3].setAttribute("onclick", `window.open('none');`);
//                 }
//             })
//         });
//     }
// });


            // accountclick.addEventListener('click', async function() { 
            //     var favlist = document.getElementById('fav-list');
            //     favlist.innerHTML = " "; 
            //     async function run() {
            //     for (var i = 0; i < 7; i++) {
            //         await createTag(userfavdata[i], "fav-list");
            //     }
            //     }
            //     return run();
            // }); 


        userid = 0;
        var favlistcount = 0;


            var sourcelimit = document.getElementById('source-limit')    

            sourcelimit.innerHTML = '';





/*
FUNCTIONS AND LISTENGERS FOR AUTHENTICATION
*/
//Function associated with creating warning text for SIGNING IN page
function createTextSignIn(color, text) { var div = document.createElement('div'); var div2 = document.createElement('div'); div.className = "card"; div.style.marginTop = "-27px"; div2.className = "card-header"; div2.style.color = color; div2.innerHTML = text; inputquery2.appendChild(div); div.appendChild(div2); }
//Function associated with creating warning text for SIGNING UP page
function createText(color, text) { var div = document.createElement('div'); var div2 = document.createElement('div'); div.className = "card"; div.style.marginTop = "-27px"; div2.className = "card-header"; div2.style.color = color; div2.innerHTML = text; inputquery.appendChild(div); div.appendChild(div2); }
//Event called when SIGNNING IN and when user is INVALID
socket.on('signinuserinvalid', function(data) { if (data.message) { createTextSignIn("red", data.message); } });
// //Event called when SIGNNING IN and when user is VALID
// socket.on('signinuservalid', function(data) { loginemail.value = ""; loginpassword.value = ""; document.getElementById("clicker").click(); });
//Event called when SIGNNING UP and when user is INVALID
socket.on('userinvalid', function(data) { if (data.message) { createText("red", data.message); } });
//Event called when SIGNNING UP and when user is VALID
socket.on('uservalid', function(data) { emailinput.value = ""; passwordinput.value = ""; document.getElementById("clicker").click(); });
//Listener for button 'sign up' on the SIGN UP page
signinsubmit.addEventListener('click', function() { var emailval = emailinput.value; var passwordval = passwordinput.value; var usercred = []; usercred.push(emailval, passwordval); socket.emit('signindata',usercred); inputquery.removeChild(inputquery.lastChild); });


//Default properties of Home Page Navbar
homefont.style.color = "#1A72FF";
appsfont.style.color = "#FFFFFF ";
sourcesfont.style.color = "#FFFFFF";
searchfont.style.color = "#FFFFFF";

//Function that initiates removing tags
async function removeTags(i) {
    var catName = document.getElementById(myCatArray[i]);
    while (catName.firstChild) {
        await catName.removeChild(catName.lastChild);
    }
}
//Function that removes all the tags from Source/Categories/Apps Pages when exiting
function removetotalTags() {
for (var i = 0; i < (myCatArray.length); i++) {
    removeTags(i);
}
}
//Function that removes all the tags from Source/Categories/Apps Pages when exiting
function removetotalTags2() {
for (var i = 0; i < (myCatArray.length-1); i++) {
    removeTags(i);
}
}
//Showing button 
function show_backleft() {
backleft.style.visibility = 'visible';
}

//hiding back button
function hide() {
backleft.style.visibility = 'hidden';
}

//showing back button in category page
function show_backleftcat() {
backleftcat.style.visibility = 'visible';
counter = 1;
}

//showing back button in category page
function show_backleftsor() {
    backleftsor.style.visibility = 'visible';
    counter = 3;
}
    

//Making counter 2 to get back button to go back to view-4 (search)
function addSearch() {
counter = 2;
}

//Listening to event when pressing home navbar button
home.addEventListener('click', function() {
    home.className = 'tab-link active';
    apps.className = 'tab-link';
    stores.className = 'tab-link';
    updates.className = 'tab-link';
    search.className = 'tab-link';
    socket.emit('navbar-click/home-click','value');
    counterval = 0;
    counter = 0;
    homefont.style.color = "#1A72FF";
    appsfont.style.color = "#FFFFFF ";
    sourcesfont.style.color = "#FFFFFF";
    updatesfont.style.color = "#FFFFFF ";
    searchfont.style.color = "#FFFFFF";
    removetotalTags();
    hide();
    myApp = new Framework7({
        modalTitle:'TopStore'
    });
});
//Listening to event when pressing categories/apps navbar button
apps.addEventListener('click', function() {
    home.className = 'tab-link';
    apps.className = 'tab-link active';
    stores.className = 'tab-link';
    updates.className = 'tab-link';
    search.className = 'tab-link';
    socket.emit('navbar-click/apps-click','value');
    counterval = 0;
    counter = 0;
    homefont.style.color = "#FFFFFF";
    appsfont.style.color = "#1A72FF ";
    sourcesfont.style.color = "#FFFFFF";
    updatesfont.style.color = "#FFFFFF ";
    searchfont.style.color = "#FFFFFF";
    removetotalTags();
    hide();
});
//Listening to event when pressing stores/sources navbar button
stores.addEventListener('click', function() {
    home.className = 'tab-link';
    apps.className = 'tab-link';
    stores.className = 'tab-link active';
    updates.className = 'tab-link';
    search.className = 'tab-link';
    socket.emit('navbar-click/stores-click','value');
    counterval = 0;
    counter = 0;
    homefont.style.color = "#FFFFFF";
    appsfont.style.color = "#FFFFFF ";
    sourcesfont.style.color = "#1A72FF";
    updatesfont.style.color = "#FFFFFF ";
    searchfont.style.color = "#FFFFFF";
    removetotalTags();
    hide();
});
//Listening to event when pressing stores/sources navbar button
updates.addEventListener('click', function() {
    home.className = 'tab-link';
    apps.className = 'tab-link';
    stores.className = 'tab-link';
    updates.className = 'tab-link active';
    search.className = 'tab-link';
    socket.emit('navbar-click/updates-click','value');
    counterval = 0;
    counter = 0;
    homefont.style.color = "#FFFFFF";
    appsfont.style.color = "#FFFFFF ";
    sourcesfont.style.color = "#FFFFFF";
    updatesfont.style.color = "#1A72FF ";
    searchfont.style.color = "#FFFFFF";
    removetotalTags();
    hide();
});
//Listening to event when pressing search navbar button
search.addEventListener('click', function() {
    home.className = 'tab-link';
    apps.className = 'tab-link';
    stores.className = 'tab-link';
    updates.className = 'tab-link';
    search.className = 'tab-link active'
    socket.emit('navbar-click/search-click','value');
    counterval = 0;
    homefont.style.color = "#FFFFFF";
    appsfont.style.color = "#FFFFFF ";
    sourcesfont.style.color = "#FFFFFF";
    updatesfont.style.color = "#FFFFFF";
    searchfont.style.color = "#1A72FF";
    removetotalTags2();
    hide();
    appCatLoad3(0);
});

var app = []
var keyval;
for (var i = 0; i < (98); i++) {
    var b = 1;
    app.push(b)
}

socket.on('numkey', function(data) {
    keyval = data;

    if (app[keyval] == 1) {
        iconright.style.color = "#006efe";
    } else {
        iconright.style.color = "#808080";
    }
})

//Listener for back button event
iconright.addEventListener('click', function() { 
    if (app[keyval] == 1) { //The specific app has not been pressed for report
        iconright.style.color = "#808080";
        app[keyval] = 0;
        socket.emit("report-num", keyval) ;
        socket.emit('storeData/reportApp/app'+keyval+"-report", keyval) 
    } else {
        iconright.style.color = "#808080";     
    }
});

//Listener for back button event
backleft.addEventListener('click', function() {
    if (counter == 0) {
        hide();
        counterval = 0;
        return (counter = 0);
    } else if (counter == 1) {
        hide();
        counterval = 0;
        return (counter = 1);
    } else if (counter == 2) {
        hide();
        counterval = 0;
        return (counter = 2);
    } else if (counter == 3) {
        hide();
        counterval = 0;
        return (counter = 3);
    } 
});
//Listener for back button category event
backleftcat.addEventListener('click', function() {
    removetotalTags();
    hide();
    counter = 0;
    counterval = 0;
});

//Listener for back button source event
backleftsor.addEventListener('click', function() {
    removetotalTags();
    hide();
    counter = 0;
    counterval = 0;
});

//[DATABSE] Requesting bionik twitter data press
twitterbionik.addEventListener('click', function() {
    socket.emit('home-data/twitter/twitter-bionik-click','value');
});
//[DATABSE] Requesting djfeelofficial twitter data press
twitterdjfeel.addEventListener('click', function() {
    socket.emit('home-data/twitter/twitter-djfeelofficial-click','value');
});

//[DATABSE] Requesting ignition twitter data press
twitterignition.addEventListener('click', function() {
    socket.emit('home-data/source-list/ignition-twitter-click','value');
});
//[DATABSE] Requesting topstore twitter data press
twittertopstore.addEventListener('click', function() {
    socket.emit('home-data/source-list/topstore-twitter-click','value');
});
//[DATABSE] Requesting appvalley twitter data press
twitterappvalley.addEventListener('click', function() {
    socket.emit('home-data/source-list/appvalley-twitter-click','value');
});
//[DATABSE] Requesting tweakbox twitter data press
twittertweakbox.addEventListener('click', function() {
    socket.emit('home-data/source-list/tweakbox-twitter-click','value');
});
//[DATABSE] Requesting iosninja twitter data press
twitteriosninja.addEventListener('click', function() {
    socket.emit('home-data/source-list/iosninja-twitter-click','value');
});
//[DATABSE] Requesting coconutx twitter data press
twittercoconutx.addEventListener('click', function() {
    socket.emit('home-data/source-list/coconutx-twitter-click','value');
});
//[DATABSE] Requesting iosgods twitter data press
twitteriosgods.addEventListener('click', function() {
    socket.emit('home-data/source-list/iosgods-twitter-click','value');
});
//[DATABSE] Requesting flekstore twitter data press
twitterflekstore.addEventListener('click', function() {
    socket.emit('home-data/source-list/flekstore-twitter-click','value');
});
//[DATABSE] Requesting emus4u twitter data press
twitteremus4u.addEventListener('click', function() {
    socket.emit('home-data/source-list/emus4u-twitter-click','value');
});
//[DATABSE] Requesting iosemus twitter data press
twitteriosemus.addEventListener('click', function() {
    socket.emit('home-data/source-list/iosemus-twitter-click','value');
});

//[DATABSE] Requesting ToS Page data press
legalbutton.addEventListener('click', function() {
    backlefttos.style.visibility = 'visible';
    socket.emit('home-data/legal/legal-click','value');
});
//[DATABSE] Requesting Submission data press
submissionbutton.addEventListener('click', function() {
    socket.emit('home-data/submission/request-click','value');
});


