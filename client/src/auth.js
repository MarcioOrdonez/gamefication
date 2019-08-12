export const isAuthenticated = () => {
    if(localStorage.getItem('tokenGame') !== null) {
        return true
    }
    return false;
};
