var scrollableElement = document.body;
var axis = "UP";

    scrollableElement.addEventListener("wheel", checkScrollDirectionAndReveal);

    function checkScrollDirectionAndReveal(event) {
      var reveals = document.querySelectorAll(".reveal")
      if (checkScrollDirectionIsUp(event)) {
        axis = "UP";
        console.log("UP");
      } else {
        axis = "DOWN";
        console.log("Down");
      }
      for (var i = 0; i < reveals.length; i++) {

        if (axis == "UP") {
          reveals[i].classList.remove("active");
        }
        else {
          reveals[i].classList.add("active");
        }
      }
    }
    
    function checkScrollDirectionIsUp(event) {
      if (event.wheelDelta) {
        return event.wheelDelta > 0;
      }
      return event.deltaY < 0;
    }