var myApp = new Framework7({
    modalTitle:'TopStore'
});

// var mySwiper = new Swiper('.swiper-container', {
//     preloadImages: false,
//     lazyLoading: true,
//     pagination: '.swiper-pagination'
// })

var $$ = Dom7;
var mySwiper = new Swiper ('.swiper-container', {
    autoplay: 3000,
    speed: 800,
    direction: 'horizontal',
    loop: true,

    
    // If we need pagination
    pagination: '.swiper-pagination',
    
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar',

    observer: true,  
    observeParents: true,

  })       

var view1 = myApp.addView('#view-1', {
    dynamicNavbar: true
});
var view2 = myApp.addView('#view-2', {
    dynamicNavbar: true
});
var view3 = myApp.addView('#view-3', {
    dynamicNavbar: true
});
var view4 = myApp.addView('#view-4', {
    dynamicNavbar: true
});
var view5 = myApp.addView('#view-5', {
    dynamicNavbar: true
});
var view6 = myApp.addView('#view-6', {
    dynamicNavbar: true
});

myApp.onPageInit('type', function (page) {
    var category = page.query.type;
    var server ="https://topstore.vip/GetBrief/AppListByCategory.action?category="
    $.ajax({
        type: 'GET',
        url: server+ category,
        async: true,
        dataType: 'jsonp',
        jsonp: "jsonpCallback",
        success: function (data) {
            var str=""
            for (var x = 0;x <data.AppList.length;x++){
                str+=addRow(data.AppList[x].id,data.AppList[x].name,data.AppList[x].developer,data.AppList[x].subtitle);

            }
            document.getElementById("title").innerHTML=category
            document.getElementById("header").innerHTML=category
            document.getElementById("appsByType").innerHTML=str;
        },
        error: function () {
            alert("network error");
        }
    });
})

$$(document).on('pageInit', '.page[data-page="index-1"]', function (e) {
    init(appData);
})
$$(document).on('pageInit', '.page[data-page="index-2"]', function (e) {
    init(appData);
})
$$(document).on('pageInit', '.page[data-page="index-3"]', function (e) {
    init(appData);
})
$$(document).on('pageInit', '.page[data-page="index-4"]', function (e) {
    init(appData);
})
function addRow(id,name,developer,subtitle){
    var str="                                    <li class=\"item-content\">\n" +
        "                                        <div class=\"item-media\">\n" +
        "                                            <img src=\"https://topstore.vip/image/"+id+".png\" width=\"44\">\n" +
        "                                        </div>\n" +
        "                                        <div class=\"item-inner\">\n" +
        "                                            <div class=\"item-title-row\">\n" +
        "                                                <div class=\"app-title\">"+reserve(name)+"</div>\n" +
        "                                                <div class=\"\" style=\"margin-right: 20px;\">\n" +
        "                                                    <a href=\"detail.html?id="+id+"\" class=\"button button-fill button-round\"style=\"background: #F0F1F6; color: #007AFF; font-weight:bold;\">GET</a>\n" +
        "                                                </div>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"app-subtitle\">"+reserve(subtitle)+"</div>\n" +
        "                                        </div>\n" +
        "                                    </li>"
    return str;
}
myApp.onPageInit('detail', function (page) {
    var id = page.query.id;
    var server ="https://topstore.vip/GetDetail/AppDetail.action?id="
    $.ajax({
        type: 'GET',
        url: server+ id,
        async: true,
        dataType: 'jsonp',
        jsonp: "jsonpCallback",
        success: function (data) {
            addDetail(data);
        },
        error: function () {
            alert("network error");
        }
    });
    var id = page.query.id;
    var server ="https://topstore.vip/GetCategory/AppCategory.action?id="
    $.ajax({
        type: 'GET',
        url: server+ id,
        async: true,
        dataType: 'jsonp',
        jsonp: "jsonpCallback",
        success: function (data) {
            appCategory(data);
        },
        error: function () {
            alert("network error");
        }
    });
})
function addDetail(data) {
    document.getElementById("avatar").src="https://topstore.vip/image/"+data.id+".png"
    document.getElementById("preview").src="https://topstore.vip/preview/"+data.id+".png"
    document.getElementById("name").innerHTML=data.name
    document.getElementById("subtitle").innerHTML=data.subtitle
    document.getElementById("downloadLink").href="itms-services://?action=download-manifest&url=https://topstore.vip/plist/"+data.id+".plist"
    document.getElementById("Size").innerHTML=data.filesize
    var predata=data.description.substring(0,20);
    var postdata=data.description.substr(20);
    var description=predata+"<div class=\"desc\" style=\"display: none;\">"+postdata+"</div>" +
        "<p>\n" +
        "  <a href=\"#\" onclick=\"if ($$('.desc').css('display') == 'none'){$$('.desc').css('display', 'inline'); this.innerHTML='Less...'} else {$$('.desc').css('display', 'none'); this.innerHTML='More...'}\" class=\"\">More...</a>\n" +
        "</p>";
    document.getElementById("Describtion").innerHTML=description.replace(/\n/g,"<br>")

    document.getElementById("Developer").innerHTML=data.developer
    document.getElementById("Version").innerHTML=data.version
}
function appCategory(data) {
    for (var x = 0;x <data.category.length;x++){
        $("#Category").append(getCategory(data.category[x].categoryId)+"<br/>");
    }
}
myApp.onPageInit('index-4', function (page) {
    alert("search")
})

