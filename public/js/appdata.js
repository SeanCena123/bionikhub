//Obtaining JSON Data
function myApp(appname, appdeveloper, appdescription, appversion, appcategory, appsize, imageget, ignitionget, topget, valleyget, boxget, ninjaget, cocoget, godget, flekget, emus4get, emusget) {
    // DELETE THIS BEFORE LAUNCH
    console.log(
    "    "+'"Name"'+" :",`"${appname}"`+",\n",
    "   "+'"Developer"'+" :", `"${appdeveloper}"`+",\n",
    "   "+'"Description"'+" :", `"${appdescription}"`+",\n",
    "   "+'"Version"'+" :", `"${appversion}"`+",\n",   
    "   "+'"Category"'+" :", `"${appcategory}"`+",\n",
    "   "+'"Size"'+" :", `"${appsize}"`+",\n",
    "   "+'"Image"'+" :", `"${imageget}"`+",\n",
    "   "+'"Ignition"'+" :", `"${ignitionget}"`+",\n",
    "   "+'"Top Store"'+" :", `"${topget}"`+",\n",
    "   "+'"App Valley"'+" :", `"${valleyget}"`+",\n",
    "   "+'"Tweakbox"'+" :", `"${boxget}"`+",\n",
    "   "+'"IOSNinja"'+" :", `"${ninjaget}"`+",\n",
    "   "+'"CoconutX"'+" :", `"${cocoget}"`+",\n",
    "   "+'"iOSGods"'+" :", `"${godget}"`+",\n",
    "   "+'"Flekstore"'+" :", `"${flekget}"`+",\n",
    "   "+'"Emus4"'+" :", `"${emus4get}"`+",\n",
    "   "+'"Emus"'+" :", `"${emusget}"`+"\n",
    );
}

function clicking(name, source) {
    var ref = firebase.database().ref('storeData/appGet/app-source-click/app'+name+'/app'+name+'-'+source+'');
    ref.transaction(function(currentClicks) {
      return (currentClicks || 0) + 1;
    });
}

function submitAppSourceTotal(num) {
    var ref = firebase.database().ref('storeData/appGet/app-source-get-total/'+'app'+num+'-total');
    ref.transaction(function(currentClicks) {
      return (currentClicks || 0) + 1;
    });      
}

