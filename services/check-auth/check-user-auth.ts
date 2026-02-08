export const checkUserAuth = () => {
    if (typeof window === "undefined") return false;
    
    try {
        const userStr = localStorage.getItem('user');
        if (!userStr) return false;
        
        const user = JSON.parse(userStr);
        // Check if user object has keys (is not empty)
        return user && Object.keys(user).length > 0;
    } catch (error) {
        console.error("Error parsing user auth:", error);
        return false;
    }
};