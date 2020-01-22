module.exports = {
    titleCase,
}

function titleCase(string) {
    let result = string.trim().toLowerCase().split("");
    result[0] = result[0].toUpperCase();
    return result.join("");
}