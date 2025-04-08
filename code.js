function pustoTu(pole) {  
    if (pole.length == 0) {
        return true;
    } else {
        return false;
    }
}

function weryfikacja() {
    var imie = document.forms["user_data"]["imie"].value
    if (pustoTu(imie) ) {
        alert("Podaj swoje imię!")
        return false;
    } else {
        if (bialeZnaki(imie)) {
            alert("Podaj swoje imie")
            return false;
        }
        else {
            return true;
        }
        
    }
}

function bialeZnaki(string) {
    return string.trim().length === 0;
    }

function walidujNapis(ciag, komunikat) {    
    var ciag = document.forms["user_data]"]["email"]["kod"]["wiadomosc"].value;
    if pustoTu(ciag) {
        alert(komunikat)
    }
}
    
