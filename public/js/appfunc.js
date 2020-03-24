//Variables associated with clicking
var ignitionValue = document.getElementById('ignition-get')
var topValue = document.getElementById('top-get')
var valleyValue = document.getElementById('valley-get')
var boxValue = document.getElementById('box-get')
var ninjaValue = document.getElementById('ninja-get')
var cocoValue = document.getElementById('coco-get')
var godValue = document.getElementById('god-get')
var emusValue = document.getElementById('emus-get')
var emus4Value = document.getElementById('emus4-get')
var flekValue = document.getElementById('flek-get')
var refreshcount = 0;
var totalNumApps;

//Array associated with clicking
var label = ["Ignition", "TopStore", "AppValley", "Tweakbox", "IOSNinja", "CoconutX", "iOSGods", "Emus", "Emus4", "Flekstore"];

//Variables associated with Title Changing for Category Pages
var categoryname = document.getElementById('category-name');
var categorytitle = document.getElementById('category-title');
var categoryloc = document.getElementById('category-loc');

//Variables associated with Title Changing for Sources Pages
var categorynamesor = document.getElementById('category-name-sor');
var categorytitlesor = document.getElementById('category-title-sor');
var categorylocsor = document.getElementById('category-loc-sor');

//Variables associated with opening Category pages
var jailbreakopen = document.getElementById('jailbreak-open');
var tweakedopen = document.getElementById('tweaked-open');
var entertainmentopen = document.getElementById('entertainment-open');
var emulatorsopen = document.getElementById('emulators-open');
var gamesopen = document.getElementById('games-open');

//Variables associated with opening Source pages
var ignitionopen = document.getElementById('ignition-open');
var topstoreopen = document.getElementById('topstore-open');
var appvalleyopen = document.getElementById('appvalley-open');
var tweakboxopen = document.getElementById('tweakbox-open');
var iosninjaopen = document.getElementById('iosninja-open');
var coconutxopen = document.getElementById('coconutx-open');
var iosgodsopen = document.getElementById('iosgods-open');
var flekstoreopen = document.getElementById('flekstore-open');
var emus4uopen = document.getElementById('emus4u-open');
var iosemusopen = document.getElementById('iosemus-open');

//Variables associated with status of Sources
var statusignition = document.getElementById('status-ignition');
var statustopstore = document.getElementById('status-topstore');
var statusappvalley = document.getElementById('status-appvalley');
var statustweakbox = document.getElementById('status-tweakbox');
var statusiosninja = document.getElementById('status-iosninja');
var statuscoconutx = document.getElementById('status-coconutx');
var statusiosgods = document.getElementById('status-iosgods');
var statusflekstore = document.getElementById('status-flekstore');
var statusemus4u = document.getElementById('status-emus4u');
var statusiosemus = document.getElementById('status-iosemus');

var signedarr = ['statusignition', 'statustopstore', 'statusappvalley', 'statustweakbox', 'statusiosninja', 'statuscoconutx', 'statusiosgods', 'statusflekstore', 'statusemus4u', 'statusiosemus']
for (var i = 0; i < signedarr.length; i++) {
    socket.emit(signedarr[i], 'value');
}

