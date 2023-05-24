function customParsor(str) {
    if(!str) {
        return 0;
    }
    let result = 0;
    let allResult = [];
    for(i = 0; i < str.length; i++) {
        if(str[i] == 'p') {
            result = result + 1;
        } else if(str[i] == 'm') {
            result = result - 1;
        } else if(str[i] == 's') {
            result = result * result;
        } else if(str[i] == 'o') {
            allResult.push(result)
        }
    }
    return allResult;
}


console.log(customParsor('ppppsmoso'))