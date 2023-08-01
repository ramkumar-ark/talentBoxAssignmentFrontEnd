import axiosInstance from "./axiosSetup";
import { AxiosError, AxiosResponse } from "axios";

export interface LoginResponse {
	user: string;
	token: string;
}

export interface LoginError {
	error: string;
}

export interface LoginCredentials {
	userName: string;
	email: string;
	password: string;
}

const login = ({
	userName,
	email,
	password,
}: LoginCredentials): Promise<LoginResponse> =>
	new Promise<LoginResponse>((resolve, reject) => {
		const reqObj = { userName, email, password };
		axiosInstance
			.post("/signin", reqObj)
			.then((res: AxiosResponse<LoginResponse>) => {
				const { user, token } = res.data;
				resolve({ user, token });
			})
			.catch((error: AxiosError<LoginError>) =>
				reject(error.response!.data.error)
			);
	});

export default login;
