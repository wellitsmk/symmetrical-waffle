
export const sumOf = (x: number, y: number) : number => {
    return x === y ? x : x + sumOf(++x, y)
}
