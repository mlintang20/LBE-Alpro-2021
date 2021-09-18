function dark_mode() {
    // toggle light/dark mode
    var elem_1 = document.body;
    var elem_2 = document.getElementById("topnav");
    var elem_3 = document.getElementById("konten");
    var elem_4 = document.getElementById("about");
    var elem_5 = document.getElementById("myPhoto");
    var elem_6 = document.getElementById("kontak");
  

    elem_1.classList.toggle("dark-mode");
    elem_2.classList.toggle("dm-topnav");
    elem_3.classList.toggle("dm-isi");
    elem_4.classList.toggle("dm-about");
    elem_5.classList.toggle("dm-myphoto");
    elem_6.classList.toggle("dm-contact");


    // swap tulisan light/dark mode
    var x = document.getElementById("swap");
    if (x.innerHTML === "Light Mode") {
        x.innerHTML = "Dark Mode";
    } else {
        x.innerHTML = "Light Mode";
    }
 }