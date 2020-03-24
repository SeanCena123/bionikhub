//Init socket connection
var socket = io.connect();

//Array associated with the removal of tags
var myCatArray = ["Jailbreak", "Tweaked", "Entertainment", "Emulators", "Games", "Ignition", "TopStore", "AppValley", "Tweakbox", "IOSNinja", "CoconutX", "iOSGods", "Emus", "Emus4", "Flekstore"];

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
for (var i = 0; i < myCatArray.length; i++) {
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
    removetotalTags();
    hide();
});

var app = []
var keyval;
for (var i = 0; i < 98; i++) {
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


