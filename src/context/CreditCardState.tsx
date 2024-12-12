import { create } from "zustand";
import type { CreditCardState, FormErrors } from "@/types/types";

export const useCreditCardStore = create<CreditCardState>((set) => ({
  cardHolderName: 'Jane Appleseed',
  cardNumber: '1234 5678 9123 0000',
  expireMonth: '00',
  expireYear: '00',
  CVC: '000',
  errors: {},
  isValid: false,
  isSubmitted: false,

  updateField: (field: string, value: string) => {
    set((state) => ({
      ...state,
      [field]: value,
      errors: { ...state.errors, [field]: undefined }
    }))
  },

  handleNumericInput: (field: string, evt: React.ChangeEvent<HTMLInputElement>) => {
    const numberPattern = /^\d*$/;
    const { value } = evt.target

    if (numberPattern.test(value)) {
      set((state) => ({
        ...state,
        [field]: value,
        errors: { ...state.errors, [field]: undefined }
      }))
    }
  },

  validateForm: () => {
    const newErrors: FormErrors = {};

    set((state) => {
      if (!state.cardHolderName.trim()) {
        newErrors.cardHolderName = "The name is required.";
      }

      if (!state.cardNumber) {
        newErrors.cardNumber = "Card number is required.";
      } else {
        const cleanedCardNumber = state.cardNumber.replace(/\s/g, '');
        if (cleanedCardNumber.length !== 16) {
          newErrors.cardNumber = "Wrong format, the number has letter or is to short.";
        }
      }

      if (!state.expireMonth) {
        newErrors.expireMonth = "Required.";
      } else if (parseInt(state.expireMonth) < 1 || parseInt(state.expireMonth) > 12) {
        newErrors.expireMonth = "Invalid Month.";
      }

      const currentYear = new Date().getFullYear() % 100;
      if (!state.expireYear) {
        newErrors.expireYear = "Required.";
      } else if (parseInt(state.expireYear) < currentYear) {
        newErrors.expireYear = "Invalid year.";
      }

      if (!state.CVC) {
        newErrors.CVC = "CVC is required.";
      } else if (state.CVC.length !== 3) {
        newErrors.CVC = "CVC most have 3 digits.";
      }

      return {
        ...state,
        errors: newErrors,
        isValid: Object.keys(newErrors).length === 0
      }
    });

    return Object.keys(newErrors).length === 0;
  },

  setErrors: (errors: FormErrors) => set({ errors }),
  setIsSubmitted: (value: boolean) => set({ isSubmitted: value })
}));
