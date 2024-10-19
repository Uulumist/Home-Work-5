export function estoniaCodeGenerator() {

    const uniqueCode = Math.random() * 9000
    return 'EST-'+Math.floor(1000 + uniqueCode)
}

export function latviaCodeGenerator() {

    const uniqueCode = Math.random() * 9000
    return 'LVA-'+Math.floor(1000 + uniqueCode)
}

export function lithuaniaCodeGenerator() {

    const uniqueCode = Math.random() * 9000
    return 'LTU-'+Math.floor(1000 + uniqueCode)
}

console.log(estoniaCodeGenerator())
console.log(latviaCodeGenerator())
console.log(lithuaniaCodeGenerator())