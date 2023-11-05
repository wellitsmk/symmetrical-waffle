import { performance } from 'perf_hooks';
import { readFile, writeFile, writeFileSync, folderPath, readFileSync } from './index'

import data from '../resources/data.json'

type TFunc = { fn: Function, name: string, data?: string, file?: string }
const arr: TFunc[] = [
    {fn: writeFile, name: 'writeFile', data: data.text},
    {fn: writeFileSync, name: 'writeFileSync', data: data.text},
    {fn: readFile, name: 'readFile', file: folderPath + '../data.json'},
    {fn: readFileSync, name: 'readFileSync', file: folderPath + '../data.json'}
];

async function run(n: number, obj: TFunc){
    for (let i = 0; i < n; i++) {
        const fileName = obj.file ?? folderPath + `temp${i}-${obj.fn.name}.txt`
        const out = await obj.fn(fileName, obj.data);
        // if(typeof out === 'string') { 
           // console.log(i, JSON.parse(out).name)
        // }
    }
}

(async function() {
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i] as TFunc

        const start = performance.now()
        await run(100, e)
        const end = performance.now()

        console.log(e.name, end - start)
    }
})();
