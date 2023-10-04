import axios from "axios";
import { toast } from "react-hot-toast";

interface FormData {
  email: string;
  password: string;
}

export async function handleLogin(
  data: FormData,
  setIsAuthenticated: (value: boolean) => void,
  navigate: (path: string) => void
) {
  const { email, password } = data;

  try {
    const response = await axios.post("/api/users/login", {
      email,
      password,
    });

    const responseData = response.data;

    if (responseData.error) {
      toast.error(responseData.error);
    } else {
      setIsAuthenticated(true);
      toast.success("Login Successful. Welcome!");
      navigate("/articles/page/1");
    }
  } catch (error) {
    console.error(error);
  }
}
