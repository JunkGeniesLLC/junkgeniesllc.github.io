function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  if (tabName === "services") {
    document.body.style.backgroundImage = "url(res/stockjunk2.jpg)";
  } else if (tabName === "contact") {
    document.body.style.backgroundImage = "url(res/genie_small.jpg)";
  } else {
    document.body.style.backgroundImage = "url(res/stockjunk1.jpg)";
  }
}

// Open the "About Us" tab by default
document.getElementById("about").style.display = "block";
