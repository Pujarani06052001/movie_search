function submit_button(){
    const xhr=new XMLHttpRequest();
    const input=document.querySelector("#Id_input").value;
    const url = "https://www.omdbapi.com/?t="+input+"&apikey=ab1dbcb4";
    xhr.onloadend=function(){
        if(xhr.readyState==4 && xhr.status==200){
            var data=xhr.responseText;
            var jsonData=JSON.parse(data);
            console.log(jsonData);
            var Actors=jsonData.Actors;
            var Title=jsonData.Title;
            var ReleasedD=jsonData.Released;
            var type=jsonData.Genre;
               
            document.getElementById("Actors").innerHTML="Actors Name: "+Actors+"("+jsonData.Actors+")"; 
            document.getElementById("Title").innerHTML="Movie Name: "+Title+"("+jsonData.Year+")";
            document.getElementById("RelsdD").innerHTML="Released Date: "+ReleasedD;
            document.getElementById("Type").innerHTML="Movie Type: "+type;
        }

    }
    xhr.open("GET",url,true);
    xhr.send();
 }
