import axios, { AxiosError, AxiosResponse, Method } from "axios";

import response from "../../src/mocks/response.json";

interface ApiRequestConfig {
  method: Method;
  url: string;
  data?: any;
}

export const fetchData = async (
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setData: React.Dispatch<React.SetStateAction<any>>
): Promise<void> => {
  setLoading(true);
  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    const resp = await axios.get(`${apiUrl}/api/cessions/registries`);
    setData(resp.data);
  } catch (error) {
    console.error("Ошибка при запросе к API:", error);
    setData(response);
  } finally {
    setLoading(false);
  }
};

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const apiRequest = async <T>({
  method,
  url,
  data,
}: ApiRequestConfig): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await apiClient({ method, url, data });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    console.error(`Ошибка при запросе к API: ${method} ${url}`, err.message);
    throw err;
  }
};

export const fetchProcessedRegistry = (id: number): Promise<any> => {
  return apiRequest<any>({
    method: "GET",
    url: `/api/cessions/registries/${id}/export`,
  });
};

export const deleteRegistry = (id: number): Promise<void> => {
  return apiRequest<void>({
    method: "DELETE",
    url: `/api/cessions/registries/${id}`,
  });
};
