export type FormErrors = {
  cardHolderName?: string;
  cardNumber?: string;
  expireMonth?: string;
  expireYear?: string;
  CVC?: string;
}

export type CreditCardState = {
  cardHolderName: string;
  cardNumber: string;
  expireMonth: string;
  expireYear: string;
  CVC: string;
  errors: FormErrors;
  isValid: boolean;
  isSubmitted: boolean;
  updateField: (field: string, value: string) => void;
  handleNumericInput: (field: string, evt: React.ChangeEvent<HTMLInputElement>) => void;
  validateForm: () => boolean;
  setErrors: (errors: FormErrors) => void;
  setIsSubmitted: (value: boolean) => void;
}