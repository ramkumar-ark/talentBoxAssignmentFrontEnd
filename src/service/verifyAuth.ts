import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "./axiosSetup";

interface VerifyResponse {
	status: boolean;
}

interface VerifyError {
	error: string;
}

const verifyAuth = (token: string): Promise<string | void> =>
	new Promise((resolve, reject) => {
		axiosInstance
			.post("/verify/secret", { token })
			.then((res: AxiosResponse<VerifyResponse>) => {
				res.data.status ? resolve() : reject();
			})
			.catch((error: AxiosError<VerifyError>) => {
				reject(error.response?.data?.error);
			});
	});

export default verifyAuth;
