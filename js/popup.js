    var link = document.querySelector(".callback");
    var popup = document.querySelector(".modal-content");
    var close = popup.querySelector(".modal-close");
    var overlay = document.querySelector(".modal-overlay");
    var login = popup.querySelector("[name=name]");
    var password = popup.querySelector("[name=password]");
    var form = popup.querySelector("form");

       
      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("modal-content-show");
        login.focus();
        overlay.classList.add("modal-overlay-show");

      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("modal-overlay-show");
        popup.classList.remove("modal-error");
      });


      window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          popup.classList.remove("modal-content-show");
          overlay.classList.remove("modal-overlay-show");
          popup.classList.remove("modal-error");
        }
        
      });


      overlay.addEventListener("click", function() {
        overlay.classList.remove("modal-overlay-show");
        popup.classList.remove("modal-content-show");
      });
      



