
export const sumFrom = (x: number, y: number) : number => {
    return x === y ? x : x + sumFrom(++x, y)
}

export const sumOf = (x: number, y: number) : number => {
    return x + y
}

