import fs from 'fs'

export const writeFileSync = (fileName: string, fileContent: string):  boolean => {
    try {
        fs.writeFileSync(fileName, fileContent)
        return true
    }
    catch(e){
        if(e instanceof Error)
            console.log(e.message)
        return false;
    }
}

export const readFileSync = (fileName: string): string => {
    try {
        return fs.readFileSync(fileName, { encoding: 'utf-8' })
    }
    catch(e){
        if(e instanceof Error)
            console.log(e.message)
        return ''
    }
}



console.log('read-write.ts loaded')