socket.on('statusignition', function(data) {
        if (data == "signed") {
            statusignition.style.color = "#00ff00";
            statusignition.innerHTML = "Signed";
        } else if (data == "!signed") {
            statusignition.style.color = "#ff0000";
            statusignition.innerHTML = "Revoked";
        } else if (data == "unknown") {
            statusignition.style.color = "#808080";
            statusignition.innerHTML = "Unknown"; 
        }
})
socket.on('statustopstore', function(data) {
    if (data == "signed") {
        statustopstore.style.color = "#00ff00";
        statustopstore.innerHTML = "Signed";
    } else if (data == "!signed") {
        statustopstore.style.color = "#ff0000";
        statustopstore.innerHTML = "Revoked";
    } else if (data == "unknown") {
        statustopstore.style.color = "#808080";
        statustopstore.innerHTML = "Unknown"; 
    }
})
socket.on('statusappvalley', function(data) {
    if (data == "signed") {
        statusappvalley.style.color = "#00ff00";
        statusappvalley.innerHTML = "Signed";
    } else if (data == "!signed") {
        statusappvalley.style.color = "#ff0000";
        statusappvalley.innerHTML = "Revoked";
    } else if (data == "unknown") {
        statusappvalley.style.color = "#808080";
        statusappvalley.innerHTML = "Unknown"; 
    }
})
socket.on('statustweakbox', function(data) {
    if (data == "signed") {
        statustweakbox.style.color = "#00ff00";
        statustweakbox.innerHTML = "Signed";
    } else if (data == "!signed") {
        statustweakbox.style.color = "#ff0000";
        statustweakbox.innerHTML = "Revoked";
    } else if (data == "unknown") {
        statustweakbox.style.color = "#808080";
        statustweakbox.innerHTML = "Unknown"; 
    }
})
socket.on('statusiosninja', function(data) {
    if (data == "signed") {
        statusiosninja.style.color = "#00ff00";
        statusiosninja.innerHTML = "Signed";
    } else if (data == "!signed") {
        statusiosninja.style.color = "#ff0000";
        statusiosninja.innerHTML = "Revoked";
    } else if (data == "unknown") {
        statusiosninja.style.color = "#808080";
        statusiosninja.innerHTML = "Unknown"; 
    }
})
socket.on('statuscoconutx', function(data) {
    if (data == "signed") {
        statuscoconutx.style.color = "#00ff00";
        statuscoconutx.innerHTML = "Signed";
    } else if (data == "!signed") {
        statuscoconutx.style.color = "#ff0000";
        statuscoconutx.innerHTML = "Revoked";
    } else if (data == "unknown") {
        statuscoconutx.style.color = "#808080";
        statuscoconutx.innerHTML = "Unknown"; 
    }
})

socket.on('statusiosgods', function(data) {
    if (data == "signed") {
        statusiosgods.style.color = "#00ff00";
        statusiosgods.innerHTML = "Signed";
    } else if (data == "!signed") {
        statusiosgods.style.color = "#ff0000";
        statusiosgods.innerHTML = "Revoked";
    } else if (data == "unknown") {
        statusiosgods.style.color = "#808080";
        statusiosgods.innerHTML = "Unknown"; 
    }
})

socket.on('statusflekstore', function(data) {
    if (data == "signed") {
        statusflekstore.style.color = "#00ff00";
        statusflekstore.innerHTML = "Signed";
    } else if (data == "!signed") {
        statusflekstore.style.color = "#ff0000";
        statusflekstore.innerHTML = "Revoked";
    } else if (data == "unknown") {
        statusflekstore.style.color = "#808080";
        statusflekstore.innerHTML = "Unknown"; 
    }
})
socket.on('statusemus4u', function(data) {
    if (data == "signed") {
        statusemus4u.style.color = "#00ff00";
        statusemus4u.innerHTML = "Signed";
    } else if (data == "!signed") {
        statusemus4u.style.color = "#ff0000";
        statusemus4u.innerHTML = "Revoked";
    } else if (data == "unknown") {
        statusemus4u.style.color = "#808080";
        statusemus4u.innerHTML = "Unknown"; 
    }
})

socket.on('statusiosemus', function(data) {
    if (data == "signed") {
        statusiosemus.style.color = "#00ff00";
        statusiosemus.innerHTML = "Signed";
    } else if (data == "!signed") {
        statusiosemus.style.color = "#ff0000";
        statusiosemus.innerHTML = "Revoked";
    } else if (data == "unknown") {
        statusiosemus.style.color = "#808080";
        statusiosemus.innerHTML = "Unknown"; 
    }
})



//Variables associated with Category/Apps page (loading)
var CategoryArray = ["Jailbreak", "Tweaked", "Entertainment", "Emulators", "Games"]
var numberval;

