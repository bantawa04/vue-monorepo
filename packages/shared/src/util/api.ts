const getApiData = async () => {
    const response = await fetch("http://localhost:3000/date")
    return response.json()
}
export { getApiData }