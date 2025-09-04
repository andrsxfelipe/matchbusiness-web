// Save token and user data in localStorage
export function saveAuth(token, user) {
  localStorage.setItem("authToken", token);
  localStorage.setItem("authUser", JSON.stringify(user));
}

// Retrieve token from localStorage
export function getToken() {
  return localStorage.getItem("authToken");
}

// Retrieve user data from localStorage
export function getUser() {
  const user = localStorage.getItem("authUser");
  return user ? JSON.parse(user) : null;
}

// Clear token and user data from localStorage
export function clearAuth() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("authUser");
}
