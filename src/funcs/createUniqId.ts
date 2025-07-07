const createUniqId = ():string => {
    const id = `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
    return id
}
export default createUniqId