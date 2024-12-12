import { CreditCardForm } from "./CreditCardForm"
import { SuccessMessage } from "./SuccessMessage"
import { useCreditCardStore } from "@/context/CreditCardState"

export const MainContainer = () => {
  const { isSubmitted } = useCreditCardStore()

  return (
    <main className="w-full md:w-[70%] max-h-screen flex items-center justify-center px-4 md:p-0">
      {isSubmitted ? <SuccessMessage /> : <CreditCardForm />}
    </main>
  )
} 