//Variables associated with Source page (loading)
var CategoryArray2 = ["Ignition", "TopStore", "AppValley", "Tweakbox", "IOSNinja", "CoconutX", "iOSGods", "Flekstore", "Emus4", "Emus"];
var numberval2;

//Variables associated with Search page (loading)
var CategoryArray3 = ["search-apps"];
var numberval3;

//Function to run Category/Apps page
async function appCatLoad(num) {
    await socket.emit('num', num);
    numberval = num;
}
//Function to run Source page
async function appCatLoad2(num2) {
    await socket.emit('num2', num2);
    numberval2 = num2;
}
//Function to run Source page
async function appCatLoad3(num3) {
    await socket.emit('num3', num3);
    numberval3 = num3;
}
//Function that creates tags of apps
function createTag(loadnum, id) { 
    return new Promise(resolve => {      
        socket.emit('appNumber',loadnum);
        socket.emit('App'+loadnum+'_Name_View','value');
        socket.emit('App'+loadnum+'_Image_View','value');
        socket.emit('App'+loadnum+'_Category_View','value');
    
        var myLi = document.createElement("li");
        var myDiv = document.createElement("div");
        var myImg = document.createElement("img"); //
        var srcatt = document.createAttribute("srcset"); //
        var myA = document.createElement("a");
        var myem = document.createElement("em");
    
        var myDiv2 = document.createElement("div");
        var myDiv3 = document.createElement("div");
        var myDiv4 = document.createElement("div");
        var myDiv5 = document.createElement("div");
        var myDiv6 = document.createElement("div");
        
        var originalid = document.getElementById(id);
    
        myA.className = "tab-link";
        myA.href = "#view-app";

        myem.innerHTML = "GET";
        myem.className = "button button-fill button-round";
        myem.style.background = "#F0F1F6";
        myem.style.color = "#007AFF";
        myem.style.fontWeight = "bold";
        myem.setAttribute("onclick", `loadApp(${loadnum})`);
        
        myLi.className = "item-content";
        myDiv.className = "item-media";
        myDiv2.className = "item-inner";
        myDiv3.className = "item-title-row";
        myDiv4.className = "item-title";
        myDiv6.className = "app-subtitle";
    
        socket.on('App'+loadnum+'_Name_View', function(data) {
            myDiv4.innerHTML = data;
        })
        socket.on('App'+loadnum+'_Image_View', function(data) {
            srcatt.value = data;
            myImg.setAttribute("srcset", srcatt.value);
            resolve();
            
        })
        socket.on('App'+loadnum+'_Category_View', function(data) {
            myDiv6.innerHTML = data;
        })
        myDiv5.style.marginRight = "20px";
        myImg.className = "lazy-fadeIn lazy-loaded";
        myImg.width = "44"
    
        originalid.appendChild(myLi);
        myLi.appendChild(myDiv);
        myLi.appendChild(myDiv2);
        myDiv.appendChild(myImg);
        myDiv2.appendChild(myDiv3);
        myDiv3.appendChild(myDiv4);
        myDiv3.appendChild(myDiv5);
        myDiv5.appendChild(myA);
        myA.appendChild(myem)
        myDiv2.appendChild(myDiv6);
    });
}

//Requesting data from database to get data for app
function loadApp(a) {
    socket.emit('Number', a);
    socket.emit('numkey', a); //Listening for number for report app
    socket.emit('App'+a+'_Name','value');
    socket.emit('App'+a+'_Image','value');
    socket.emit('App'+a+'_Description','value');
    socket.emit('App'+a+'_Developer','value');
    socket.emit('App'+a+'_Version','value');
    socket.emit('App'+a+'_Category','value');
    socket.emit('App'+a+'_Size','value');
    socket.emit('App'+a+'_Ignition','value');
    socket.emit('App'+a+'_TopStore','value');
    socket.emit('App'+a+'_AppValley','value');
    socket.emit('App'+a+'_Tweakbox','value');
    socket.emit('App'+a+'_IOSNinja','value');
    socket.emit('App'+a+'_CoconutX','value');
    socket.emit('App'+a+'_iOSGods','value');
    socket.emit('App'+a+'_Emus','value');
    socket.emit('App'+a+'_Emus4','value');
    socket.emit('App'+a+'_Flekstore','value');

    /*
    Back button counter
    Counter = 0: Home Back Button
    Counter = 1: Category Back button
    Counter = 2: Search Back button
    */
    if (counter == 0) {
        backhref.href = "#view-1"; //Going back to homepage
        show_backleft();
    } else if (counter == 1) { //Going back to category page (specific to when opening) 
        show_backleft();
        backhref.href = "#view-5";
    } else if (counter == 2) { //Going back to search page
        show_backleft();
        backhref.href = "#view-4";
    } else if (counter == 3) { //Going back to sources page
        show_backleft();
        backhref.href = "#view-6";
    } 
}

