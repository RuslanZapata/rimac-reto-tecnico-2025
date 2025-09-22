import {create} from "zustand"

interface FormData {
  typeDocument: string;
  documentNumber: string;
  phone: string;
  PrivacyPolicy: boolean;
  CommercialCommunicationsPolicy: boolean;
}

export interface SelectedPlan {
  name?:        string;
  price?:      number;
  description?: string[];
  age?:        number;
  user?:       string;
}

type Store = {
  user: FormData | null;
  plan: SelectedPlan | null;
  addUser: (user: FormData) => void;
  addPlan: (plan: SelectedPlan) => void;
  removeUser: () => void;
  removePlan: () => void;
};

export const useStore = create<Store>((set) => ({
  user: null,
  plan: null,
  addUser: (user) => set({ user }),
  addPlan: (plan) => set({ plan }),
  removeUser: () => set(() => ({ user: null })),
  removePlan: () => set(() => ({ plan: null })),
}))
