export interface UserDto {
    id: string;
    username: string;
    token: string
}

export interface UserLoginResponse {
    user: User;
    token: string;
    message: string;
}

export interface UserLoginRequest {
    username: string;
    password: string;
}

export interface User {
    id: string;
    username: string;
    name: string;
}