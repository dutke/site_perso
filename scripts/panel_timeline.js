// Private functions

//Opening a hidden Overlay
function openOv(year) {  
    document.getElementById("hiddenPanel"+year).style.width = "100%";
    $('.myNav').hide();
  }

//Closing a shown Overlay
function closeOv(year) {
    document.getElementById("hiddenPanel"+year).style.width = "0%";
    $('.myNav').show();
  }
