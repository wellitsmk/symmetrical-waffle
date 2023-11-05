import fs from 'fs'

export const writeFile = async (fileName: string, fileContent: string): Promise<boolean> => {
    try {
        await fs.promises.writeFile(fileName, fileContent)
        return true
    }
    catch(e){
        if(e instanceof Error)
            console.log(e.message)
        return false;
    }
}


export const readFile = async (fileName: string): Promise<string> => {
    try {
        return await fs.promises.readFile(fileName, { encoding: 'utf-8' })
    }
    catch(e){
        if(e instanceof Error)
            console.log(e.message)
        return ''
    }
}

console.log('promises/index.ts loaded')