// api service for authentication

import type { User } from "../types/User";

async function loginOrSignUp(user: User, method: string) {
    try {
        const authURL = "http://localhost:3000/auth";
        const requestOptions: RequestInit = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user),
            credentials: "include"
        };
        const response = await fetch(`${authURL} /${method}`, requestOptions);
        const responseObj = await response.json();

        if (response.status === 500) {
            console.log(responseObj.error);
            return { error: "Internal server error" };
        }

        if (!response.ok) {
            console.log(responseObj.error);
            return { error: responseObj.error || "Unknown error" };
        }
        return responseObj;

    } catch (error) {
        console.error(`Error login player: ${error}`);
        return { error: "Network error" };
    }
}

export async function login(user: User) {
    return await loginOrSignUp(user, "login");
}

export async function signup(user: User) {
    return await loginOrSignUp(user, "signup");
}

