import axios from "axios";

export async function logout(setIsAuthenticated: (value: boolean) => void): Promise<boolean> {
  try {
    await axios.get("/api/users/logout");
    setIsAuthenticated(false);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
