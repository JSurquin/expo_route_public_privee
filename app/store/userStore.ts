import { create } from "zustand";

const useUserStore = create((set) => ({
  user: null,
  setUser: (user: any) => set({ user }),
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));

export default useUserStore;
