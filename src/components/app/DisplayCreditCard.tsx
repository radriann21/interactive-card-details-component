import { useCreditCardStore } from "@/context/CreditCardState"

export const DisplayCreditCard = () => {

  const { cardHolderName, expireMonth, expireYear, cardNumber } = useCreditCardStore()

  return (
    <aside className="w-full md:w-[30%] bg-bg-mobile md:bg-bg-desktop bg-cover bg-no-repeat h-[280px] md:h-screen relative flex flex-col-reverse md:flex-col items-center justify-center md:gap-12">
      <div className="w-[280px] h-[180px] md:w-[420px] md:h-[220px] bg-card-front bg-no-repeat bg-cover rounded-md p-4 md:p-6 translate-y-12 -translate-x-4 md:translate-x-20 md:translate-y-0 z-50 md:z-0">
        <img className="w-16 md:w-24" src="/assets/card-logo.svg" alt="logo" />
        <div className="flex flex-col space-y-4 mt-6 md:mt-14 h-fit">
          <p className="text-white text-lg md:text-2xl text-left tracking-[0.2em] md:tracking-[8px]">{cardNumber}</p>
          <div className="mt-2 md:mt-8 w-full h-full flex items-center justify-between">
            <span className="uppercase text-white font-mono text-sm">{cardHolderName}</span>
            <span className="uppercase text-white font-mono text-sm">{expireMonth}/{expireYear}</span>
          </div>
        </div>
      </div>
      <div className="w-[280px] h-[180px] md:w-[420px] md:h-[220px] bg-card-back bg-no-repeat bg-cover rounded-md translate-x-4 translate-y-20 md:translate-x-48 md:translate-y-0"></div>
    </aside>
  )
}
