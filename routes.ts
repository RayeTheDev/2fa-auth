// These routes do not require authentication
export const publicRoutes = ["/"];

//These routes will redirect logged in users to /settings
export const authRoutes = ["/auth/login", "/auth/register"];

//Routes that start with this prefix are used for API auth purposes
export const apiAuthPrefix = "/api/auth";

//The default redirect path after logged in
export const DEFAULT_LOGIN_REDIRECT = "/settings";
