
var gResourceUrl = "http://162.243.146.199:8080/rey2/webapi/myresource";
var gDataReturned = "";



function sendAJAX_GETRequest()
{

	document.getElementById("text").innerHTML = "Started.";

	var xobj = new XMLHttpRequest();

  xobj.addEventListener("progress", updateProgress, false);
	
	xobj.overrideMimeType("application/json");
	xobj.open('GET', gResourceUrl); 

  xobj.responseType = "arraybuffer";
  xobj.send();

	
	xobj.onreadystatechange = function () {
	          
          if (xobj.readyState == 4 && (xobj.status == "200" || xobj.status == "201")) {

            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            gDataReturned = xobj.response;
           
            if(gDataReturned != undefined)
            {
              document.getElementById("text").innerHTML = "Done.";
            	updateData(gDataReturned);
            }
            else
            {
              return null;
            }

          }
    };

	
}

// function progressBar() {

//   var oReq = new XMLHttpRequest();

//   oReq.addEventListener("progress", updateProgress, false);

//   oReq.open;
  
// }



function updateProgress(oEvent) {

  if(oEvent.lengthComputable) {
    var percentage = Math.trunc((oEvent.loaded / oEvent.total) * 100);

    $('.progress-bar').css('width', percentage+'%').attr('aria-valuenow', percentage);  

    $('.progress-bar').html( percentage+'%' );
  }
  else {
    //Unable to compute progress information since the total size is unknown
  }

}

function updateData() {


}