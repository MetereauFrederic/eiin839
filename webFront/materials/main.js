function retrieveAllContracts() {
    var url = "https://api.jcdecaux.com/vls/v3/contracts?apiKey=" + document.getElementById("key").value;
    var caller = new XMLHttpRequest();
    caller.open("GET", url, true);
    caller.setRequestHeader("Accept", "application/json");
    caller.onload = contractsRetrieved;
    caller.send();
}

function contractsRetrieved() {
    var response = JSON.parse(this.responseText);
    console.log(response);
}
