function unwrap(text) {
    var matches, options, random;
    var regEx = new RegExp(/{([^{}]+?)}/);

    while ((matches = regEx.exec(text)) !== null) {
        options = matches[1].split("|");
        random = Math.floor(Math.random() * options.length);
        text = text.replace(matches[0], options[random]);
    }
    return text;
}