function getCategory(id) {
    if(id=="1")
        return "Tweaked Apps"
    else if(id=="2")
        return "Paid and Other Apps"
    else if(id=="3")
        return "Tweaked Games"
    else if(id=="4")
        return "Paid and Other Games"
    else if(id=="27")
        return "Recommended This Week"
    else if(id=="31")
        return "Movies on iOS"
    else if(id=="32")
        return "Top Apps"
    else
        return ""
}



















var numApps = 98;



function submit(name) {
    var ref = firebase.database().ref('storeData/'+name);
    ref.transaction(function(currentClicks) {
      return (currentClicks || 0) + 1;
    });
}

//Clicking on application
function submitAppName(name) {
    var ref = firebase.database().ref('storeData/appGet/app-get-click/'+"app"+name+"-click");
    ref.transaction(function(currentClicks) {
      return (currentClicks || 0) + 1;
    });
}

//Loading App Interface 
function createTagTest(loadname, loadnumber) {
    var myLi = document.createElement("li");
    var myDiv = document.createElement("div");
    var myImg = document.createElement("img");
    var srcatt = document.createAttribute("srcset");
    var myA = document.createElement("a");

    var myDiv2 = document.createElement("div");
    var myDiv3 = document.createElement("div");
    var myDiv4 = document.createElement("div");
    var myDiv5 = document.createElement("div");
    var myDiv6 = document.createElement("div");
    
    var originalid = document.getElementById("list-apps");

    myA.className = "button button-fill button-round";
    myA.style.background = "#F0F1F6";
    myA.style.color = "#007AFF";
    myA.style.fontWeight = "bold";
    myA.setAttribute("onclick", `myFunction(${loadnumber})`);
    myA.href = "appview.html";
    myA.innerHTML = "GET";
    
    myLi.className = "item-content";
    myDiv.className = "item-media";
    myDiv2.className = "item-inner";
    myDiv3.className = "item-title-row";
    myDiv4.className = "item-title";
    myDiv6.className = "app-subtitle";
    
    myDiv4.innerHTML = loadname;
    myDiv6.innerHTML = "Something";

    // srcatt.value = loadimg; 
    // myImg.setAttribute("srcset", srcatt.value);

    myDiv5.style.marginRight = "20px";
    myImg.className = "lazy-fadeIn lazy-loaded";
    myImg.width = "44"
    myImg.setAttribute("srcset", srcatt.value);

    originalid.appendChild(myLi);
    myLi.appendChild(myDiv);
    myLi.appendChild(myDiv2);
    myDiv.appendChild(myImg);
    myDiv2.appendChild(myDiv3);
    myDiv3.appendChild(myDiv4);
    myDiv3.appendChild(myDiv5);
    myDiv5.appendChild(myA);
    myDiv2.appendChild(myDiv6);

}

function appSearchLoad() {
    for (var x = 1; x < numApps; x++) {
        createTag(x, "list-apps");
    }    
    // createTagTest("something", 98)
    createTagTest("something", 98)
}

