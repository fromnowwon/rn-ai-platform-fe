import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  isLoggedIn: false,
  token: null,
  setToken: (token) => set({ token, isLoggedIn: !!token }),
  logout: () => set({ token: null, isLoggedIn: false }),
}));
