function convertToCamel(str) {
    if (!str) {
        return '';
    }
    // str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getCamelCase(str, delimitter) {
    var result = '';
    if (!str) {
        return str;
    }
    let splittedArray = str.split(delimitter);

    for (var i = 0; i < splittedArray.length; i++) {
        if (i == 0) {
            result = result + splittedArray[i];
        } else {
            result = result + convertToCamel(splittedArray[i]);
        }
    }
    return result;
}


console.log(getCamelCase('the-test-case', '-'));
console.log(getCamelCase("The_First_Word_Capital", '_'))
