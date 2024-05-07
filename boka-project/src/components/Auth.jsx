// src/components/auth.js

export function isLoggedIn() {
    return !!localStorage.getItem('userToken');
}
