import { sumFrom, sumOf } from "./index";

const start = 50;
const end = 100;

const out = sumFrom(start, end)
console.log(sumFrom.name, out)

const v1 = sumOf(start, end)
console.log(sumOf.name, v1)