//Sends request for total number of apps variable
socket.emit('appData','value');

socket.emit('requestPopularApps','value');

var i = 0;
socket.on('requestPopularApps', function(data) {
    var a = data;
    i++;
    function sortFunction(a, b) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] > b[1]) ? -1 : 1;
        }
    }
    a.sort(sortFunction);
    if (i == 9) { //Make sure that the list of apps is available in chronological order on the database, otherwise it won't work.
        createTag(a[1][0], "popular-apps");
        createTag(a[2][0], "popular-apps");
        createTag(a[3][0], "popular-apps");
        createTag(a[4][0], "popular-apps");
    }
})

//Listens for totalNumApps
socket.on('appData', function(data) {
    totalNumApps = (data);
})

//[DATABASE] Sending request to count view
if (refreshcount == 0) {
    socket.emit('storeData/refresh-counter','value');
    refreshcount = 1;
}
//[DATABASE] Sending request to count view (new socket connection)
socket.emit('storeData/view-counter','value');

    //[DATABASE] Requesting to database to count the click for Ignition Source
    ignitionValue.addEventListener('click', function() {
    socket.emit('ignition-num', a);
    });
    //[DATABASE] Requesting to database to count the click for TopStore Source
    topValue.addEventListener('click', function() {
    socket.emit('topstore-num', a);
    });
    //[DATABASE] Requesting to database to count the click for AppValley Source
    valleyValue.addEventListener('click', function() {
    socket.emit('appvalley-num', a);
    });
    //[DATABASE] Requesting to database to count the click for TweakBox Source
    boxValue.addEventListener('click', function() {
    socket.emit('tweakbox-num', a);
    });
    //[DATABASE] Requesting to database to count the click for IOSNinja Source
    ninjaValue.addEventListener('click', function() {
    socket.emit('iosninja-num', a);
    });
    //[DATABASE] Requesting to database to count the click for CoconutX Source
    cocoValue.addEventListener('click', function() {
    socket.emit('coconutx-num', a);
    });
    //[DATABASE] Requesting to database to count the click for IOSGods Source
    godValue.addEventListener('click', function() {
    socket.emit('iosgods-num', a);
    });
    //[DATABASE] Requesting to database to count the click for IOSEmus Source
    emusValue.addEventListener('click', function() {
    socket.emit('iosemus-num', a);
    });
    //[DATABASE] Requesting to database to count the click for Emus4u Source
    emus4Value.addEventListener('click', function() {
    socket.emit('emus4u-num', a);
    });
    //[DATABASE] Requesting to database to count the click for Flekstore Source
    flekValue.addEventListener('click', function() {
    socket.emit('flekstore-num', a);
    });

