function missingAlphabet(str) {
    if(!str) {
        return 0;
    }
    let result = 0;
    for(i = 0; i < str.length; i++) {
        if(str.charAt(i) > 'n') {
            result++;
        }
    }
    return result;
}


console.log(missingAlphabet('aaabdbnhaikjjm'))
console.log(missingAlphabet('abaxbdbbyyhwawiwjjjwem'))