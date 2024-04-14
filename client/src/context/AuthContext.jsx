import { createContext, useCallback, useEffect, useState } from "react";
import {postRequest} from "../utils/services";
import { baseUrl } from "../utils/services";
export const AuthContext = createContext();


export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [registerError, setRegisterError] = useState(null);
    const [isRegisterLoading, setIsRegisterLoading] = useState(false);
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });
    const [loginError, setLoginError] = useState(null);
    const [isLoginLoading, setIsLoginLoading] = useState(false);
    const [registerInfo, setRegisterInfo] = useState({
        name: "",
        email: "",
        password: ""
    });

    const updateLoginInfo = useCallback((info) => {
        setLoginInfo(info);
    }, []);

    const loginUser = useCallback( async(e) => {
        e.preventDefault();
        setIsLoginLoading(true);
        setLoginError(null);

        const response = await postRequest(`${baseUrl}/users/login`, JSON.stringify(loginInfo));

        setIsLoginLoading(false);
        if (response.error) return setLoginError(response);

        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
    }, [loginInfo])

    const updateRegisterInfo = useCallback((info) => {
        setRegisterInfo(info);
    }, []);

    const registerUser = useCallback( async(e) => {
        e.preventDefault();
        setIsRegisterLoading(true);
        setRegisterError(null);

        const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo));

        setIsRegisterLoading(false);
        if (response.error) return setRegisterError(response);

        localStorage.setItem("User", JSON.stringify(response));
        setUser(response);
    }, [registerInfo]);

    const logoutUser = useCallback(() => {
        localStorage.removeItem("User");
        setUser(null);
    }, []);



    // const [formError, setFormError] = useState(null);
    // const [formInfo, setFormInfo] = useState({
    //     file: "",
    //     story: ""
    // });

    // const updateFormInfo = useCallback((info) => {
    //     setFormInfo(info);
    // }, []);


    // const postForm = useCallback( async(e) => {
    //     e.preventDefault();
    //     setFormError(null);

    //     const response = await postRequest(`${baseUrl}/users/poststory`, JSON.stringify(formInfo));

    //     if (response.error) return setFormError(response);

    //     localStorage.setItem("Form", JSON.stringify(response));
    // }, [formInfo]);

    return <AuthContext.Provider value = {{user, 
                registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading,
                loginInfo, updateLoginInfo, loginError, loginUser, isLoginLoading,
                logoutUser,
                // postForm, updateFormInfo, formInfo, formError
                }} >
        {children}
    </AuthContext.Provider>
};
