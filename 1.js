function isValidHTML(html){
    const isValid = true;

    /* 
    * Prendre le balise en enlèvant tous les valuer après et avant ">" de  html
    * stocker cette balise dans une variables "balise"
    * Utiliser cette balise dans le constant ParagrapheExpe
    */  
    
    const ParagrapheExpe = html.includes("<p>"+""+"</p>") ? "paragraphe" : html.includes("<p>"+ "</span>" +"</p>") ? "span" : (html.includes("<p>"+ "<span>" + "</span>" +"</p>") || html.includes("<p>"+ "</p>" + "<span>" +"</span>")) ? "baliseTrue" : "" ;

    switch (ParagrapheExpe) {
        case "paragraphe":
                console.log("La balise p est bien fermé au bon endroit")
                isValid == true;
                return isValid;
            break;
        case "span":
                console.log("La balise span n'est pas fermé")
                isValid == false;
                return isValid;
            break;
        case "baliseTrue":
                isValid == true;
                return isValid;
            break;
        default:
            console.log("Veuillez ecrire une code valide")
            return isValid;
            break;
    }
}

isValidHTML("<p><span></span></p>")

