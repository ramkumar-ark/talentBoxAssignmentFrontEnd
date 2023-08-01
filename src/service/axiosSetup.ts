import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
	baseURL: "http://localhost:3001/api",
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
const axiosInstance: AxiosInstance = axios.create(axiosConfig);

export default axiosInstance;
