import { create } from "zustand";

interface UseAuthStoreProps {
  isAuth: boolean;
  user?: {
    phone: string;
    fullName: string;
  };
  toggleAuth: (isAuth: boolean) => void;
  setUser: (user?: { phone: string; fullName: string }) => void;
}

export const useAuthStore = create<UseAuthStoreProps>((set) => ({
  isAuth: false,
  toggleAuth: (isAuth) => set((state) => ({ ...state, isAuth })),
  setUser: (user) => set((state) => ({ ...state, user })),
}));
