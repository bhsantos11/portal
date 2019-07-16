
function uploadFile(){
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "URL")

    var fileNameEl = document.getElementById("file-name")
    var fileCompleteEl = document.getElementById("file-complete")

    console.log("File Name" + fileNameEl.value);
    console.log("File" + fileCompleteEl.value);

    xhttp.responseText = fileNameEl.value
    xhttp.responseText += fileCompleteEl.value




    
    xhttp.send()
}
