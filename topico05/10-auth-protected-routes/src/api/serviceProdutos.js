export const fetchAllProdutos = async()=>{
    return fetch('/api/produtos')
    .then(result=>{
        if(result.status === 200)
            if(result.headers.get('content-type').includes('json'))
                return JSON.parse(result.data)
        return new Error('Invalid response!!!')
    })
    .catch(error=>console.error(error))
}