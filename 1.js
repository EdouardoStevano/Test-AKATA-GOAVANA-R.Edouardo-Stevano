function isValidHTML(html) {
    let isValid = true;
    
    const tags = html.match(/<\/?[^>]+(>|$)/g);

    if (!tags) {
        console.log("Aucune balise trouvée");
        return false;
    }

    const stack = [];

    for (const tag of tags) {
        if (tag.startsWith('</')) {
            const tagName = tag.slice(2, -1);
            if (stack.length === 0 || stack.pop() !== tagName) {
                console.log(`La balise de fermeture </${tagName}> ne correspond pas`);
                return false;
            }
        } else {
            const tagName = tag.slice(1, tag.indexOf(' ') > 0 ? tag.indexOf(' ') : -1).replace('>', '');
            if (!tag.endsWith('/>')) {
                stack.push(tagName);
            }
        }
    }

    if (stack.length > 0) {
        console.log("Toutes les balises ne sont pas fermées");
        return false;
    }

    console.log("Toutes les balises sont correctement fermées");
    return true;
}

// Tests
console.log(isValidHTML("<p><span></span></p>"));
console.log(isValidHTML("<p><span></p></span>"));
console.log(isValidHTML("<p><span></span><div></div></p>"));
console.log(isValidHTML("<p><span></span>"));
console.log(isValidHTML("<p><img src='image.png' /></p>"));