function myFunction(a) {

    function appDatabaseLoad() {
        var appName1 = document.getElementById("appname_1")
        var appName2 = document.getElementById("appname_2")
        var appName3 = document.getElementById("appname_3")
        var appDeveloper1 = document.getElementById("developer_1")
        var appDeveloper2 = document.getElementById("developer_2")
        var appDescription = document.getElementById("description")
        var appVersion = document.getElementById("version")
        var appCategory = document.getElementById("category")
        var appSize = document.getElementById("size")
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

        var variable = "app"+a;

        var firebaseAppName = firebase.database().ref().child("appData/" + variable + "/Name");
        var firebaseAppDeveloper = firebase.database().ref().child("appData/" + variable + "/Developer");
        var firebaseAppDescription = firebase.database().ref().child("appData/" + variable + "/Description");
        var firebaseAppVersion = firebase.database().ref().child("appData/" + variable + "/Version");
        var firebaseAppCategory = firebase.database().ref().child("appData/" + variable + "/Category");
        var firebaseAppSize = firebase.database().ref().child("appData/" + variable + "/Size");
        var firebaseAppImage = firebase.database().ref().child("appData/" + variable + "/Image");
        var firebaseAppIgnition = firebase.database().ref().child("appData/" + variable + "/Ignition");
        var firebaseAppTopStore = firebase.database().ref().child("appData/" + variable + "/Top Store");
        var firebaseAppAppValley = firebase.database().ref().child("appData/" + variable + "/App Valley");
        var firebaseAppTweakbox = firebase.database().ref().child("appData/" + variable + "/Tweakbox");
        var firebaseAppIOSNinja = firebase.database().ref().child("appData/" + variable + "/IOSNinja");
        var firebaseAppCoconutX = firebase.database().ref().child("appData/" + variable + "/CoconutX");
        var firebaseAppIOSGods = firebase.database().ref().child("appData/" + variable + "/iOSGods");
        var firebaseAppEmus = firebase.database().ref().child("appData/" + variable + "/Emus");  
        var firebaseAppEmus4 = firebase.database().ref().child("appData/" + variable + "/Emus4");
        var firebaseAppFlekstore = firebase.database().ref().child("appData/" + variable + "/Flekstore");

        var appImage = document.getElementById('frontimage')
        var firebaseAppImage = firebase.database().ref().child("appData/" + variable + "/Image"); //This is the link of the image

        var att = document.createAttribute("srcset")

        firebaseAppImage.on('value', function(snapshot) { att.value = snapshot.val(); appImage.setAttribute("srcset", att.value); }) 

        firebaseAppName.on('value', function(snapshot) { appName1.innerHTML = snapshot.val(); })  
        firebaseAppName.on('value', function(snapshot) { appName2.innerHTML = snapshot.val(); }) 
        firebaseAppName.on('value', function(snapshot) { appName3.innerHTML = snapshot.val(); })   
        firebaseAppDeveloper.on('value', function(snapshot) { appDeveloper1.innerHTML = snapshot.val(); })  
        firebaseAppDeveloper.on('value', function(snapshot) { appDeveloper2.innerHTML = snapshot.val(); })  
        firebaseAppDescription.on('value', function(snapshot) { appDescription.innerHTML = snapshot.val(); })
        firebaseAppVersion.on('value', function(snapshot) { appVersion.innerHTML = snapshot.val(); })
        firebaseAppCategory.on('value', function(snapshot) { appCategory.innerHTML = snapshot.val(); })
        firebaseAppSize.on('value', function(snapshot) { appSize.innerHTML = snapshot.val(); })

        //When adding another source, put it in these arrays.
        var myArray = [ignitionValue, topValue, valleyValue, boxValue, ninjaValue, cocoValue, godValue, emusValue, emus4Value, flekValue];
        var myotherArray = [firebaseAppIgnition, firebaseAppTopStore, firebaseAppAppValley, firebaseAppTweakbox, firebaseAppIOSNinja, firebaseAppCoconutX, firebaseAppIOSGods, firebaseAppEmus, firebaseAppEmus4, firebaseAppFlekstore];
        var label = ["'Ignition'", "'TopStore'", "'AppValley'", "'TweakBox'", "'IOSNinja'", "'CoconutX'", "'IOSGod'", "'IOSEmus'", "'Emus4u'", "'Flekstore'"]

                function loadStore(value) {
                    myotherArray[value].on('value', function(snapshot) { 
                        if (snapshot.val() !== "none") {
                            myArray[value].setAttribute("onclick", `window.open('${snapshot.val()}'); clicking(${a}, ${label[value]}); submitAppSourceTotal(${a})`)
                            
                            // console.log(myArray[value])
                            console.log(myArray[value]+"has a value.")
                    } else if (snapshot.val() == "none") {
                        myArray[value].innerHTML = "NONE";
                        myArray[value].setAttribute("onclick", `clicking(${a}, ${label[value]});`)
                        console.log(myArray[value]+"doesn't have a value.")
                    }   
                    })
                }

                //Currently 7 stores available, if want to add another, make (t < amount+1) [Not counting from 0]
                for (var t = 0; t < 10; t++) {
                    loadStore(t);
                }
                
    }
    

    var delay = 100
    var myAppData = function meFunction() { 
        //o is equal = (how many apps on server + 1)
        for (o = 0; o < numApps; o++) {
            if (a==o) {
                appDatabaseLoad();
            } 
        } 
        if (a==98) {
            console.log(a);
            myApp(
                "Installer 5", //Name of App 
                "Sammy Guichelaar", //Developer of App
                "Installer is a new fully featured package manager for jailbroken devices on iOS 9 - 12. It differs from other package managers from its core to the UI.", //Description of App
                "5.0b8~2", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "//upload.wikimedia.org/wikipedia/commons/thumb/5/52/InstallerLogoLarge.png/220px-InstallerLogoLarge.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D1390", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==99) {
            console.log(a);
            myApp(
                "lwarb: Brawl Stars", //Name of App 
                "Unknown", //Developer of App
                "This a private server for Brawl Stars which allows for extra bonuses not given by the vanilla game.", //Description of App
                "20.8-3", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/95/d0/0f/95d00fbc-948c-2f03-0089-731ee870a1fb/AppIcon-0-1x_U007emarketing-0-85-220-0-6.png/230x0w.png 1x,https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/95/d0/0f/95d00fbc-948c-2f03-0089-731ee870a1fb/AppIcon-0-1x_U007emarketing-0-85-220-0-6.png/460x0w.png 2x,https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/95/d0/0f/95d00fbc-948c-2f03-0089-731ee870a1fb/AppIcon-0-1x_U007emarketing-0-85-220-0-6.png/690x0w.png 3x", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D1399", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DLwarb%2B%2528Brawl%2BStars%2BPrivate%2BServer%2529%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/598/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==100) {
            console.log(a);
            myApp(
                "Rebrawl: Brawl Stars", //Name of App 
                "Unknown", //Developer of App
                "https://ios.lwarb.com/ <br> Features: <br> -Unlimited resources <br> -All skins available <br> -All Brawlers available <br> -Dozen of maps <br> -Many more!", //Description of App
                "22.93-40", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/95/d0/0f/95d00fbc-948c-2f03-0089-731ee870a1fb/AppIcon-0-1x_U007emarketing-0-85-220-0-6.png/230x0w.png 1x,https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/95/d0/0f/95d00fbc-948c-2f03-0089-731ee870a1fb/AppIcon-0-1x_U007emarketing-0-85-220-0-6.png/460x0w.png 2x,https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/95/d0/0f/95d00fbc-948c-2f03-0089-731ee870a1fb/AppIcon-0-1x_U007emarketing-0-85-220-0-6.png/690x0w.png 3x", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F1649%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DReBrawl%2B%2528Brawl%2BStars%2BPrivate%2BServer%2529%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==101) {
            console.log(a);
            myApp(
                "iSpoofer for PokeGo", //Name of App 
                "Nianticlabs", //Developer of App
                "FREE Teleport, and SO MUCH MORE.", //Description of App
                "3.2.0", //Version of App
                "Tweaked", //Category of App
                "104.47MB", //Size of App
                "https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/df/eb/8e/dfeb8e82-884f-9b1f-0e5b-91f10224ce01/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-9.png/230x0w.png 1x,https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/df/eb/8e/dfeb8e82-884f-9b1f-0e5b-91f10224ce01/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-9.png/460x0w.png 2x,https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/df/eb/8e/dfeb8e82-884f-9b1f-0e5b-91f10224ce01/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-9.png/690x0w.png 3x", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D1400", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1223171621.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F1329%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fiosninja.io%2Fplist%2Fin%2Fa106%2Fispoofer.plist", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DiSpoofer%2BPokeGo%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/623/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "https://iosem.us/app/install-screen/pokego2.html" //IOSEmus Link
                )
        } else if (a==102) {
            console.log(a);
            myApp(
                "Pandora++", //Name of App 
                "Pandora Media, Inc.", //Developer of App
                "Pandora gives you a personalized music experience that continually evolves with your tastes. <br> Create stations from your favorite songs, artists or genres. Or search browse to find recommended stations for your mood or activity.", //Description of App
                "8.6", //Version of App
                "Tweaked", //Category of App
                "68.95MB", //Size of App
                "https://topstore.vip/image/1026144440.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1026144440.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DPandora%252B%252B%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==103) {
            console.log(a);
            myApp(
                "NBA App++", //Name of App 
                "Unknown", //Developer of App
                "Watch Games Live or On-Demand on Any Device. Sign Up For NBA League Pass Today! Watch on Any Device,Audio Broadcasts.", //Description of App
                "7.0530", //Version of App
                "Tweaked", //Category of App
                "61.83MB", //Size of App
                "https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/af/58/26/af58262d-440f-d594-205c-dbef06f1c206/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.png 1x,https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/af/58/26/af58262d-440f-d594-205c-dbef06f1c206/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/460x0w.png 2x,https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/af/58/26/af58262d-440f-d594-205c-dbef06f1c206/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/690x0w.png 3x", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1025135713.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DNBA%2BApp%252B%252B%26from%3Dts", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==104) {
            console.log(a);
            myApp(
                "Cute CUT Pro", //Name of App 
                "YU BO", //Developer of App
                "Hack Features: <br> - Upgrade to Account Pro", //Description of App
                "1.8.6", //Version of App
                "Tweaked", //Category of App
                "38.35MB", //Size of App
                "https://topstore.vip/image/912155741.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/912155741.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DCute%2BCut%2BPro%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==105) {
            console.log(a);
            myApp(
                "iNuclearApp", //Name of App 
                "iNuclearApp Team", //Developer of App
                "iNuclearApp is the World's #1 Fastest and Most Reliable Virtual iPhone that provides game-changing features (such as the ability to create a virtual jailbreak, etc) and we update our app weekly by pushing a OTA update (Over-The-Air) meaning that there is no need to update manually. It all updates in the background without you even having to press a button.", //Description of App
                "1.4", //Version of App
                "Tweaked", //Category of App
                "45.84MB", //Size of App
                "https://topstore.vip/image/1024122223.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1024122223.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DiNuclearApp%26from%3Dts", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==106) {
            console.log(a);
            myApp(
                "Chimera Jailbreak IOS 12", //Name of App 
                "Electra Team", //Developer of App
                "Chimera jailbreak is a jailbreak tool for iOS 12 devices that also supports A12 devices such as iPhone XS, iPhone XR, and the newest iPads.", //Description of App
                "1.3.9", //Version of App
                "Jailbreak", //Category of App
                "65MB", //Size of App
                "https://topstore.vip/image/528202654.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D1356", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/528202654.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F1589%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DChimera%2BJailbreak%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/ch.plist", //Emus4u Link
                "https://iosem.us/app/install-screen/cjb.html" //IOSEmus Link
                )
        } else if (a==107) {
            console.log(a);
            myApp(
                "LazyMan", //Name of App 
                "Unknown", //Developer of App
                "NHL & MLB Streamer.", //Description of App
                "1.0.1", //Version of App
                "Tweaked", //Category of App
                "53.05MB", //Size of App
                "https://topstore.vip/image/323222789.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D186", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/323222789.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F1252%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DLazyMan%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/141/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==108) {
            console.log(a);
            myApp(
                "ChiaSeNhac+", //Name of App 
                "MtTuanit", //Developer of App
                "Chiasenhac+ No Ads version <br> The best lossless app VietNam!!", //Description of App
                "1.1.0", //Version of App
                "Tweaked", //Category of App
                "116.83 MB", //Size of App
                "https://topstore.vip/image/323222790.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/323222790.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DChiaSeNhac%252B%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==109) {
            console.log(a);
            myApp(
                "VK 2", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "2.15.3", //Version of App
                "Tweaked", //Category of App
                "20.32 MB", //Size of App
                "https://topstore.vip/image/323222794.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/323222794.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp-valley.vip%2Fapp%2Fplists%2F1075%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DVK%2B2%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==110) {
            console.log(a);
            myApp(
                "AeroTV", //Name of App 
                "AERO LIVE TV", //Developer of App
                "AeroTV is a wonderful app that lets you watch live tv on your iOS devices for free.", //Description of App
                "1.0", //Version of App
                "Tweaked", //Category of App
                "34.28MB", //Size of App
                "https://topstore.vip/image/1025220902.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D3", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1025220902.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F36%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DAeroTV%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==111) {
            console.log(a);
            myApp(
                "Play Box HD", //Name of App 
                "Playbox", //Developer of App
                "PlayBox Technology is an international communications and information-technology company serving the broadcast and corporate sectors in more than 120 countries. PlayBox Technology is dedicated to the research, design, development and provision of the best products, systems, solutions and services. Over 18,000 TV and branding channels are powered by PlayBox Technology, broadcast solutions.", //Description of App
                "1.3", //Version of App
                "Tweaked", //Category of App
                "6.26MB", //Size of App
                "https://macworldzfd.files.wordpress.com/2016/08/playbox-hd-icon.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1026144605.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp-valley.vip%2Fapp%2Fplists%2F113%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DPlay%2BBox%2BHD%26from%3Dts", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==112) {
            console.log(a);
            myApp(
                "Sileo", //Name of App 
                "GetSileo", //Developer of App
                "A proper APT Package Manager for jailbroken iOS 11 and up.", //Description of App
                "1.2.6b2", //Version of App
                "Jailbreak", //Category of App
                "2.89MB", //Size of App
                "https://topstore.vip/image/323222888.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D386", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/323222888.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DSileo%26from%3Dse", //CoconutX Link
                "itms-services://?action=download-manifest&url=https://app.iosgods.com/store/installApp/777-sileo%3Ftoken%3DeyJpdiI6InhkV3RHM2QxR3ZYSTRFcm1EU1R3Tmc9PSIsInZhbHVlIjoiZ1ZNSUVydFFaNXNKbWJHbzA0SWtRSUh6SEthOFlOSWswTnczZUhiWVwvZU94ODhTaEVLdnBUNFRnZmN2Z0pYYlRFNFZ3QTk1RnI3dDJheEVXbldOTm5zMVdHZU91bGNYTnJXc2NUS2Voc3pmXC9rXC91bjNJa3o3Mm5Ca1pVNTlKYWliNHRKMUd3WXFjdUVJekU5WWxjTWtBPT0iLCJtYWMiOiI5MTg5NmIzOGFkMGYyNGNjNjQyZTZiZWFiYTk4MDZmNTVlZGVlOWMxMjI5MDU3ZjUxN2MxNmQxMDhhNDdjOGJiIn0%253D", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==113) {
            console.log(a);
            myApp(
                "aPhim", //Name of App 
                "aPhim", //Developer of App
                "Free tv.", //Description of App
                "1.0.6n", //Version of App
                "Tweaked", //Category of App
                "35.79MB", //Size of App
                "https://topstore.vip/image/323222775.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1026144626.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DaPhim%26from%3Dts", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==114) {
            console.log(a);
            myApp(
                "aPhim+", //Name of App 
                "MtTuanit", //Developer of App
                "The best movie vietnam hack no ads.", //Description of App
                "1.0.13", //Version of App
                "Tweaked", //Category of App
                "39.77 MB", //Size of App
                "https://topstore.vip/image/323222775.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/323222775.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https://app.app-valley.vip/plists/517/install.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DaPhim%252B%2Bby%2BMtTuanit%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==115) {
            console.log(a);
            myApp(
                "KineMaster Hack", //Name of App 
                "NexStreaming USA, Inc", //Developer of App
                "Hack Features: <br> - PREMIUM", //Description of App
                "4.10.2", //Version of App
                "Tweaked", //Category of App
                "111.8MB", //Size of App
                "https://topstore.vip/image/818152328.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/818152328.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F1643%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DKineMaster%25C2%25A0Hack%26from%3Dts", //CoconutX Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F1643%2Finstall.plist", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/618/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==116) {
            console.log(a);
            myApp(
                "Sing!++", //Name of App 
                "Smule", //Developer of App
                "Hack Features: <br> - PREMI?UM", //Description of App
                "7.8.1", //Version of App
                "Tweaked", //Category of App
                "58MB", //Size of App
                "https://topstore.vip/image/1209022133.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1209022133.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https://app.app-valley.vip/plists/254/install.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DSing%2521%252B%252B%26from%3Dts", //CoconutX Link
                "itms-services://?action=download-manifest&url=https://app.iosgods.com/store/installApp/108-smule-the-1-singing-app-modded%3Ftoken%3DeyJpdiI6InhkV3RHM2QxR3ZYSTRFcm1EU1R3Tmc9PSIsInZhbHVlIjoiZ1ZNSUVydFFaNXNKbWJHbzA0SWtRSUh6SEthOFlOSWswTnczZUhiWVwvZU94ODhTaEVLdnBUNFRnZmN2Z0pYYlRFNFZ3QTk1RnI3dDJheEVXbldOTm5zMVdHZU91bGNYTnJXc2NUS2Voc3pmXC9rXC91bjNJa3o3Mm5Ca1pVNTlKYWliNHRKMUd3WXFjdUVJekU5WWxjTWtBPT0iLCJtYWMiOiI5MTg5NmIzOGFkMGYyNGNjNjQyZTZiZWFiYTk4MDZmNTVlZGVlOWMxMjI5MDU3ZjUxN2MxNmQxMDhhNDdjOGJiIn0%253D", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==117) {
            console.log(a);
            myApp(
                "Pandora", //Name of App 
                "Pandora Media, Inc", //Developer of App
                "Pandora gives you a personalized music experience that continually evolves with your tastes.", //Description of App
                "8.4.1", //Version of App
                "Tweaked", //Category of App
                "67.34MB", //Size of App
                "https://topstore.vip/image/914190120.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/914190120.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DPandora%252B%252B%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==118) {
            console.log(a);
            myApp(
                "Surge", //Name of App 
                "Unknown", //Developer of App
                "Watch live TV channels on iOS.", //Description of App
                "1.0.1", //Version of App
                "Tweaked", //Category of App
                "34.72MB", //Size of App
                "https://topstore.vip/image/1015145543.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D164", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1015145543.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DSurge%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==119) {
            console.log(a);
            myApp(
                "Flickjoy", //Name of App 
                "Unknown", //Developer of App
                "Watch free movies on iOS.", //Description of App
                "1.0", //Version of App
                "Tweaked", //Category of App
                "2.39MB", //Size of App
                "https://topstore.vip/image/914191705.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D51", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/914191705.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DFlickjoy%26from%3Dts", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==120) {
            console.log(a);
            myApp(
                "Live Wire", //Name of App 
                "Unknown", //Developer of App
                "Watch live TV channels on iOS.", //Description of App
                "1.5.1", //Version of App
                "Tweaked", //Category of App
                "16.99MB", //Size of App
                "https://topstore.vip/image/1015144045.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D99", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1015144045.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https://app.app-valley.vip/plists/1287/install.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DLive%2BWire%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==121) {
            console.log(a);
            myApp(
                "CinemaBox", //Name of App 
                "Unknown", //Developer of App
                "Watch movies on iOS.", //Description of App
                "1.1", //Version of App
                "Tweaked", //Category of App
                "10.03MB", //Size of App
                "https://topstore.vip/image/1015140214.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1015140214.plist", //Topstore Link
                "https://app-valley.vip/app/install_pages/app.php?ipaid=111", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DCinemaBox%26from%3Dts", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==122) {
            console.log(a);
            myApp(
                "CinemaBox PB++", //Name of App 
                "Unknown", //Developer of App
                "Watch movies and TV Shows on IOS & No Ads.", //Description of App
                "1.1", //Version of App
                "Tweaked", //Category of App
                "10.03MB", //Size of App
                "https://topstore.vip/image/1015140214.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DCinemabox%2Bpb%252B%252B%26from%3Dts", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==123) {
            console.log(a);
            myApp(
                "Mimo++", //Name of App 
                "Mimohello GmbH", //Developer of App
                "Sorry, this app is not supported on ios11.", //Description of App
                "3.2", //Version of App
                "Tweaked", //Category of App
                "27.31MB", //Size of App
                "https://i.pinimg.com/236x/d9/8e/19/d98e191f0bf167b32b6552dbf7df15c9.jpg", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1026144952.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp-valley.vip%2Fapp%2Fplists%2F96%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DMimo%252B%252B%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==124) {
            console.log(a);
            myApp(
                "Tweetbot4++", //Name of App 
                "Tapbots", //Developer of App
                "Tweetbot 4 is a new, universal app for iPhone and iPad. The iPhone version isn?t wildly different to 2013?s Tweetbot 3 ? there are some swish new animations, a redesigned profile page, and a landscape mode, but it?s more or less the same experience.", //Description of App
                "4.6.2", //Version of App
                "Tweaked", //Category of App
                "4.58MB", //Size of App
                "https://topstore.vip/image/1025221050.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1025221050.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DTweetbot4%252B%252B%26from%3Dts", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==125) {
            console.log(a);
            myApp(
                "MusicJunkie", //Name of App 
                "musicjunkie", //Developer of App
                "Sorry, this app is not supported on ios11.", //Description of App
                "2.0b4", //Version of App
                "Tweaked", //Category of App
                "3.09MB", //Size of App
                "https://ipas.fun/images/musicjunkie.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D117", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1026144731.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DMusicJunkie%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==126) {
            console.log(a);
            myApp(
                "Badoo Premium", //Name of App 
                "Badoo Software Ltd", //Developer of App
                "Bandoo is the worlds largest dating network, with over 400 million users and counting. Countless poeple use it every day around the world to chat, date, meet and flirt.", //Description of App
                "5.137.2", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://i.imgur.com/U4Bvh9C.jpg", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F43%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DBadoo%2BPremium%26from%3Dse2", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/166/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==127) {
            console.log(a);
            myApp(
                "GeoSetter IOS 12", //Name of App 
                "Jake James", //Developer of App
                "GeoSetter for IOS 12 is a free tool to set nonce on your Apple device.", //Description of App
                "1.0", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://i.imgur.com/778kebU.jpg", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D1369", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DGeoSetter%2Bfor%2BiOS%2B12%26from%3Dse2", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/622/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==128) {
            console.log(a);
            myApp(
                "GeoFilza IOS 12", //Name of App 
                "FCE365", //Developer of App
                "IOS 12 jailed Filza. Access the root filesystem on IOS 12.", //Description of App
                "3.6", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://i.imgur.com/9K4JUuJ.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D1368", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F1559%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DGeoFilza%2BiOS%2B12%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/334/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==129) {
            console.log(a);
            myApp(
                "Duet Display", //Name of App 
                "Rahul Dewan", //Developer of App
                "Duet turns your iPad or iPhone into the most advanced extra display for your MAC & PC.", //Description of App
                "2.2.0", //Version of App
                "Tweaked", //Category of App
                "31.83MB", //Size of App
                "https://i.imgur.com/KwxDFxz.jpg", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D260", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/323222903.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F58%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DDuet%2BDisplay%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/148/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==130) {
            console.log(a);
            myApp(
                "LiveScore++", //Name of App 
                "eskaseptian", //Developer of App
                "Features: <br> -No Ads", //Description of App
                "3.1.1", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://i.imgur.com/mm0QOkf.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DLiveScore%252B%26from%3Dse2", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/591/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==131) {
            console.log(a);
            myApp(
                "putBol24++", //Name of App 
                "eskaseptian", //Developer of App
                "Features: <br> -No Ads", //Description of App
                "4.5.9", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://i.imgur.com/BGMO3i2.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DPutBol24%252B%26from%3Dse2", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/592/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==132) {
            console.log(a);
            myApp(
                "123 Movies", //Name of App 
                "D&D Studio", //Developer of App
                "Stream and watch movies directly from your iPhone or iPad.", //Description of App
                "1.0", //Version of App
                "Entertainment", //Category of App
                "Unknown", //Size of App
                "https://lh3.googleusercontent.com/fRPXSLwG_KpON-DEc1fGFMIuiiNFalJo27-KzEMVuTf6cfwgxPu7xIcdGTSZ9dY7JB4i", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D1", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==133) {
            console.log(a);
            myApp(
                "AirFloat", //Name of App 
                "Trenskow", //Developer of App
                "Play music from your Mac via AirPlay on your iOS Device.", //Description of App
                "1.3.2", //Version of App
                "Entertainment", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/airfloat.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D4", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DAirFloat%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==134) {
            console.log(a);
            myApp(
                "AudioTube", //Name of App 
                "Ricardo Ramos", //Developer of App
                "iOS Music Player.", //Description of App
                "1.7", //Version of App
                "Entertainment", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/audiotube.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D7", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==135) {
            console.log(a);
            myApp(
                "TV Stream Pro", //Name of App 
                "Tiago Martinho", //Developer of App
                "The easiest way to watch television on all your Apple devices <br> Imagine a television which allows you to watch every channel in the world...", //Description of App
                "9.1", //Version of App
                "Entertainment", //Category of App
                "Unknown", //Size of App
                "https://is2-ssl.mzstatic.com/image/thumb/Purple113/v4/be/fc/eb/befcebf5-7a7e-d9de-2dda-03bd1e9b70fb/source/512x512bb.jpg", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D215", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F902%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DTV%2BStreams%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==136) {
            console.log(a);
            myApp(
                "ClassicPlayer", //Name of App 
                "Guillermo Morán (fr0st)", //Developer of App
                "Compatible with iOS 9, 10 and 11 <br> ClassicPlayer - The Clickwheel Music Player.", //Description of App
                "1.0.3", //Version of App
                "Entertainment", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/classicplayer.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D25", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==137) {
            console.log(a);
            myApp(
                "Kodi Jarvis", //Name of App 
                "Unknown", //Developer of App
                "None.", //Description of App
                "1.0", //Version of App
                "Entertainment", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/kodi_jarvis.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D93", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DKodi%2B16%2BJarvis%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/kodi.plist", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==138) {
            console.log(a);
            myApp(
                "Kodi Krypton 32bit", //Name of App 
                "Unknown", //Developer of App
                "None.", //Description of App
                "1.0", //Version of App
                "Entertainment", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/kodi_krypton_32bit.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D94", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==139) {
            console.log(a);
            myApp(
                "Kodi Legacy", //Name of App 
                "Unknown", //Developer of App
                "None.", //Description of App
                "1.0", //Version of App
                "Entertainment", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/kodi_legacy.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D96", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==140) {
            console.log(a);
            myApp(
                "Kodi Leia 32bit", //Name of App 
                "Unknown", //Developer of App
                "None.", //Description of App
                "1.0", //Version of App
                "Entertainment", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/kodi_leia_32bit.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D97", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==141) {
            console.log(a);
            myApp(
                "MIXTAPE PLAYER", //Name of App 
                "Unknown", //Developer of App
                "None.", //Description of App
                "1.0", //Version of App
                "Entertainment", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/mixtape_player.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D109", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==142) {
            console.log(a);
            myApp(
                "Music Pocket", //Name of App 
                "Unknown", //Developer of App
                "None.", //Description of App
                "1.0", //Version of App
                "Entertainment", //Category of App
                "8.0MB", //Size of App
                "https://ipas.fun/images/music_pocket.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D115", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==143) {
            console.log(a);
            myApp(
                "SetBeat", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Entertainment", //Category of App
                "None", //Size of App
                "https://ipas.fun/images/seatbeat.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D150", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==144) {
            console.log(a);
            myApp(
                "StreamerTV", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Entertainment", //Category of App
                "15.0MB", //Size of App
                "https://ipas.fun/images/streamertv.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D163", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==145) {
            console.log(a);
            myApp(
                "Halow TV", //Name of App 
                "kakaswr22", //Developer of App
                "TV Shows for free! <br> -Any request for new channels contact: -Twitter: @HalowTv <br> -Facebook: HalowTV <br> -Uploader: kakaswr22", //Description of App
                "1.0", //Version of App
                "Entertainment", //Category of App
                "15.63MB", //Size of App
                "https://ipas.fun/images/halow_tv.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D184", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DHalowTV%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==146) {
            console.log(a);
            myApp(
                "Halow TV (New)", //Name of App 
                "kakaswr22", //Developer of App
                "TV Shows for free! <br> -Any request for new channels contact: -Twitter: @HalowTv <br> -Facebook: HalowTV <br> -Uploader: kakaswr22", //Description of App
                "2.0", //Version of App
                "Entertainment", //Category of App
                "20MB", //Size of App
                "https://ipas.fun/images/halow_tv.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DHalow%2BTV%2B%2528new%2529%26from%3Dse2", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==147) {
            console.log(a);
            myApp(
                "Anime Slayer", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Entertainment", //Category of App
                "Unknown", //Size of App
                "https://image.winudf.com/v2/image/a2FpdG8uYXNfaWNvbl9qMXRlYnlocQ/icon.png?w=170&fakeurl=1&type=.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D318", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==148) {
            console.log(a);
            myApp(
                "Comic Box++", //Name of App 
                "Unknown", //Developer of App
                "The Best Viewer. Enjoy a seamless reading experience & customize it any way you want. Offline reading. Donwload any manga back to your device & read later without constant internet connection.", //Description of App
                "1.3.3", //Version of App
                "Entertainment", //Category of App
                "20.5MB", //Size of App
                "https://is2-ssl.mzstatic.com/image/thumb/Purple118/v4/36/46/f8/3646f85f-1fbc-297f-e9bf-368d48f828ac/AppIcon-0-1x_U007emarketing-0-0-85-220-0-10.png/246x0w.jpg", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D322", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F1520%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3Dnull%26from%3Dname%3DComic%2BBox", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==149) {
            console.log(a);
            myApp(
                "SportsTV", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "2.0", //Version of App
                "Entertainment", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/scummvm.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D304", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==150) {
            console.log(a);
            myApp(
                "KaKaManga", //Name of App 
                "KakaMangaOnline", //Developer of App
                "KakaManga is a free go-to app for all your manga reading needs. It provides access to an extensive catalogue of the most popular Manga titles available. You can discover, read manga with the best collection: Lasted Manga, Hot Manga, New Manga, Completed Manga.", //Description of App
                "1.0.6", //Version of App
                "Entertainment", //Category of App
                "4.8MB", //Size of App
                "https://content.app-valley.vip/icon/1662.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D1403", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F1646%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DKakaManga%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "https://iosem.us/app/install-screen/kakamanga.html" //IOSEmus Link
                )
        } else if (a==151) {
            console.log(a);
            myApp(
                "Sound Joc", //Name of App 
                "@soundjoc", //Developer of App
                "None", //Description of App
                "9.0.0", //Version of App
                "Entertainment", //Category of App
                "Unknown", //Size of App
                "https://pbs.twimg.com/profile_images/1144399486820724736/65SfGIxr_400x400.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D347", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==152) {
            console.log(a);
            myApp(
                "NineAnimator", //Name of App 
                "nuclearmarcus", //Developer of App
                "Features: <br> Support 9anime.ru, masterani.me, gogoanime.io, and twist.moe <br> Handoff & Siri Shortcuts", //Description of App
                "1.1b6", //Version of App
                "Entertainment", //Category of App
                "100.0MB", //Size of App
                "https://ipas.fun/images/nineanimator.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D379", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DNineAnimator%26from%3Dse2", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==153) {
            console.log(a);
            myApp(
                "HentaiGlare", //Name of App 
                "HentaiGlare", //Developer of App
                "By downloading this app you agree that you are above the age of 18 and concent to seeing the apps contents. <br> We do not take any responsibility for the app or what is viewed, act responsibly.", //Description of App
                "1.0.2", //Version of App
                "Entertainment", //Category of App
                "Unknown", //Size of App
                "https://pbs.twimg.com/profile_images/1173747322049765377/bNYryGU3_400x400.jpg", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D1407", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==154) {
            console.log(a);
            myApp(
                "C64.emu", //Name of App 
                "Unknown", //Developer of App
                "None.", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/c64.emu.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D15", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==155) {
            console.log(a);
            myApp(
                "Delta", //Name of App 
                "Riley Testut", //Developer of App
                "Emulator for Nintendo 64, Game Boy, GBA and more.", //Description of App
                "8.1", //Version of App
                "Emulators", //Category of App
                "73.9MB", //Size of App
                "https://topstore.vip/image/1016141852.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D29", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1016141852.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F193%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fiosninja.io%2Fplist%2Fin%2Fa102%2Fdelta.plist", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DDelta%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/delta.plist", //Emus4u Link
                "https://iosem.us/app/install-screen/delta.html" //IOSEmus Link
                )
        } else if (a==156) {
            console.log(a);
            myApp(
                "Firebird Emu 32bit", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/firebird_emu_32bit.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D48", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==157) {
            console.log(a);
            myApp(
                "Firebird Emu 64bit", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/firebird_emu_32bit.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D49", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==158) {
            console.log(a);
            myApp(
                "FloppyCloud", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0.4", //Version of App
                "Emulators", //Category of App
                "", //Size of App
                "https://ipas.fun/images/floppycloud.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D52", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DFloppyCloud%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==159) {
            console.log(a);
            myApp(
                "GamePad", //Name of App 
                "NGDS Entertainment", //Developer of App
                "Sorry, this app is not supported on ios11. <br> Emulator for DS, GBA, PSP, MAME, GBC and N64 games", //Description of App
                "1.7.4", //Version of App
                "Emulators", //Category of App
                "73.25MB", //Size of App
                "https://topstore.vip/image/1016141949.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D54", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1016141949.plist", //Topstore Link
                "none", //Appvalley Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapi.tweakboxapp.com%2Fdownload%2Fmsru3sdqVWaqotCiq4Tj3rWUj6q5YtaqYb_qz4OknZymn8iiqoXI08t3h6SqhMeXYL_qzw%2C%2C%2Ftitle%2FNewGamePad", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DGamePad%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==160) {
            console.log(a);
            myApp(
                "GBA.emu", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/gba.emu.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D55", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==161) {
            console.log(a);
            myApp(
                "GBA4iOS", //Name of App 
                "Riley Tstut", //Developer of App
                "This Game Boy Advanced for iOS allows one to play old Game Boy roms on device allowing one to relive those old adventures without carrying anything more than just a phone.", //Description of App
                "2.1", //Version of App
                "Emulators", //Category of App
                "7.57MB", //Size of App
                "https://topstore.vip/image/912163026.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D56", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/912163026.plist", //Topstore Link
                "https://app-valley.vip/app/install_pages/app.php?ipaid=210", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DGBA4IOS%26from%3Dts", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/559/app.plist", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/gba4ios.plist", //Emus4u Link
                "https://iosem.us/app/install-screen/gba2.html" //IOSEmus Link
                )
        } else if (a==162) {
            console.log(a);
            myApp(
                "GBA4iOS", //Name of App 
                "Riley Tstut", //Developer of App
                "This Game Boy Advanced for iOS allows one to play old Game Boy roms on device allowing one to relive those old adventures without carrying anything more than just a phone.", //Description of App
                "2.1.5", //Version of App
                "Emulators", //Category of App
                "20.1MB", //Size of App
                "https://topstore.vip/image/912163026.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D57", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DGBA4iOS%2Bfor%2BiOS11%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/331/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==163) {
            console.log(a);
            myApp(
                "GBC.emu", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/gbc.emu.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D58", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==164) {
            console.log(a);
            myApp(
                "GC4iOS", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "3.5MB", //Size of App
                "https://ipas.fun/images/gc4ios.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapi.tweakboxapp.com%2Fdownload%2Fmsru3sdqVWaqotCiq4Tj3rWTiqVzpN1im8bbncini5iwltWrYZ29or1_eWWupMc%2C%2Ftitle%2FGC4iOS", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==165) {
            console.log(a);
            myApp(
                "Gearboy", //Name of App 
                "Unknown", //Developer of App
                "Game Boy Emulator.", //Description of App
                "2.1", //Version of App
                "Emulators", //Category of App
                "12.70MB", //Size of App
                "https://topstore.vip/image/1016142045.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D60", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1016142045.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DGearboy%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/561/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==166) {
            console.log(a);
            myApp(
                "Gearsystem", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "2.1", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://iosninja.io/img/ipas/gearsystem.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==167) {
            console.log(a);
            myApp(
                "GPSPhone", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/gpsphone.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D63", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==168) {
            console.log(a);
            myApp(
                "Gridlee", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/gridlee.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D64", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==169) {
            console.log(a);
            myApp(
                "Happy Chick 32bit", //Name of App 
                "Xiaoji", //Developer of App
                "Emulator for GC, DC, N64, Android and GBA games.", //Description of App
                "1.5.6.4beta", //Version of App
                "Emulators", //Category of App
                "114MB", //Size of App
                "https://topstore.vip/image/912161026.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D68", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/912161026.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DHappy%2BChick%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/hc.plist", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==170) {
            console.log(a);
            myApp(
                "Happy Chick 64bit", //Name of App 
                "Xiaoji", //Developer of App
                "Emulator for GC, DC, N64, Android and GBA games.", //Description of App
                "1.5.2", //Version of App
                "Emulators", //Category of App
                "114MB", //Size of App
                "https://topstore.vip/image/912161026.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D69", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F1641%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DHappy%2BChick%2BEmulator%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "https://iosem.us/app/install/happychick.html" //IOSEmus Link
                )
        } else if (a==171) {
            console.log(a);
            myApp(
                "iDos 2", //Name of App 
                "Unknown", //Developer of App
                "DOS emulator for iOS.", //Description of App
                "2.0", //Version of App
                "Emulators", //Category of App
                "8.21MB", //Size of App
                "https://ipas.fun/images/idos_2.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D78", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1016142110.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DiDos%2B2%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==172) {
            console.log(a);
            myApp(
                "iDos", //Name of App 
                "Unknown", //Developer of App
                "DOS emulator for iOS.", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/idos.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D77", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==173) {
            console.log(a);
            myApp(
                "iFBA", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/ifba.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D79", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==174) {
            console.log(a);
            myApp(
                "iNDS", //Name of App 
                "WilliamLCobb", //Developer of App
                "Emulator for NDS games. ", //Description of App
                "2.1", //Version of App
                "Emulators", //Category of App
                "5.0MB", //Size of App
                "https://topstore.vip/image/1016180406.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D83", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1016180406.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F1631%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DiNDS%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/inds.plist", //Emus4u Link
                "https://iosem.us/app/install/inds.html" //IOSEmus Link
                )
        } else if (a==175) {
            console.log(a);
            myApp(
                "iSSB", //Name of App 
                "Luis Finke", //Developer of App
                "Play Super Smash Bros on iOS.", //Description of App
                "2.21-3", //Version of App
                "Emulators", //Category of App
                "18.34MB", //Size of App
                "https://topstore.vip/image/1016195713.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D89", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1016195713.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DiSSB%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/366/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==176) {
            console.log(a);
            myApp(
                "MAME4iOS 32bit", //Name of App 
                "Unknown", //Developer of App
                "IOS emulator for arcade games.", //Description of App
                "1.6.0", //Version of App
                "Emulators", //Category of App
                "57.6MB", //Size of App
                "https://topstore.vip/image/1016180430.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D102", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==177) {
            console.log(a);
            myApp(
                "MAME4iOS 64bit", //Name of App 
                "Unknown", //Developer of App
                "IOS emulator for arcade games.", //Description of App
                "1.6.0", //Version of App
                "Emulators", //Category of App
                "57.6MB", //Size of App
                "https://topstore.vip/image/1016180430.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D103", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1016180430.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DMame4ios%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "https://iosem.us/app/install-screen/mame.html" //IOSEmus Link
                )
        } else if (a==178) {
            console.log(a);
            myApp(
                "MD.emu", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "Unknown", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/md.emu.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D104", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==179) {
            console.log(a);
            myApp(
                "MeSNEmu", //Name of App 
                "Lucas Mendes Menge", //Developer of App
                "Formoerly known as SiOS, MeSNUEmu is a Super Nintendo Entertainment System emulator.", //Description of App
                "1.4.5.2", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://iosninja.io/img/ipas/mesnemu.jpg", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D107", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapi.tweakboxapp.com%2Fdownload%2Fmsru3sdqVWaqotCiq4Td0sKZlphzpN1im8bbncini5iwltWrYcPf4cKVk6xzndaU%2Ftitle%2FMeSNEmu", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DMeSNEmu%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/MeSNEmu.plist", //Emus4u Link
                "https://iosem.us/app/install-screen/mesnemu.html" //IOSEmus Link
                )
        } else if (a==180) {
            console.log(a);
            myApp(
                "MSX.emu", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/msx.emu.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D114", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==181) {
            console.log(a);
            myApp(
                "NDS4IOS", //Name of App 
                "Unknown", //Developer of App
                "NDS Emulator for iOS.", //Description of App
                "2.0", //Version of App
                "Emulators", //Category of App
                "3.57MB", //Size of App
                "https://topstore.vip/image/1016180536.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D119", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1016180536.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DNDS4iOS%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/392/app.plist", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/nds4ios.plist", //Emus4u Link
                "https://iosem.us/app/install-screen/nds.html" //IOSEmus Link
                )
        } else if (a==182) {
            console.log(a);
            myApp(
                "NEO.emu", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/neo.emu.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D120", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==183) {
            console.log(a);
            myApp(
                "NES.emu", //Name of App 
                "Unknown", //Developer of App
                "NES Emulator for iOS.", //Description of App
                "1.5.29", //Version of App
                "Emulators", //Category of App
                "1.29MB", //Size of App
                "https://ipas.fun/images/nes.emu.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D121", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1016180554.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DNES.emu%26from%3Dts", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==184) {
            console.log(a);
            myApp(
                "Nestopia", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "16.0MB", //Size of App
                "https://ipas.fun/images/nestopia.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D122", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapi.tweakboxapp.com%2Fdownload%2Fmsru3sdqVWaqotCiq4Tj3rWTiqVzpN1im8bbncini5iwltWrYaTf4ciflqCmYs-jkw%2C%2C%2Ftitle%2FNestopia", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==185) {
            console.log(a);
            myApp(
                "NPG.emu", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/npg.emu.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D124", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==186) {
            console.log(a);
            myApp(
                "PCE.emu", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/pce.emu.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D126", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==187) {
            console.log(a);
            myApp(
                "Play!", //Name of App 
                "Jonathan Young", //Developer of App
                "Play! is a PS2 emulator for iOS that allows you to play PS2 games on your iPhone.", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "1.89MB", //Size of App
                "https://topstore.vip/image/1016180609.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D129", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1016180609.plist", //Topstore Link
                "none", //Appvalley Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapi.tweakboxapp.com%2Fdownload%2Fmsru3sdqVWaqotCiq4Td0sKZlphzpN1im8bbncini5iwltWrYcbmz81ej6em%2Ftitle%2FPlay%21", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DPlay%2521%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==188) {
            console.log(a);
            myApp(
                "PPSSPP", //Name of App 
                "Mamin Simpotyaga", //Developer of App
                "PPSSPP is the best and only PSP emulator for IOS written in C++.", //Description of App
                "1.9.3", //Version of App
                "Emulators", //Category of App
                "39.5MB", //Size of App
                "https://ipas.fun/images/ppsspp.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D135", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https://app.app-valley.vip/plists/248/install.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DPPSSPP%2B%255B64bit%255D%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/560/app.plist", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/ppsspp.plist", //Emus4u Link
                "https://iosem.us/app/install-screen/psp.html" //IOSEmus Link
                )
        } else if (a==189) {
            console.log(a);
            myApp(
                "Provenance", //Name of App 
                "Hollr2099", //Developer of App
                "Multi-system emulator for iOS.", //Description of App
                "1.5", //Version of App
                "Emulators", //Category of App
                "45.09MB", //Size of App
                "https://topstore.vip/image/1016180624.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D137", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1016180624.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DProvenance%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/pro.plist", //Emus4u Link
                "https://iosem.us/app/install-screen/prov.html" //IOSEmus Link
                )
        } else if (a==190) {
            console.log(a);
            myApp(
                "RetroArch 32bit", //Name of App 
                "Libretro", //Developer of App
                "RetroArch is a Multi-Emulator for IOS. This emulator includes many cores, including NES, SNES, Genesis, PS1, GBA, N64 & More!", //Description of App
                "1.7.8", //Version of App
                "Emulators", //Category of App
                "209.26MB", //Size of App
                "https://ipas.fun/images/retroarch_32bit.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D140", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https://app.app-valley.vip/plists/250/install.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DRetroArch%2B%255B32bit%255D%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==191) {
            console.log(a);
            myApp(
                "RetroArch 64bit", //Name of App 
                "Libretro", //Developer of App
                "RetroArch is a Multi-Emulator for IOS. This emulator includes many cores, including NES, SNES, Genesis, PS1, GBA, N64 & More!", //Description of App
                "1.7.8", //Version of App
                "Emulators", //Category of App
                "209.26MB", //Size of App
                "https://ipas.fun/images/retroarch_32bit.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D141", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F472%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DRetroArch-iOS11%2B%255B64bit%255D%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "https://iosem.us/app/install-screen/ra.html" //IOSEmus Link
                )
        } else if (a==192) {
            console.log(a);
            myApp(
                "ScummVM", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "2.1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/scummvm.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D149", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==193) {
            console.log(a);
            myApp(
                "Snes4ios", //Name of App 
                "Riley Testut", //Developer of App
                "SNES emulator for your IOS device!", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "2.4MB", //Size of App
                "https://ipas.fun/images/snes4ios.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D158", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapi.tweakboxapp.com%2Fdownload%2Fmsru3sdqVWaqotCiq4Td0sKZlphzpN1im8bbncini5iwltWrYcno08dkj6a4Ys-jkw%2C%2C%2Ftitle%2FSnes4iOS", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DSNES4iOS%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/558/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==194) {
            console.log(a);
            myApp(
                "Snes9x EX+", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/snes9x_ex+.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D159", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==195) {
            console.log(a);
            myApp(
                "Snes9x EX", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/snes9x_ex.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D160", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==196) {
            console.log(a);
            myApp(
                "ScummVM++", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Emulators", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/scummvm.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D303", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==197) {
            console.log(a);
            myApp(
                "Fortune", //Name of App 
                "4Chan Client", //Developer of App
                "App for 4Chan", //Description of App
                "1.4.4", //Version of App
                "Tweaked", //Category of App
                "17MB", //Size of App
                "https://topstore.vip/image/1015173225.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D53", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1015173225.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp-valley.vip%2Fapp%2Fplists%2F65%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DFortune%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==198) {
            console.log(a);
            myApp(
                "iTweetDeck", //Name of App 
                "Unknown", //Developer of App
                "Unknown", //Description of App
                "3.0", //Version of App
                "Tweaked", //Category of App
                "44.79MB", //Size of App
                "https://ipas.fun/images/itweetdeck.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D91", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DiTweetDeck%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==199) {
            console.log(a);
            myApp(
                "Animoji Studio", //Name of App 
                "Insidegui", //Developer of App
                "Record Animoji video", //Description of App
                "1.2.2", //Version of App
                "Tweaked", //Category of App
                "821.26KB", //Size of App
                "https://topstore.vip/image/1015163522.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D362", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1015163522.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp-valley.vip%2Fapp%2Fplists%2F467%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DAnimoji%2BStudio%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/152/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==200) {
            console.log(a);
            myApp(
                "Electra1112", //Name of App 
                "Electra Team", //Developer of App
                "Electra1112 is the long awaited iOS 11.0 - 11.1.2 jailbreak by the Electra Team. Version Info: 1.0.4.", //Description of App
                "1.1.0-2", //Version of App
                "Jailbreak", //Category of App
                "24.0MB", //Size of App
                "https://ipas.fun/images/electra.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D34", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F460%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DElectra%2BJailBreak%2Bfor%2BiOS%2B11.0-11.4.1%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/elec.plist", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==201) {
            console.log(a);
            myApp(
                "Electra1131 VFS", //Name of App 
                "Electra Team", //Developer of App
                "Electra1131 is the long awaited iOS 11.2.x - 11.4 b3 jailbreak by the Electra Team. Version Info: 1.0.3. Added support for iOS 11.4 beta 1 - 11.4 beta 3. Warning: Whilst Electra is stable you should only install tweaks you are familiar with and know are compatible with your iOS version. The Electra Team and Ignition will take no responsibility for any damage done to your device whilst and after using Electra.", //Description of App
                "1.1.0", //Version of App
                "Jailbreak", //Category of App
                "21.0MB", //Size of App
                "https://ipas.fun/images/electra1131.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D37", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F1379%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DElectra%2BWith%2BImproved%2BVFS%2BExploit%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==202) {
            console.log(a);
            myApp(
                "Electra1141", //Name of App 
                "Electra Team", //Developer of App
                "Electra1141 is the long awaited iOS 11 - 11.4.1 jailbreak by the Electra Team. Whilst Electra is stable you should only install tweaks you are familiar with and know are compatible with your iOS version. The Electra Team and Ignition will take no responsibility for any damage done to your device whilst and after using Electra.", //Description of App
                "1.3.2", //Version of App
                "Jailbreak", //Category of App
                "24.5MB", //Size of App
                "https://storage.ihvn.dev/icons/apps/electra.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D349", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F460%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DElectra%2BJailbreak%2Bfor%2BiOS%2B11.0%2Bto%2BiOS%2B11.4.1%26from%3Dse2", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==203) {
            console.log(a);
            myApp(
                "Electra1131 VFS GeoSn0w", //Name of App 
                "Electra Team & GeoSn0w", //Developer of App
                "Electra1131 is the long awaited iOS 11.2.x - 11.4 b3 jailbreak by the Electra Team. Version Info: 1.0.3. Added support for iOS 11.4 beta 1 - 11.4 beta 3. Warning: Whilst Electra is stable you should only install tweaks you are familiar with and know are compatible with your iOS version. The Electra Team and Ignition will take no responsibility for any damage done to your device whilst and after using Electra.", //Description of App
                "1.0.3", //Version of App
                "Jailbreak", //Category of App
                "", //Size of App
                "https://ipas.fun/images/electra1131.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D208", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DElectra%2BJailbreak%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/elec3.plist", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==204) {
            console.log(a);
            myApp(
                "etasonJB", //Name of App 
                "tihmstar", //Developer of App
                "EtasonJB (also spelt etasonJB and #EtasonJB) is an untethered jailbreak for all 32-bit devices (except Apple TV), running iOS 8.4.1. It was developed by tihmstar and exploits the same vulnerabilities as Home Depot. The first public version, RC2, was released on September 19, 2017 and is installed by sideloading an IPA with Cydia Impactor.", //Description of App
                "1.0", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/etasonjb.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D40", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DEtasonJB%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==205) {
            console.log(a);
            myApp(
                "YaluX (Extra Recipe)", //Name of App 
                "qwertyoruiop", //Developer of App
                "On May 23, 2017, Todesco released a jailbreak on his website. This jailbreak uses exploits discovered by Todesco & Ian Beer, and combines work done by xerub on Github to create a more stable jailbreak for the iPhone 7 and iPhone 7 Plus. This jailbreak is dubbed extra_recipe+yaluX. The first beta did not actually mount the root filesystem as read/write and therefore Cydia Substrate is disabled by default. On May 25, 2017, beta 3 was released to support Cydia Substrate. On May 29, 2017, a fourth beta was released to update to update to the latest GitHub branch, which includes support for 10.0.x.", //Description of App
                "1.0", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/extra_recipe+yalux.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==206) {
            console.log(a);
            myApp(
                "Home Depot", //Name of App 
                "jk9357", //Developer of App
                "Home Depot is a semi-untethered jailbreak for 32-bit devices on iOS 9.1 - 9.3.4. It was written by jk9357. It works by sideloading an IPA using Cydia Impactor. The first beta of version 1.1, offered as a separate download, added support for iOS 8.4.1 on A5 devices.", //Description of App
                "1.0", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/home%20depot.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3DHome%2BDepot.ipa", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==207) {
            console.log(a);
            myApp(
                "Yalu (Mach Portal)", //Name of App 
                "qwertyoruiop", //Developer of App
                "Sometimes known as YaluX or yalu + mach_portal, yalu for iOS 10.1 is currently in beta, and supports the iPad Pro, the iPhone 6s and 6s Plus, the iPhone SE and the iPhone 7 and 7 Plus, giving them a semi-untethered jailbreak. Issues have arisen with devices using TSMC manufactured chips. <br> When initially released, the jailbreak was intended for developers only, and users are warned about the jailbreak being unstable and buggy. Substrate is deliberately broken in an attempt to deter users from using it. However, several fixes have been made available, many resulting in issues with tweaks and forcing some users to restore.", //Description of App
                "1.0", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/mach_portal+yalu.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D100", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==208) {
            console.log(a);
            myApp(
                "Meridian", //Name of App 
                "PsychoTea (iBSparkes)", //Developer of App
                "Meridian is a semi-untethered jailbreak for ALL 64-bit devices running iOS 10.0.1-10.3.3, primarily developed by PsychoTea, with extensive contributions from others. Meridian works by sideloading an IPA using Cydia Impactor. The first public beta was released on 4 January, 2018.", //Description of App
                "0.9-007", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/meridian.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D106", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==209) {
            console.log(a);
            myApp(
                "noncereboot1131UI", //Name of App 
                "Pwn20wnd", //Developer of App
                "Easily set your nonce so you can downgrade using futurerestore on iOS 11.2 - 11.3.1.", //Description of App
                "1.0", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/noncereboot1131ui.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D123", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==210) {
            console.log(a);
            myApp(
                "Pangu", //Name of App 
                "Pangu Team", //Developer of App
                "The latest Pangu jailbreak tool allows the user to jailbreak iOS devices on the demand. The user can easily jailbreak the iOS devices by running the click-to-jailbreak app, and also easily remove the jailbreak by rebooting the iOS devices. In other words, the user has full control to enable or disable the jailbreak functionality.", //Description of App
                "1.0", //Version of App
                "Jailbreak", //Category of App
                "22.4MB", //Size of App
                "https://ipas.fun/images/pangu.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D125", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp-valley.vip%2Fapp%2Fplists%2F322%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DPangu%2BiOS%2B9%2BJailbreak%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==211) {
            console.log(a);
            myApp(
                "FilzaEscaped 12.4", //Name of App 
                "AppleDry05", //Developer of App
                "None", //Description of App
                "3.5", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://pbs.twimg.com/profile_images/690890573306195969/PbsWYXTX.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D1388", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DFilzaEscaped%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==212) {
            console.log(a);
            myApp(
                "FilzaEscaped 12.4 A12", //Name of App 
                "AppleDry05", //Developer of App
                "None", //Description of App
                "3.5", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://pbs.twimg.com/profile_images/690890573306195969/PbsWYXTX.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D1389", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DFilzaEscaped12.x%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==213) {
            console.log(a);
            myApp(
                "Rollectra", //Name of App 
                "Pwn20wnd", //Developer of App
                "SemiRestore is a Cydia Eraser alternative program to semi-restore your device like it was brand new. SemiRestore requires you to have OpenSSH installed for it to work. Note: Supported versions are iOS 11.3-11.4~b3 jailbreaks.", //Description of App
                "1.1.2", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/rollectra.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D142", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==214) {
            console.log(a);
            myApp(
                "RootlessJB", //Name of App 
                "Jake James", //Developer of App
                "Jake James, iOS/Web & tweak developer released a new rootless jailbreak for iOS 12.0 to iOS 12.1.2 versions. This is concept jailbreak called as rootlessJB based on exploits by Ian Beer and Bazad. However, this rootlessJB does not install Cydia and it allows to run Cydia tweaks only.", //Description of App
                "3.2.5", //Version of App
                "Jailbreak", //Category of App
                "8.2MB", //Size of App
                "https://topstore.vip/image/220041840.png", //Image of App
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/215021730.plist", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/220041840.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F1564%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DRootlessJB%26from%3Dts", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/536/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==215) {
            console.log(a);
            myApp(
                "RootlessJB", //Name of App 
                "Jake James", //Developer of App
                "Jake James, iOS/Web & tweak developer released a new rootless jailbreak for iOS 12.0 to iOS 12.1.2 versions. This is concept jailbreak called as rootlessJB based on exploits by Ian Beer and Bazad. However, this rootlessJB does not install Cydia and it allows to run Cydia tweaks only.", //Description of App
                "3.2.7", //Version of App
                "Jailbreak", //Category of App
                "28.8M", //Size of App
                "http://cammyd.com/wp-content/uploads/2015/02/iosicongridsmall.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/220041840.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DRootlessJB-3.2.7%26from%3Dts", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==216) {
            console.log(a);
            myApp(
                "RootlessInstaller", //Name of App 
                "EliseyD", //Developer of App
                "Jailbreak for ios 12.", //Description of App
                "1.0.2", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://topstore.vip/image/215021730.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/210013741.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/535/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==217) {
            console.log(a);
            myApp(
                "yalu102", //Name of App 
                "qwertyoruiop", //Developer of App
                "On January 25, 2017, Todesco released the incomplete source code to a new version of Yalu, one supporting every version from iOS 10.0 through 10.2, onto GitHub. On January 26, he formally released an alpha, beta 1 version of yalu102 on his site in the form of an IPA (also sideloaded using Cydia Impactor) to jailbreak semi-untethered iOS 10.0 through 10.2. The first beta supported Cydia Substrate, and works on the iPad Pro, iPhone 6s and iPhone SE.", //Description of App
                "1.0", //Version of App
                "Jailbreak", //Category of App
                "8.0MB", //Size of App
                "https://ipas.fun/images/yalu102.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D181", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp-valley.vip%2Fapp%2Fplists%2F18%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DYalu102%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==218) {
            console.log(a);
            myApp(
                "xSpiral rootKit", //Name of App 
                "xSpiral Team", //Developer of App
                "None", //Description of App
                "4.0", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/ibox.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D353", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==219) {
            console.log(a);
            myApp(
                "NonceSet1112", //Name of App 
                "Julioverne", //Developer of App
                "None", //Description of App
                "1.3", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlwmFc7wmaC7v5GNcX1Bzbpp7NMVleMmDFFag8GBO-jkHPl4K3", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D312", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==220) {
            console.log(a);
            myApp(
                "NonceReboot12XX", //Name of App 
                "Umang", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/ibox.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D1343", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==221) {
            console.log(a);
            myApp(
                "iFilesV2", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/ibox.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D1347", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==222) {
            console.log(a);
            myApp(
                "RootlessJB4", //Name of App 
                "Brandon Plank", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/ibox.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D1404", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==223) {
            console.log(a);
            myApp(
                "BarMagnet", //Name of App 
                "Carlo Tortorella", //Developer of App
                "BarMagnet is a torrent remote control for IOS.", //Description of App
                "1.9.4", //Version of App
                "Tweaked", //Category of App
                "727.93KB", //Size of App
                "https://iosem.us/app/img/barmagnet.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D8", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1015163538.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DBarMagnet%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "https://iosem.us/app/install-screen/barmagnet.html" //IOSEmus Link
                )
        } else if (a==224) {
            console.log(a);
            myApp(
                "FilzaJailed", //Name of App 
                "TIGI Software", //Developer of App
                "Access and manage your device's files, with root access! <br> Disclaimer: Use only if you know what you are doing!", //Description of App
                "3.1 b2", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/filzajailed.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D47", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DFilzaJailed%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "https://iosem.us/app/install-screen/filza.html" //IOSEmus Link
                )
        } else if (a==225) {
            console.log(a);
            myApp(
                "MediaBox", //Name of App 
                "@Playbox_hd", //Developer of App
                "Previously known as PlayBox HD, MediaBox is a well known alternative to Movie Box, which was a Movie streaming / Downloading app for iOS!", //Description of App
                "2.4.9.2", //Version of App
                "Tweaked", //Category of App
                "52.0MB", //Size of App
                "https://iosem.us/app/img/mediabox.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3Dnull%26from%3Dname%3DMediaBox%2BHD", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "https://iosem.us/app/install-screen/mediabox.html" //IOSEmus Link
                )
        } else if (a==226) {
            console.log(a);
            myApp(
                "Screen Recorder", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "Unknown", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://www.iinstaller.net/app/app2/img/T2O2m06yT4iH7rklXaXk_screenrec.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/crec.php", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==227) {
            console.log(a);
            myApp(
                "Vidiyu", //Name of App 
                "Innovative Developers LTD", //Developer of App
                "Vidiyu is the ultimate solution for editing, trimming and combining/mixing all of your media content.", //Description of App
                "2.0", //Version of App
                "Tweaked", //Category of App
                "1.9MB", //Size of App
                "https://is2-ssl.mzstatic.com/image/thumb/Purple49/v4/be/21/d4/be21d49f-596f-dc77-12d9-b0154a269308/source/512x512bb.jpg", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D174", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp-valley.vip%2Fapp%2Fplists%2F30%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DVidiyu%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/vidiyu.plist", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==228) {
            console.log(a);
            myApp(
                "InstaBlue", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "1.0", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://www.iinstaller.net/app/app2/img/ctjqKdw7Sq6Bkz2pjAtl_YxXwM8boRqWfBVKSHd2e_iblue.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/iblue.plist", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==229) {
            console.log(a);
            myApp(
                "InstaRed", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "Unknown", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://www.iinstaller.net/app/app2/img/aKosfJKSf6Mj22V9Akow_4MKi6ibTHWEMH72C4vZk_ired.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/ired.plist", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==230) {
            console.log(a);
            myApp(
                "iTorrent", //Name of App 
                "XITRIX", //Developer of App
                "iTorrent allows you to download BitTorrent podcasts from iTunes. It transforms BitTorrent podcasts so that you can update them just like any other podcast in iTunes.", //Description of App
                "1.7", //Version of App
                "Tweaked", //Category of App
                "25.59MB", //Size of App
                "https://github.com/XITRIX/iTorrent/blob/af7d17b3849a58a465706b521310d9c4d38fe07c/iTorrent/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png?raw=true", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D375", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1122051653.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F1403%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fiosninja.io%2Fplist%2Fin%2Fa102%2Fitorrent.plist", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DiTorrent%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/88/app.plist", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/iTorrent.plist", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==231) {
            console.log(a);
            myApp(
                "LiveSim2", //Name of App 
                "Unknown", //Developer of App
                "None", //Description of App
                "Unknown", //Version of App
                "Games", //Category of App
                "Unknown", //Size of App
                "https://scontent.fmel8-1.fna.fbcdn.net/v/t1.0-9/p960x960/55910082_2115464101900791_1198258290325192704_o.png?_nc_cat=107&_nc_ohc=cKJIMAPQi_0AX-mxB_N&_nc_ht=scontent.fmel8-1.fna&oh=39d8f189bfbeaacfc32e5135a84bde5e&oe=5EAA0908", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "itms-services://?action=download-manifest&amp;url=https://www.iinstaller.net/dl/plists87/livesim2.plist", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==232) {
            console.log(a);
            myApp(
                "Netflix Checker", //Name of App 
                "Julioverne", //Developer of App
                "Accounts checker for Netflix.", //Description of App
                "1.0", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://ipas.fun/images/netflixchecker.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D187", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/54/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==233) {
            console.log(a);
            myApp(
                "Meswex Kdrama", //Name of App 
                "AYOUB", //Developer of App
                "For watching Asian Drama & Movies.", //Description of App
                "1.5", //Version of App
                "Tweaked", //Category of App
                "150.0MB", //Size of App
                "https://i.imgur.com/z5cpAug.jpg", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DMeswex%2B-%2BKdrama%26from%3Dse2", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/138/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==234) {
            console.log(a);
            myApp(
                "Double H3lix IOS 10", //Name of App 
                "tihmstar", //Developer of App
                "Double H3lix is a jailbreak tool made for iOS 1064-bit devices. This includes iPhone 5s, iPhone 6/6s, iPhone 6/6s Plus, iPad Air, iPad Air 2, iPad Pro, iPad mini 2/3/4.", //Description of App
                "1.0 RC8", //Version of App
                "Jailbreak", //Category of App
                "11MB", //Size of App
                "https://iosninja.io/img/ipas/doubleh3lix1.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DDouble%2BH3lix%2BJailbreak%2Bfor%2BiOS%2B10%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==235) {
            console.log(a);
            myApp(
                "g0blin Jailbreak", //Name of App 
                "Unknown", //Developer of App
                "With g0blin jailbreak, you can jailbreak 64-bit devices on iOS 10.3 - iOS 10.3.3.", //Description of App
                "1.0 RC2", //Version of App
                "Jailbreak", //Category of App
                "38.2MB", //Size of App
                "https://iosninja.io/img/ipas/goblin-jailbreak.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp-valley.vip%2Fapp%2Fplists%2F378%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3Dg0blin%2BJailbreak%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==236) {
            console.log(a);
            myApp(
                "H3lix Jailbreak", //Name of App 
                "FoxletFox", //Developer of App
                "Jailbreak 32-bit devices on iOS 10.0.1 - 10.3.4 with H3lix jailbreak.", //Description of App
                "1.0 RC6", //Version of App
                "Jailbreak", //Category of App
                "8.8MB", //Size of App
                "https://iosninja.io/img/ipas/helix.jpg", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1210072048.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F312%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DH3lix%2BJailbreak%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==237) {
            console.log(a);
            myApp(
                "LazarusJailed", //Name of App 
                "Unknown", //Developer of App
                "LazarusJailed is an anti-revoke app made for iOS 12 that allows revoked apps to be opened.", //Description of App
                "1.0.2", //Version of App
                "Jailbreak", //Category of App
                "17MB", //Size of App
                "https://iosninja.io/img/ipas/lazarusjailed.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DLazarusJailed%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==238) {
            console.log(a);
            myApp(
                "Phoenix Jailbreak", //Name of App 
                "Unknown", //Developer of App
                "A jailbreak for all 32-bit devices running IOS version 9.3.", //Description of App
                "5.0", //Version of App
                "Jailbreak", //Category of App
                "26.8MB", //Size of App
                "https://iosninja.io/img/ipas/phoenix-jailbreak.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F305%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DPhoenix%2BJailbreak%2Bfor%2BiOS%2B9.3.5%26from%3Dse2", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==239) {
            console.log(a);
            myApp(
                "Saigon Jailbreak 10.2.1", //Name of App 
                "Unknown", //Developer of App
                "Saigon Jailbreak for iOS 10.2.1 supports the following devices: <br> iPhone 6s <br> iPhone 6s Plus <br> iPhone 6 <br> iPhone 6 Plus <br> iPhone SE <br> iPod Touch 6 <br> iPad Mini 4 <br> iPad Air 2", //Description of App
                "Beta 2r1", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://iosninja.io/img/ipas/saigon-jailbreak.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp-valley.vip%2Fapp%2Fplists%2F435%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DSaigon%2BJailbreak%2Bfor%2BiOS%2B10.2.1%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==240) {
            console.log(a);
            myApp(
                "AirRec", //Name of App 
                "@AirRecApp", //Developer of App
                "Screen recorder for iOS", //Description of App
                "2.0.2", //Version of App
                "Tweaked", //Category of App
                "3.84MB", //Size of App
                "https://iosninja.io/img/ipas/airrec.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D5", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1015163315.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DAirRec%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==241) {
            console.log(a);
            myApp(
                "BatteryLife", //Name of App 
                "Carlo Tortorella", //Developer of App
                "Monitor your device's battery life.", //Description of App
                "1.7", //Version of App
                "Tweaked", //Category of App
                "1.24MB", //Size of App
                "https://iosninja.io/img/ipas/batterylife.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D9", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1015163555.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DBatteryLife%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==242) {
            console.log(a);
            myApp(
                "CoolPixel", //Name of App 
                "Unknown", //Developer of App
                "Record your iPhone's screen with CoolPixel.", //Description of App
                "1.4", //Version of App
                "Tweaked", //Category of App
                "59.70MB", //Size of App
                "https://iosninja.io/img/ipas/coolpixel.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1015163348.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp-valley.vip%2Fapp%2Fplists%2F54%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DCoolPixel%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==243) {
            console.log(a);
            myApp(
                "EveryCord", //Name of App 
                "Anthony Agatiello", //Developer of App
                "iPhone and iPad screen recorder.", //Description of App
                "1.2", //Version of App
                "Tweaked", //Category of App
                "17.1MB", //Size of App
                "https://iosninja.io/img/ipas/everycord.jpg", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D41", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1015161911.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp-valley.vip%2Fapp%2Fplists%2F60%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DEverycord%26from%3Dts", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==244) {
            console.log(a);
            myApp(
                "FileBrowser", //Name of App 
                "Unknown", //Developer of App
                "Browse the system files on iOS.", //Description of App
                "1.2", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://iosninja.io/img/ipas/filebrowser.jpg", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D44", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DFileBrowser%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==245) {
            console.log(a);
            myApp(
                "Fily", //Name of App 
                "Unknown", //Developer of App
                "Alternative file browser for iOS.", //Description of App
                "1.1", //Version of App
                "Tweaked", //Category of App
                "28.92MB", //Size of App
                "https://iosninja.io/img/ipas/fily.jpeg", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D45", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1015173140.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DFily%26from%3Dts", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==246) {
            console.log(a);
            myApp(
                "HappyCast", //Name of App 
                "Unknown", //Developer of App
                "Recorder your iPhone or iPad screen with this app.", //Description of App
                "1.0", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://iosninja.io/img/ipas/happycast.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D70", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DHappyCast%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==247) {
            console.log(a);
            myApp(
                "Houdini", //Name of App 
                "cheesecakeufo", //Developer of App
                "Houdini is capable of adding new features and themes to iOS without jailbreak. <br> Supports: iOS 10.x to 10.3.2 and iOS 11 to 11.1.2", //Description of App
                "Beta 2r1", //Version of App
                "Tweaked", //Category of App
                "1MB", //Size of App
                "https://iosninja.io/img/ipas/houdini.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D185", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1015173245.plist", //Topstore Link
                "itms-services://?action=download-manifest&url=https://app.app-valley.vip/plists/70/install.plist", //Appvalley Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapi.tweakboxapp.com%2Fdownload%2Fmsru3sdqVWaqotCiq4Td0sKZlphzpN1im8bbncini5iwltWrYb7p47iZlKBzndaU%2Ftitle%2FHoudini", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DHoudini%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==248) {
            console.log(a);
            myApp(
                "iCapture10", //Name of App 
                "Unknown", //Developer of App
                "Screen recorder for your iOS device.", //Description of App
                "3.0-b48", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://iosninja.io/img/ipas/icapture.jpg", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==249) {
            console.log(a);
            myApp(
                "iCleaner", //Name of App 
                "Unknown", //Developer of App
                "Clears storage space by removing unnecessary files.", //Description of App
                "1.0.2", //Version of App
                "Tweaked", //Category of App
                "2.8MB", //Size of App
                "https://iosninja.io/img/ipas/icleaner.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D75", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F72%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DiCleaner%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==250) {
            console.log(a);
            myApp(
                "iDarkMode", //Name of App 
                "Unknown", //Developer of App
                "Enables Dark Mode effect in iOS for iPhone and iPad.", //Description of App
                "1.0", //Version of App
                "Tweaked", //Category of App
                "10.4MB", //Size of App
                "https://iosninja.io/img/ipas/idarkmode.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==251) {
            console.log(a);
            myApp(
                "iDeviceWalls", //Name of App 
                "Unknown", //Developer of App
                "Find wallpapers for your iOS device.", //Description of App
                "1.1", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://iosninja.io/img/ipas/idevicewalls.jpeg", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D76", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DiDeviceWalls%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==252) {
            console.log(a);
            myApp(
                "iFile", //Name of App 
                "Unknown", //Developer of App
                "The best file manager for iOS.", //Description of App
                "2.2.0-1", //Version of App
                "Tweaked", //Category of App
                "10.0MB", //Size of App
                "https://iosninja.io/img/ipas/ifile.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D80", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DiFile%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==253) {
            console.log(a);
            myApp(
                "iProRec", //Name of App 
                "Unknown", //Developer of App
                "Record your screen on iPhone or iPad.", //Description of App
                "2.5 beta 3", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://iosninja.io/img/ipas/prorec.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==254) {
            console.log(a);
            myApp(
                "iRec", //Name of App 
                "Unknown", //Developer of App
                "Alternative screen recorder for iOS.", //Description of App
                "2.0-1", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://iosninja.io/img/ipas/irec.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D88", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DiRec%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==255) {
            console.log(a);
            myApp(
                "miniOS", //Name of App 
                "Unknown", //Developer of App
                "Allows you to run a simulation of macOS on iOS devices.", //Description of App
                "1.0", //Version of App
                "Tweaked", //Category of App
                "6.99MB", //Size of App
                "https://iosninja.io/img/ipas/minios.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1016135155.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DminiOS%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "itms-services://?action=download-manifest&amp;url=https://flekstore.com/app/apps/136/app.plist", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==256) {
            console.log(a);
            myApp(
                "PixlRec", //Name of App 
                "Unknown", //Developer of App
                "Screen recorder for iPhone.", //Description of App
                "3.1-r05", //Version of App
                "Tweaked", //Category of App
                "Unknown", //Size of App
                "https://iosninja.io/img/ipas/pixlrec.jpg", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D128", //Ignition Link
                "none", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "none", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==257) {
            console.log(a);
            myApp(
                "ScreenGrab", //Name of App 
                "Unknown", //Developer of App
                "Record your iPhone or iPad screen with this app.", //Description of App
                "Beta 3", //Version of App
                "Tweaked", //Category of App
                "23.93MB", //Size of App
                "https://iosninja.io/img/ipas/screen-grab-beta.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D148", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1015163428.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DScreenGrab%2BBeta%26from%3Dii", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==258) {
            console.log(a);
            myApp(
                "xCleaner", //Name of App 
                "Unknown", //Developer of App
                "Removes junk files to clear storage space.", //Description of App
                "1.0.2", //Version of App
                "Tweaked", //Category of App
                "1.9MB", //Size of App
                "https://iosninja.io/img/ipas/xcleaner.png", //Image of App
                "itms-services://?action=download-manifest&url=https://ignition.fun/install.php%3Fapp%3D180", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp-valley.vip%2Fapp%2Fplists%2F19%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DxCleaner%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==259) {
            console.log(a);
            myApp(
                "Playmira", //Name of App 
                "Bitwise Solutions Limited", //Developer of App
                "Stream your PS4 games to your iPhone, iPad or iPod touch. Enjoy your PS4 games remotely, whether in another room away from the TV, or even while away from home by streaming over the internet.", //Description of App
                "1.7", //Version of App
                "Tweaked", //Category of App
                "9.62MB", //Size of App
                "https://topstore.vip/image/1115040446.png", //Image of App
                "none", //Ignition Link
                "itms-services://?action=download-manifest&url=https://topstore.vip/plist/1115040446.plist", //Topstore Link
                "none", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DPlaymira%26from%3Dts", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==260) {
            console.log(a);
            myApp(
                "Rebirth", //Name of App 
                "Unknown", //Developer of App
                "Cydia", //Description of App
                "1.0", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://content.app-valley.vip/icon/946.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp-valley.vip%2Fapp%2Fplists%2F934%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DRebirth%26from%3Dse", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        } else if (a==261) {
            console.log(a);
            myApp(
                "Th0r Jailbreak", //Name of App 
                "@pwned4ever", //Developer of App
                "Th0r 4.0 VFS 1.0.1 Jailbreak Toolkit for IOS 11.2 - 11.3.1/11.4(b3).", //Description of App
                "2.7", //Version of App
                "Jailbreak", //Category of App
                "Unknown", //Size of App
                "https://img.appvalley.vip/appValley-pic/appImg_1558363042899cydia-1900000420-icon.png", //Image of App
                "none", //Ignition Link
                "none", //Topstore Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fapp.app-valley.vip%2Fplists%2F1404%2Finstall.plist", //Appvalley Link
                "none", //Tweakbox Link
                "none", //IOSNinja Link
                "itms-services://?action=download-manifest&url=https%3A%2F%2Fwww.cokernutx.com%2Fapp_detail%2FinstallIpa%2F%3Fname%3DTh0r%2BJailbreak%2BToolkit%2Bfor%2BiOS%2B11.2%2B-%2B11.3.1%252F11.4%2528b3%2529%26from%3Dse2", //CoconutX Link
                "none", //IOSGods Link
                "none", //Flekstore Link
                "none", //Emus4u Link
                "none" //IOSEmus Link
                )
        }  else {
            console.log("error");
        }
    }
 setTimeout(myAppData, delay);
 }


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 7500); 
}


        // for (o = 0; o < numApps; o++) {
        //     a=o;
        //     if (a==o) {
        //         appDatabaseLoad();
        //     } 
        // } 

    

//DRAFT
// else if (a==3) {
//     console.log(a);
//     myApp(
//         "", //Name of App 
//         "", //Developer of App
//         "", //Description of App
//         "", //Version of App
//         "", //Category of App
//         "", //Size of App
//         "", //Image of App
//         "none", //Ignition Link
//         "none", //Topstore Link
//         "none", //Appvalley Link
//         "none", //Tweakbox Link
//         "none", //IOSNinja Link
//         "none", //CoconutX Link
//         "none", //IOSGods Link
//         "none", //Flekstore Link
//         "none", //Emus4u Link
//         "none" //IOSEmus Link
//         )
// } 