/*
CATEGORIES/APPS PAGE BUTTON LISTENERS
*/
//Listening for when clicking Jailbreak 'GET' at Category/Apps Page
jailbreakopen.addEventListener('click', function() { 
    categoryname.innerHTML = myCatArray[0];
    categorytitle.innerHTML = myCatArray[0];
    categoryloc.id = myCatArray[0];
    socket.emit('storeData/category-open/Jailbreak-open','value');
    show_backleftcat(); 
    appCatLoad(0); 
});
//Listening for when clicking Tweaked 'GET' at Category/Apps Page
tweakedopen.addEventListener('click', function() { 
    categoryname.innerHTML = myCatArray[1];
    categorytitle.innerHTML = myCatArray[1];
    categoryloc.id = myCatArray[1];
    socket.emit('storeData/category-open/Tweaked-open','value');
    show_backleftcat(); 
    appCatLoad(1); 
});
//Listening for when clicking Entertainment 'GET' at Category/Apps Page
entertainmentopen.addEventListener('click', function() { 
    categoryname.innerHTML = myCatArray[2];
    categorytitle.innerHTML = myCatArray[2];
    categoryloc.id = myCatArray[2];
    socket.emit('storeData/category-open/Entertainment-open','value');
    show_backleftcat(); 
    appCatLoad(2); 
});
//Listening for when clicking Emulator 'GET' at Category/Apps Page
emulatorsopen.addEventListener('click', function() { 
    categoryname.innerHTML = myCatArray[3];
    categorytitle.innerHTML = myCatArray[3];
    categoryloc.id = myCatArray[3];
    socket.emit('storeData/category-open/Emulators-open','value');
    show_backleftcat(); 
    appCatLoad(3); 
});
//Listening for when clicking Games/Other 'GET' at Category/Apps Page
gamesopen.addEventListener('click', function() { 
    categoryname.innerHTML = myCatArray[4];
    categorytitle.innerHTML = myCatArray[4];
    categoryloc.id = myCatArray[4];
    socket.emit('storeData/category-open/Games-open','value');
    show_backleftcat(); 
    appCatLoad(4); 
});
/*
SOURCES PAGE BUTTON LISTENERS
*/
//Listening for when clicking Ignition 'GET' at Source Page
ignitionopen.addEventListener('click', async function() { 
    categorynamesor.innerHTML = "Ignition";
    categorytitlesor.innerHTML = "Ignition";
    categorylocsor.id = "Ignition";
    socket.emit('storeData/source-open/Ignition-open','value');
    show_backleftsor(); 
    appCatLoad2(0);
});
//Listening for when clicking TopStore 'GET' at Source Page
topstoreopen.addEventListener('click', function() { 
    categorynamesor.innerHTML = "Top Store";
    categorytitlesor.innerHTML = "Top Store";
    categorylocsor.id = "TopStore";
    socket.emit('storeData/source-open/TopStore-open','value');
    show_backleftsor(); 
    appCatLoad2(1);
});
//Listening for when clicking AppValley 'GET' at Source Page
appvalleyopen.addEventListener('click', function() { 
    categorynamesor.innerHTML = "App Valley";
    categorytitlesor.innerHTML = "App Valley";
    categorylocsor.id = "AppValley";
    socket.emit('storeData/source-open/AppValley-open','value');
    show_backleftsor(); 
    appCatLoad2(2);
});
//Listening for when clicking Tweakbox 'GET' at Source Page
tweakboxopen.addEventListener('click', function() { 
    categorynamesor.innerHTML = "Tweakbox";
    categorytitlesor.innerHTML = "Tweakbox";
    categorylocsor.id = "Tweakbox";
    socket.emit('storeData/source-open/Tweakbox-open','value');
    show_backleftsor(); 
    appCatLoad2(3);
});
//Listening for when clicking IOSNinja 'GET' at Source Page
iosninjaopen.addEventListener('click', function() { 
    categorynamesor.innerHTML = "IOSNinja";
    categorytitlesor.innerHTML = "IOSNinja";
    categorylocsor.id = "IOSNinja";
    socket.emit('storeData/source-open/IOSNinja-open','value');
    show_backleftsor(); 
    appCatLoad2(4);
});
//Listening for when clicking CoconutX 'GET' at Source Page
coconutxopen.addEventListener('click', function() { 
    categorynamesor.innerHTML = "CoconutX";
    categorytitlesor.innerHTML = "CoconutX";
    categorylocsor.id = "CoconutX";
    socket.emit('storeData/source-open/CoconutX-open','value');
    show_backleftsor(); 
    appCatLoad2(5);
});
//Listening for when clicking IOSGods 'GET' at Source Page
iosgodsopen.addEventListener('click', function() { 
    categorynamesor.innerHTML = "IOSGods";
    categorytitlesor.innerHTML = "IOSGods";
    categorylocsor.id = "iOSGods";
    socket.emit('storeData/source-open/iOSGods-open','value');
    show_backleftsor(); 
    appCatLoad2(6);
});
//Listening for when clicking FlekStore 'GET' at Source Page
flekstoreopen.addEventListener('click', function() { 
    categorynamesor.innerHTML = "FlekStore";
    categorytitlesor.innerHTML = "FlekStore";
    categorylocsor.id = "Flekstore";
    socket.emit('storeData/source-open/Flekstore-open','value');
    show_backleftsor(); 
    appCatLoad2(7);
});
//Listening for when clicking Emus4u 'GET' at Source Page
emus4uopen.addEventListener('click', function() { 
    categorynamesor.innerHTML = "Emus4u";
    categorytitlesor.innerHTML = "Emus4u";
    categorylocsor.id = "Emus4";
    socket.emit('storeData/source-open/Emus4-open','value');
    show_backleftsor(); 
    appCatLoad2(8);
});
//Listening for when clicking IOSEmus 'GET' at Source Page
iosemusopen.addEventListener('click', function() { 
    categorynamesor.innerHTML = "IOSEmus";
    categorytitlesor.innerHTML = "IOSEmus";
    categorylocsor.id = "Emus";
    socket.emit('storeData/source-open/Emus-open','value');
    show_backleftsor(); 
    appCatLoad2(9);
});


