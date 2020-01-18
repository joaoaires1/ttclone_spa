export const getStorageUserData = () => {
    return JSON.parse(localStorage.getItem('authenticatedUser'))
}

export const setStorageUserData = data => {
    if ( !data ) {
        localStorage.setItem('authenticatedUser', false)
        return
    }
    let parsed = JSON.stringify(data)
    localStorage.setItem('authenticatedUser', parsed)
}