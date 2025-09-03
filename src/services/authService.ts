// api service for authentication

import type { User } from "../types/User";

async function loginOrSignUp(userData: User, method: string) {
    try {
        const authURL = "http://localhost:3000/auth";
        const requestOptions = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        };
        const response = await fetch(`${authURL} /${method}`, requestOptions);
        const responseObj = await response.json();
        if (responseObj.error) {
            console.log("authentication denied");
            return;
        }
        return responseObj;

    } catch (error) {
        console.error(`Error login player: ${error}`);
        return;
    }
}

export async function login(userData: User) {
    return await loginOrSignUp(userData, "login");
}

export async function signup(userData: User) {
    return await loginOrSignUp(userData, "signup");
}

