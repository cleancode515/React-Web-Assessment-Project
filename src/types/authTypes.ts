export enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}
export interface AccessToken {
  token: string;
  expires: Date;
}
export interface RefreshToken {
  token: string;
  expires: Date;
}
export interface Tokens {
  access: AccessToken;
  refresh: RefreshToken;
}
export interface LoginCredentials {
  email: string;
  password: string;
}