//myArray is for retrieving source data for App
var myArray = [ignitionValue, topValue, valleyValue, boxValue, ninjaValue, cocoValue, godValue, emusValue, emus4Value, flekValue];

//Retrieving data from database for App
socket.on('Number', function(data) {
    a=data;

    //Displaying App Name from Database
    socket.on('App'+a+'_Name', function(data) {
        var appName1 = document.getElementById("appname_1")
        var appName2 = document.getElementById("appname_2")
        appName1.innerHTML = data;
        appName2.innerHTML = data;
    })
    //Displaying App Image from Database
    socket.on('App'+a+'_Image', function(data) {
        var appImage = document.getElementById('frontimage')
        var att = document.createAttribute("srcset")
        att.value = data;
        appImage.setAttribute("srcset", att.value);
    })
    //Displaying App Description from Database
    socket.on('App'+a+'_Description', function(data) {
        var appDescription = document.getElementById("description")
        appDescription.innerHTML = data;
    })
    //Displaying App Developer from Database
    socket.on('App'+a+'_Developer', function(data) {
        var appDeveloper1 = document.getElementById("developer_1")
        var appDeveloper2 = document.getElementById("developer_2")
        appDeveloper1.innerHTML = data;
        appDeveloper2.innerHTML = data;
    })
    //Displaying App Version from Database
    socket.on('App'+a+'_Version', function(data) {
        var appVersion = document.getElementById("version")
        appVersion.innerHTML = data;
    })
    //Displaying App Category from Database
    socket.on('App'+a+'_Category', function(data) {
        var appCategory = document.getElementById("category")
        appCategory.innerHTML = data;
    })
    //Displaying App Size from Database
    socket.on('App'+a+'_Size', function(data) {
        var appSize = document.getElementById("size")
        appSize.innerHTML = data;
    })
    //Displaying App Category (Ignition) from Database
    socket.on('App'+a+'_Ignition', function(data) {
        if (data !== "none") {
            myArray[0].innerHTML = "GET";
            myArray[0].setAttribute("onclick", `window.open('${data}');`);
        } else if (data == "none") {
            myArray[0].innerHTML = "NONE";
            myArray[0].setAttribute("onclick", `window.open('none');`);
        }
    })
    //Displaying App Category (TopStore) from Database
    socket.on('App'+a+'_TopStore', function(data) {
        if (data !== "none") {
            myArray[1].setAttribute("onclick", `window.open('${data}');`);
            myArray[1].innerHTML = "GET";
        } else if (data == "none") {
            myArray[1].innerHTML = "NONE";
            myArray[1].setAttribute("onclick", `window.open('none');`);
        }
    })
    //Displaying App Category (AppValley) from Database
    socket.on('App'+a+'_AppValley', function(data) {
        if (data !== "none") {
            myArray[2].innerHTML = "GET";
            myArray[2].setAttribute("onclick", `window.open('${data}');`);
        } else if (data == "none") {
            myArray[2].innerHTML = "NONE";
            myArray[2].setAttribute("onclick", `window.open('none');`);
        }
    })
    //Displaying App Category (Tweakbox) from Database
    socket.on('App'+a+'_Tweakbox', function(data) {
        if (data !== "none") {
            myArray[3].innerHTML = "GET";
            myArray[3].setAttribute("onclick", `window.open('${data}');`);
        } else if (data == "none") {
            myArray[3].innerHTML = "NONE";
            myArray[3].setAttribute("onclick", `window.open('none');`);
        }
    })
    //Displaying App Category (IOSNinja) from Database
    socket.on('App'+a+'_IOSNinja', function(data) {
        if (data !== "none") {
            myArray[4].innerHTML = "GET";
            myArray[4].setAttribute("onclick", `window.open('${data}');`);
        } else if (data == "none") {
            myArray[4].innerHTML = "NONE";
            myArray[4].setAttribute("onclick", `window.open('none');`);
        }
    })
    //Displaying App Category (CoconutX) from Database
    socket.on('App'+a+'_CoconutX', function(data) {
        if (data !== "none") {
            myArray[5].innerHTML = "GET";
            myArray[5].setAttribute("onclick", `window.open('${data}');`);
        } else if (data == "none") {
            myArray[5].innerHTML = "NONE";
            myArray[5].setAttribute("onclick", `window.open('none');`);
        }
    })
    //Displaying App Category (iOSGods) from Database
    socket.on('App'+a+'_iOSGods', function(data) {
        if (data !== "none") {
            myArray[6].innerHTML = "GET";
            myArray[6].setAttribute("onclick", `window.open('${data}');`);
        } else if (data == "none") {
            myArray[6].innerHTML = "NONE";
            myArray[6].setAttribute("onclick", `window.open('none');`);
        }
    })
    //Displaying App Category (Emus) from Database
    socket.on('App'+a+'_Emus', function(data) {
        if (data !== "none") {
            myArray[7].innerHTML = "GET";
            myArray[7].setAttribute("onclick", `window.open('${data}');`);
        } else if (data == "none") {
            myArray[7].innerHTML = "NONE";
            myArray[7].setAttribute("onclick", `window.open('none');`);
        }
    })
    //Displaying App Category (Emus4) from Database
    socket.on('App'+a+'_Emus4', function(data) {
        if (data !== "none") {
            myArray[8].innerHTML = "GET";
            myArray[8].setAttribute("onclick", `window.open('${data}');`);
        } else if (data == "none") {
            myArray[8].innerHTML = "NONE";
            myArray[8].setAttribute("onclick", `window.open('none');`);
        }
    })
    //Displaying App Category (Flekstore) from Database
    socket.on('App'+a+'_Flekstore', function(data) {
        if (data !== "none") {
            myArray[9].innerHTML = "GET";
            myArray[9].setAttribute("onclick", `window.open('${data}');`);
        } else if (data == "none") {
            myArray[9].innerHTML = "NONE";
            myArray[9].setAttribute("onclick", `window.open('none');`);
        }
    })
});

//Listening to request from database to createtag for Category/Apps page
socket.on('sent', function(data) {
    createTag(data, CategoryArray[numberval])
});
//Listening to request from database to createtag for Source page
socket.on('sent2', function(data) {
    createTag(data, CategoryArray2[numberval2])
});
//Listening to request from database to createtag for Search page
socket.on('sent3', function(data) {
    createTag(data, CategoryArray3[numberval3])
});