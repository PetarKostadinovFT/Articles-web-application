import { handleRegister } from "../src/utils/registerUtils"; 
import axios from "axios";
import { toast } from "react-hot-toast";

jest.mock("axios");
jest.mock("react-hot-toast", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

describe("handleRegister Function", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should successfully register a user", async () => {
    const data = {
      email: "test@example.com",
      password: "password",
      repass: "password",
    };

    const responseMock = {
      data: { success: true },
    };

    (axios.post as jest.Mock).mockResolvedValueOnce(responseMock);

    const setIsAuthenticatedMock = jest.fn();
    const navigateMock = jest.fn();

    await handleRegister(data, setIsAuthenticatedMock, navigateMock);

    expect(axios.post).toHaveBeenCalledWith("/api/users/register", {
      email: "test@example.com",
      password: "password",
    });
    expect(toast.success).toHaveBeenCalledWith("Register Successful. Welcome!");
    expect(setIsAuthenticatedMock).toHaveBeenCalledWith(true);
    expect(navigateMock).toHaveBeenCalledWith("/articles/page/1");
  });

  it("should display an error message when registration fails", async () => {
    const data = {
      email: "test@example.com",
      password: "password",
      repass: "password",
    };

    const responseMock = {
      data: { error: "Registration failed" },
    };

    (axios.post as jest.Mock).mockResolvedValueOnce(responseMock);

    const setIsAuthenticatedMock = jest.fn();
    const navigateMock = jest.fn();

    await handleRegister(data, setIsAuthenticatedMock, navigateMock);

    expect(axios.post).toHaveBeenCalledWith("/api/users/register", {
      email: "test@example.com",
      password: "password",
    });
    expect(toast.error).toHaveBeenCalledWith("Registration failed");
    expect(setIsAuthenticatedMock).not.toHaveBeenCalled();
    expect(navigateMock).not.toHaveBeenCalled();
  });

  it("should display an error when passwords don't match", async () => {
    const data = {
      email: "test@example.com",
      password: "password",
      repass: "differentPassword",
    };

    const setIsAuthenticatedMock = jest.fn();
    const navigateMock = jest.fn();

    await handleRegister(data, setIsAuthenticatedMock, navigateMock);

    expect(axios.post).not.toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalledWith("Passwords don't match!");
    expect(setIsAuthenticatedMock).not.toHaveBeenCalled();
    expect(navigateMock).not.toHaveBeenCalled();
  });

  it("should handle unexpected errors", async () => {
    const data = {
      email: "test@example.com",
      password: "password",
      repass: "password",
    };

    (axios.post as jest.Mock).mockRejectedValueOnce("An unexpected error occurred");
    const consoleErrorSpy = jest.spyOn(console, "error");
    const setIsAuthenticatedMock = jest.fn();
    const navigateMock = jest.fn();

    await handleRegister(data, setIsAuthenticatedMock, navigateMock);

    expect(axios.post).toHaveBeenCalledWith("/api/users/register", {
      email: "test@example.com",
      password: "password",
    });
    expect(consoleErrorSpy).toHaveBeenCalledWith("An unexpected error occurred");
    expect(setIsAuthenticatedMock).not.toHaveBeenCalled();
    expect(navigateMock).not.toHaveBeenCalled();
  });
});
