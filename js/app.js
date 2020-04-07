var url = "http://localhost:8080/events"
var buttonLoad = document.getElementById("btn-load-events");

function loadEvents() {
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var eventList = JSON.parse(this.responseText);
        printEvents(eventList);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

}


function printEvents(eventList) {
    var out = "";
    var i;
    var eventListNode = document.getElementById("list-events");
    for(i = 0; i < eventList.length; i++) {
        var liElement  = document.createElement("li");
        var liText = document.createTextNode(eventList[i].title);
        liElement.appendChild(liText);
        eventListNode.appendChild(liElement);
    }
    // document.getElementById("id01").innerHTML = out;
}

