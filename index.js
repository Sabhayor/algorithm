function convertFahrToCelcius (fahr) {
    let cel;
    cel = (fahr - 32) *  5/9;
    cel = cel.toFixed(4);

    if (cell !== Number){
        return `${fahr} is not a valid number but a/an ${typeof fahr}.`
    }

    return cel;
}

convertFahrToCelcius(0);