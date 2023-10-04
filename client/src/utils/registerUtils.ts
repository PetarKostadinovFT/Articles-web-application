import axios from "axios";
import { toast } from "react-hot-toast";

interface RegistrationData {
  email: string;
  password: string;
  repass: string;
}

export async function handleRegister(
  data: RegistrationData,
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>,
  navigate: (path: string) => void
) {
  const { email, password, repass } = data;

  if (password !== repass) {
    toast.error("Passwords don't match!");
    return;
  }

  try {
    const response = await axios.post("/api/users/register", {
      email,
      password,
    });

    const responseData = response.data;

    if (responseData.error) {
      toast.error(responseData.error);
    } else {
      setIsAuthenticated(true);
      toast.success("Register Successful. Welcome!");
      navigate("/articles/page/1");
    }
  } catch (err) {
    console.error(err);
  }
}
