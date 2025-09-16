import { create } from "zustand";
import { User } from "@/types/user";

interface AuthStore {
    user: null | User;
    isAuthenticated: boolean;
    setUser: (user: User) => void;
    clearIsAuthenticated: () => void;

}

export const useAuthStore = create<AuthStore>()((set) => {
    return {
        user: null,
        isAuthenticated: false,
        setUser: (user) => set(() => ({ user, isAuthenticated: true })),
        clearIsAuthenticated: () => 
        set(() => ({user: null, isAuthenticated: false})),
    }
});