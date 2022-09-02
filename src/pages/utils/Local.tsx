export const authenticated = (keys: any, next: () => void) => {
    localStorage.setItem('keys', JSON.stringify(keys));
    next();
}
export const isAuthenticate = () => {
    if(!localStorage.getItem('keys')) return;
    return JSON.parse(localStorage.getItem('keys') as string)
}