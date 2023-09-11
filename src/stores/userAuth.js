import { defineStore } from "pinia";
import { apiAuth } from '../boot/axios'
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const token = ref(null);
    const expiresIn = ref(null);


    const register = async (email, password) => {
        try {
            const res = await apiAuth.post("/auth/login",
                {
                    email: email,
                    password: password
                }
            );
            token.value = res.data.token;
            expiresIn.value = res.data.expiresIn;
            sessionStorage.setItem('user', "que miras wacho?")
            setTime();
        } catch (error) {
            if (error.response) {
                throw error.response.data
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log(error.message)
            }

        }

    };


    const access = async (email, password) => {
        try {
            const res = await apiAuth.post("/auth/login",
                {
                    email: email,
                    password: password
                }
            );
            token.value = res.data.token;
            expiresIn.value = res.data.expiresIn;
            sessionStorage.setItem('user', "que miras wacho?")
            setTime();
        } catch (error) {
            if (error.response) {
                throw error.response.data
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log(error.message)
            }

        }

    };

    const logout = async () => {
        try {
            await apiAuth.get('/auth/logout')
        } catch (error) {
            console.log(error)
        }
        finally {
            resetStore();
            sessionStorage.removeItem('user');
        }
    }
    const setTime = () => {
        setTimeout(() => {
            refreshToken();
        }, expiresIn.value * 1000 - 6000)
    };
    const refreshToken = async () => {
        console.log("RefreshToken")
        try {
            const res = await apiAuth.get("/auth/refresh");
            token.value = res.data.token;
            expiresIn.value = res.data.expiresIn
            sessionStorage.setItem('user', "que miras wacho?")
            setTime();
        } catch (error) {
            console.log(error)
        }
    };

    const resetStore = () => {
        token.value = null;
        expiresIn.value = null;
    };


    return {
        token, expiresIn, refreshToken, access, logout
    }



})