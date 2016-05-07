var imported = document.createElement('script');
imported.src = 'js/taffy-min.js';
document.head.appendChild(imported);


var db = {
	friends: TAFFY([
        {"id":1,"gender":"M","first":"John","last":"Smith","city":"Seattle, WA","status":"Active"},
        {"id":2,"gender":"F","first":"Kelly","last":"Ruth","city":"Dallas, TX","status":"Active"},
        {"id":3,"gender":"M","first":"Jeff","last":"Stevenson","city":"Washington, D.C.","status":"Active"},
        {"id":4,"gender":"F","first":"Jennifer","last":"Gill","city":"Seattle, WA","status":"Active"}   
    ])
}