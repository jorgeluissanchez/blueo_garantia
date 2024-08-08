"use client"
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type State = {
  step: number;
  maxSteps: number;
  complete: boolean;
  personalInfo: {
    document: string;
    name: string;
    phone: string;
  };
  productInfo: {
    purchasingHeadquarters: string;
    productCategory: string;
    invoiceNumber: string;
    product: string;
  };
  failInfo: {
    failType: string;
    failDescription: string;
  };
};

type Actions = {
  nextStep: () => void;
  prevStep: () => void;
  setPersonalInfo: (info: Partial<State['personalInfo']>) => void;
  setProductInfo: (info: Partial<State['productInfo']>) => void;
  setFailInfo: (info: Partial<State['failInfo']>) => void;
  resetForm: () => void;
};

export const initialState: State = {
  step: 1,
  maxSteps: 3,
  complete: false,
  personalInfo: {
    document: '',
    name: '',
    phone: '',
  },
  productInfo: {
    purchasingHeadquarters: '',
    productCategory: '',
    invoiceNumber: '',
    product: '',
  },
  failInfo: {
    failType: '',
    failDescription: '',
  },
};

export const useFormStore = create<State & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      setPersonalInfo: (info) =>
        set((state) => ({
          personalInfo: { ...state.personalInfo, ...info },
        })),
      setProductInfo: (info) =>
        set((state) => ({
          productInfo: { ...state.productInfo, ...info },
        })),
      setFailInfo: (info) =>
        set((state) => ({
          failInfo: { ...state.failInfo, ...info },
        })),
      resetForm: () =>
        set(() => ({
          ...initialState,
        })),
      nextStep: () =>
        set((state) => {
          console.log(state)
          if (state.step < state.maxSteps) {
            return { step: state.step + 1 };
          } else {
            return { complete: true };
          }
        }),
      prevStep: () =>
        set((state) => {
          if (state.step > 1) {
            const resetStepData: any = {};
            console.log(state);
            return { ...resetStepData, step: state.step - 1 };
          } else {
            return state;
          }
        }),
    }),
    {
      name: 'multi-step-form', 
    }
  )
);
