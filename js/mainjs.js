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
    var tabcontent1,tabcontent2,tabcontent;  
    // tabcontent = document.getElementById(id).innerHTML;


    tabcontent1 = document.getElementById(id).firstElementChild.innerHTML;
    tabcontent2 = document.getElementById(id).lastElementChild.innerHTML;

    document.getElementById("tabcontent__heading").innerHTML=tabcontent1 ;

 document.getElementById("tabcontent__content").innerHTML=tabcontent2 ;
  }