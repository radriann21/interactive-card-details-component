import { create } from "zustand";

type State = {
  cardHolderName: string
  cardNumber: string
  monthNumber: string
  yearNumber: string
  CVC: string
}

type Action = {
  updateCardHolderName: (cardHolderName: State['cardHolderName']) => void
}

export const creditCardStore = create<State & Action>((set) => ({
  cardHolderName: 'Jane Appleseed',
  cardNumber: '0000 0000 0000 0000',
  monthNumber: '00',
  yearNumber: '00',
  CVC: '000',
  updateCardHolderName: (cardHolderName) => set(() => ({ cardHolderName: cardHolderName })),
  updateCardNumber: (cardNumber: string) => set(() => ({ cardNumber: cardNumber })),
}))

