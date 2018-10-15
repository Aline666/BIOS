/**
 * Funktion zur Überprüfung des Kontaktformulars. Wird beim Abschicken des
 * Formulars aufgerufen.
 */
let validateForm = event => {
    // Variablen für das Prüfergebnis
    let form = event.target;
    let okay = true;
    let message = "";

    // Vorname muss vorhanden sein
    if (form.firstname.value == "") {
        okay = false;
        message += "Der Vorname fehlt. "<br />;
    }

    // Nachname muss vorhanden sein
    if (form.lastname.value == "") {
        okay = false;
        message += "Der Nachname fehlt. <br />";
    }

    // E-Mail muss vorhanden sein und zusätzlich ein @ enthalten
    // HINWEIS: Besser wäre es, die E-Mailadresse mit einem regulären
    // Ausdruck zu prüfen. Einfach mal nach „E-Mail Regex” googlen …
    if (form.email.value == "" || !form.email.value.includes("@")) {
        okay = false;
        message += "Ungültige Mailadresse. <br />";
    }

    // Eine Nachricht muss vorhanden sein
    if (form.message.value == "") {
        okay = false;
        message += "Das Nachricht Feld darf nicht leer bleiben. <br />";
    }

    // Ergebnis anzeigen
    let resultElement = document.getElementById("result");

    if (okay) {
        message = "Vielen Dank für Ihre Nachricht!";
        resultElement.classList.add("okay");
    } else {
        resultElement.classList.remove("okay");
    }

    resultElement.innerHTML = message;

    // Formular nicht abschicken
    //if (!okay) {
    event.preventDefault();
    //}
}
