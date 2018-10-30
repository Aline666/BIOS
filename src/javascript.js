/*Button top */
/*schaut ob auf der Seite schon runtergescrollt ist und wenn ja wird der ToTop Button angezeigt*/
$(document).ready(function(){
      $('body').append('<div id="toTop" class="btn btn-info"><span class="glyphicon glyphicon-chevron-up"></span> Back to Top</div>');
    	$(window).scroll(function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
				$('#toTop').fadeOut();
			}
		});

    /*Wenn auf den Button geklickt wird, wird die Seite ganz nach oben gescrollt*/
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;


    });
});



/*Einzelvorstellung*/
filterSelection("all")
/*Ist all angeklickt, werden alle Anzeigt*/
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  //Fügt der gefliterten Klasse die "show" Klasse hinzu und entfernt sie von den anderen Klassen
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Die gefilterte Klasse wird angezeigt
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Die nicht ausgewählten Klassen werden nicht angezeigt 
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Der ausgewählten Klasse wird die Klasse active hinzugefügt
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/*Browser und Server beinhalten je einen Teil der Anwendungslogik
•	Der HTML-Code der Seite kann zur Laufzeit generiert werden oder in einer einfachen HTML-Datei liegen
•	Bei verschiedenen Aktionen werden mit JavaScript weitere Daten mit dem Server ausgetauscht
•	Die empfangenen Daten werden dabei durch geschickte DOM-Manipulation sichtbar gemacht
*/

/*Vorteil dieses Ansatzes ist, dass die serverseitigen Funktionen aus
unterschiedlichen Frontends heraus konsumiert werden können, beispielsweise
einer Webseite und einer Desktopanwendung. Auch kann eine so entwickelte
Webanwendung längere Offlinezeiten überstehen, solange sie keine Verbindung zum
Server benötigt. */

/*•	PHP: Der Vorreiter aller aktiven Serverseiten und das einzige Produkt, dessen Abkürzung keine „Server Pages“ enthält. PHP stand ursprünglich für „Personal Homepage Processor”.
•	JSP: Java Server Pages, also die Javavariante aktiver Serverseiten
*/

/*Was der Server bei einer Anfrage macht
Jeder Aufruf führt zur Auswahl von genau einer URL-Route, die wiederum den
so genannten Request Handler benennt, der die Anfrage übergeben bekommt.
Je nach Programmiersprache und Framework handelt es sich dabei entweder um
eine Klasse (wie in Java, wo diese Klasse Servlet genannt wird), eine Methode
oder eine Funktion.*/
