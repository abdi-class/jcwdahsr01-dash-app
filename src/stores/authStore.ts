import { create } from "zustand";

interface IAuthStore {
    name: string;
    email: string;
    age?: number;
    gender: "MALE" | "FEMALE";
    onLogin: (data: any) => void;
    onLogOut: () => void;
}

const useAuthStore = create<IAuthStore>((set) => ({
    name: "",
    email: "",
    gender: "MALE",
    onLogin: (data: any) => {
        set(() => (data))
    },
    onLogOut: () => {
        set(() => ({
            name: "",
            email: "",
            gender: "MALE",
        }))
    }
}))

export default useAuthStore