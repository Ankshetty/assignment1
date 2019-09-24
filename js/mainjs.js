function myFunction() {
    var x = document.getElementById("nav-div");
    if (x.className === "nav-container_div") {
      x.className += " responsive";
    } else {
      x.className = "nav-container_div";
    }
  }


  function openTab(id) 
  {    
    var tabcontent;  
    tabcontent = document.getElementById(id).innerHTML;
    document.getElementById("tabDisplay").innerHTML=tabcontent ;
  }