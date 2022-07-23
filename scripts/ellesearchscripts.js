var clientList;

window.onload = loadJSON();

function loadJSON(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "./assets/ClientData.json", true);
    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 && ajax.status == 200){
            var rawData = ajax.responseText;
            clientList = JSON.parse(rawData);
        }
    }
    ajax.send();
}

function searchId() {

    var search_id = document.getElementById('search_id').value;

    var display = "<tr>";
    display += "<th>ID</th>";
    display += "<th>First Name</th>";
    display += "<th>Last Name</th>";
    display += "<th>Address</th>";
    display += "<th>Postal Code</th>";
    display += "<th>Phone</th>";
    display += "<th>Type</th>";
    display += "</tr>";

    for(var i = 0; i < clientList.length; i++){
        var thisClient = clientList[i];

        if(thisClient.id == (search_id)){
            display += "<tr>";
            display += "<td>" + thisClient.id + "</td>";
            display += "<td>" + thisClient.firstName + "</td>";
            display += "<td>" + thisClient.lastName + "</td>";
            display += "<td>" + thisClient.address + "</td>";
            display += "<td>" + thisClient.postalCode + "</td>";
            display += "<td>" + thisClient.phone + "</td>";
            display += "<td>" + thisClient.type + "</td>";
            display += "</tr>";
        }
        
    }
    
    document.getElementById('id_results').innerHTML = display;
}

function searchLastName() {

    var search_lastName = document.getElementById('search_lastName').value;

    var display = "<tr>";
    display += "<th>ID</th>";
    display += "<th>First Name</th>";
    display += "<th>Last Name</th>";
    display += "<th>Address</th>";
    display += "<th>Postal Code</th>";
    display += "<th>Phone</th>";
    display += "<th>Type</th>";
    display += "</tr>";

    for(var i = 0; i < clientList.length; i++){
        var thisClient = clientList[i];

        if(thisClient.lastName.startsWith(search_lastName)){
            display += "<tr>";
            display += "<td>" + thisClient.id + "</td>";
            display += "<td>" + thisClient.firstName + "</td>";
            display += "<td>" + thisClient.lastName + "</td>";
            display += "<td>" + thisClient.address + "</td>";
            display += "<td>" + thisClient.postalCode + "</td>";
            display += "<td>" + thisClient.phone + "</td>";
            display += "<td>" + thisClient.type + "</td>";
            display += "</tr>";
        }
        
    }
    
    document.getElementById('lastName_results').innerHTML = display;
}

function searchPhone() {

    var search_phone = document.getElementById('search_phone').value;

    var display = "<tr>";
    display += "<th>ID</th>";
    display += "<th>First Name</th>";
    display += "<th>Last Name</th>";
    display += "<th>Address</th>";
    display += "<th>Postal Code</th>";
    display += "<th>Phone</th>";
    display += "<th>Type</th>";
    display += "</tr>";

    for(var i = 0; i < clientList.length; i++){
        var thisClient = clientList[i];

        if(thisClient.phone.startsWith(search_phone)){
            display += "<tr>";
            display += "<td>" + thisClient.id + "</td>";
            display += "<td>" + thisClient.firstName + "</td>";
            display += "<td>" + thisClient.lastName + "</td>";
            display += "<td>" + thisClient.address + "</td>";
            display += "<td>" + thisClient.postalCode + "</td>";
            display += "<td>" + thisClient.phone + "</td>";
            display += "<td>" + thisClient.type + "</td>";
            display += "</tr>";
        }
        
    }
    
    document.getElementById('phone_results').innerHTML = display;
}