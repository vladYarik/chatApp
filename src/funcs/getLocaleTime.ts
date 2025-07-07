const getLocaleTime = (string:string) => {
    try{
        const date = new Date(string)
        return date.toLocaleDateString()
    }catch(e){
        return null
    }
}
export default getLocaleTime