function appCategoryLoad() {
    appCatLoad('Tweaked');
    appCatLoad('Jailbreak');
    appCatLoad('Entertainment');
    appCatLoad('Emulators');
    appCatLoad('Games');
}

function appSourceLoad() {
    appSorLoad('ignitionApps');
}

function appCatLoad(cat) {
    var delay = 100
    var letAppData = function letFunction() { 
        for (var v = 1; v < numApps; v++) {
            var text;
            var name = "app"+v
            var firebaseAppCategory = firebase.database().ref().child("appData/" + name + "/Category");
            firebaseAppCategory.on('value', function(snapshot) { text = snapshot.val(); })
                if (text == cat) {
                    createTag(v, cat)
                } 
        }
    }
 setTimeout(letAppData, delay);
 }

var c = 1;
function submitCategoryApps(name) {
    var delay = 100
    var letAppData = function letFunction() {  
            var d = 0;
            if (c>d) {
                    var ref = firebase.database().ref('storeData/category-app-click/'+name+"-click");
                    ref.transaction(function(currentClicks) {
                      return (currentClicks || 0) + 1;
                    });    
            } 
        if (c <=d) {
            c++;
        } 
    }
    setTimeout(letAppData, delay);
 }
 function submitSourceApps(name) {
    var delay = 100
    var letAppData = function letFunction() {  
            var d = 0;
            if (c>d) {
                    var ref = firebase.database().ref('storeData/category-source-click/'+name+"-click");
                    ref.transaction(function(currentClicks) {
                      return (currentClicks || 0) + 1;
                    });    
            } 
        if (c <=d) {
            c++;
        } 
    }
    setTimeout(letAppData, delay);
 }


function submitRefresh() {
    var ref = firebase.database().ref('storeData/refresh-count');
    ref.transaction(function(currentClicks) {
      return (currentClicks || 0) + 1;
    });      
}

 var b = 0;
 function loadThing2(id) {
    var delay = 100
    var letAppData = function letFunction() {  
        for (a = 1; a < numApps; a++) {
            var z = 9;
            var text;
            var name = "app"+a;
            var firebaseAppSource = firebase.database().ref().child("appData/" + name+"/"+id);
            firebaseAppSource.on('value', function(snapshot) { text = snapshot.val(); })
            if (b>z) {
                if (text !== "none") {
                    createTag(a, id)
                } else if (text == "none") {
                }
            } 
        }
        if (b <=z) {
            b++;
        } 
    }
    setTimeout(letAppData, delay);
 }
 

function appPopularLoad() {
    var a = []; 
    var value;

    for (var g = 0; g < numApps; g++) {
        a.push([g])
    }
    function running(num) {
        var source = firebase.database().ref().child("storeData/appGet/app-source-get-total/app"+num+"-total");
        source.on('value', function(snapshot) {
            value = snapshot.val(); 
            a[num].push(value) 

            function sortFunction(a, b) {
                if (a[1] === b[1]) {
                    return 0;
                }
                else {
                    return (a[1] > b[1]) ? -1 : 1;
                }
             }
            a.sort(sortFunction);

        if (num == (numApps-1)) {
        createTag(a[1][0], "popular-apps");
        createTag(a[2][0], "popular-apps");
        createTag(a[3][0], "popular-apps");
        createTag(a[4][0], "popular-apps");
        createTag(a[5][0], "popular-apps");
        createTag(a[6][0], "popular-apps");
        }

        });         
    }
        for (var l = 1; l < numApps; l++) {
            var value;
            running(l)  
        }   
            
}


// appSearchLoad();
// appPopularLoad();
// appCategoryLoad();
// loadThing2('Ignition');
// loadThing2('Top Store');
// loadThing2('App Valley');
// loadThing2('Tweakbox');
// loadThing2('IOSNinja');
// loadThing2('CoconutX');
// loadThing2('iOSGods');
// loadThing2('Flekstore');
// loadThing2('Emus4');
// loadThing2('Emus');

// var $$ = Dom7;

// create searchbar
// var searchbar = app.searchbar.create({
//   el: '.searchbar',
//   searchContainer: '.list',
//   searchIn: '.item-title',
//   on: {
//     search(sb, query, previousQuery) {
//       console.log(query, previousQuery);
//     }
//   }
// });






















