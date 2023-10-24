import axios, { ResponseType } from 'axios'
import { ZodSchema, z } from 'zod'

type HttpBody = Record<string, any> | Record<string,any>[]
type HttpMethod = 'get' | 'post' | 'delete' | 'put'

async function doHttpRequest<T>(
    url: string,
    method: HttpMethod,
    responseType: ResponseType,
    body?: HttpBody,
    params?: any,
    headers?: any,
    auth?: any,
    retry?: number,
    schema?: ZodSchema,
) : Promise<T> {
    
    const axiosBody = {
        url,
        headers,
        body,
        responseType,
        params
    }

    const result = await axios({
        url,
        headers,
        params,
        responseType
    })

    if(schema instanceof ZodSchema) {
        return schema.parse(result.data);
    }
    return result.data as any
}


async function main() {
    const todoSchema = z.object({
        "userId": z.number(),
        "id": z.number(),
        "title": z.string()
    })
    .passthrough()
    
    type ZType = z.infer<typeof todoSchema>

    let d = await doHttpRequest<ZType>('https://jsonplaceholder.typicode.com/todos/1', 'get', 'json',[],null,null,null,undefined,todoSchema);
    console.log(d)
}

main();
