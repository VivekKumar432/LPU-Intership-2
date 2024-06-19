import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (userData) => {
        // Set isAuthenticated to true after a successful login
        setIsAuthenticated(true);
        // Store user data in local storage or state
    };

    const logout = () => {
        // Set isAuthenticated to false after logout
        setIsAuthenticated(false);
        // Clear user data from local storage or state
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
