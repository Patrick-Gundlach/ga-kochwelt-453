function markActivePage() {
    var currentLocation = window.location.pathname;
    var currentPage = currentLocation.split('/').pop(); // gibt den Namen der aktuellen HTML-Datei zurück
    var isHTML = currentPage.endsWith('.html'); // überprüft, ob die aktuelle Seite eine HTML-Datei ist
    
    if (isHTML) { // überprüft, ob die aktuelle Seite eine HTML-Datei ist
      var links = document.querySelectorAll('nav a');
      for (var i = 0; i < links.length; i++) {
        var link = links[i];
        if (link.getAttribute('href').indexOf(currentPage) !== -1) { // überprüft, ob der Link mit dem Namen der aktuellen Seite übereinstimmt
          link.classList.add('active');
        }
      }
    }
  }
  
  markActivePage();