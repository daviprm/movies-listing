function option() {
    var x = document.getElementById("options");
    var bg = document.getElementById("bg_options");
    if (x.style.display === "flex") {
      x.style.display = "none";
      bg.style.display = "none";
    } else {
      x.style.display = "flex";
      bg.style.display = "flex";
    }
}

function profiles() {
    var x = document.getElementById("choice_profile");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
}

function modal() {
    var modal = document.getElementById("bg_movies_modal");
    if (modal.style.display === "flex") {
      modal.style.display = "none";
    } else {
      modal.style.display = "flex";
    }
}

