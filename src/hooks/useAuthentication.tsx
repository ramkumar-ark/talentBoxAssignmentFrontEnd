import React, {useState, createContext, Context, useEffect} from "react";
import login, {LoginCredentials, LoginResponse} from "../service/login";
import verifyAuth from "../service/verifyAuth";

interface ContextValue{
    error: string | null;
    userName?: string | null;
    signin?: (params: LoginCredentials) => void;
    logOut?: () => void;    
}

// eslint-disable-next-line react-refresh/only-export-components
const AuthCtx: Context<ContextValue> = createContext<ContextValue>({error: null});

const validateSession = async(token: string): Promise<boolean> => {
    try {
        await verifyAuth(token);
        return true;    
    } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        return false;
    }
};

const initUser = async(): Promise<string | null> => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("userName");
    if ((token && user) && await validateSession(token)) return user;
    return null;
};

const useAuthentication = () => {
    const [user, setUser] = useState<null | string>(null);
    const [ error, setError ] = useState<null | string>(null);
    const signin: (params: LoginCredentials) => void = ({userName, email, password}) => {
        login({userName, email, password})
            .then(({user, token}: LoginResponse): void => {
                localStorage.setItem('userName', user);
                localStorage.setItem('token', token);
                setUser(user);
                setError(null);
            })
            .catch((error: string) => {
                setError(error);
                setUser(null);
            });
    }

    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        setUser(null);
        setError(null);
    };

    useEffect(() => {
        initUser()
            .then((res)=> setUser(res))
            .catch(() => null);
    }, []);

    return {
        AuthCtx,
        AuthProvider: ({children}: {children: React.ReactNode}) => (
            <AuthCtx.Provider value={{error, userName: user, signin, logOut}}>
                {children}
            </AuthCtx.Provider>
        )
    };
};

export default useAuthentication;
