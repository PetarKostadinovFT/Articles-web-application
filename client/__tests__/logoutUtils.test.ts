import axios, { AxiosResponse } from 'axios';
import { logout } from '../src/utils/logoutUtils';

jest.mock('axios');

describe('logout', () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeAll(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    consoleErrorSpy.mockRestore();
  });

  it('should logout successfully', async () => {
    const setIsAuthenticatedMock = jest.fn();
    
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce({} as AxiosResponse);
    
    const result = await logout(setIsAuthenticatedMock);
    expect(setIsAuthenticatedMock).toHaveBeenCalledWith(false);
    expect(result).toBe(true);
  });

  it('should handle logout failure', async () => {
    const setIsAuthenticatedMock = jest.fn();
    
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockRejectedValueOnce(new Error('Logout failed'));
    
    const result = await logout(setIsAuthenticatedMock);
    expect(setIsAuthenticatedMock).not.toHaveBeenCalled();
    expect(result).toBe(false);
  });
});
