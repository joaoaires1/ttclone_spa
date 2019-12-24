export const getStorageUserData = () => {
    return JSON.parse(localStorage.getItem('authenticatedUser'))
}

export const setStorageUserData = data => {
    let parsed = JSON.stringify(data)
    localStorage.setItem('authenticatedUser', parsed)
}