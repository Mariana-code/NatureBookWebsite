$(document).ready(function(){
    $("#Morebtn").click(function(){
      alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
      alert("HTML: " + $("#test").html());
    });
});

function loadPicture1(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("Desert").innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "Deserts.html");
    xhttp.send();
}

function loadPicture2(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("Valleys").innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "Obama.html");
    xhttp.send();
}

function loadPicture3(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("Oceans").innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "Obama.html");
    xhttp.send();
}

function loadPicture4(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("PolarRegions").innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "Obama.html");
    xhttp.send();
}
