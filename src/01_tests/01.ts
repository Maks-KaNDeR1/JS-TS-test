export function sum(a: number, b: number) {
    return a + b;
}

export function mult(a: number, b: number) {
    return a * b;
}

export function spllitIntoWords(sentense: string) {
    const words = sentense.toLowerCase().split(' ')

    return words.filter(w => w !== '' && w !== '-')
        .map(w => w
            .replace('!', '')
            .replace('.', '')
            .replace(',', '')
        )
}
