import { Button } from "../ui/button"

export const CreditCardForm = () => {
  return (
    <form className="w-full md:w-[380px] h-fit space-y-8">
      <section>
        <label className="uppercase text-neutral-very-dark-violet font-semibold font-mono tracking-wider">Cardholder Name</label>
        <input className="mt-1 w-full p-2 border-[1px] outline-none border-neutral-dark-grayish-violet rounded-md active:border-neutral-very-dark-violet focus:border-neutral-very-dark-violet" type="text" placeholder="e.g. Jane Appleseed" />
      </section>
      <section>
        <label className="uppercase text-neutral-very-dark-violet font-semibold font-mono tracking-wider">Card Number</label>
        <input className="mt-1 w-full p-2 border-[1px] outline-none border-neutral-dark-grayish-violet rounded-md active:border-neutral-very-dark-violet focus:border-neutral-very-dark-violet" type="text" placeholder="e.g. 1234 5678 9123 0000" />
      </section>
      <section className="w-full flex items-center justify-between space-x-4">
        <div className="w-[50%]">
          <label className="uppercase text-neutral-very-dark-violet font-semibold font-mono tracking-wider">Exp. Date (MM/YY)</label>
          <div className="w-[100%] flex items-center space-x-2">
            <input className="mt-1 w-full p-2 border-[1px] outline-none border-neutral-dark-grayish-violet rounded-md active:border-neutral-very-dark-violet focus:border-neutral-very-dark-violet" type="text" placeholder="MM" />
            <input className="mt-1 w-full p-2 border-[1px] outline-none border-neutral-dark-grayish-violet rounded-md active:border-neutral-very-dark-violet focus:border-neutral-very-dark-violet" type="text" placeholder="YY" />
          </div>
        </div>
        <div className="w-[50%]">
          <label className="uppercase text-neutral-very-dark-violet font-semibold font-mono tracking-wider">CVC</label>
          <input className="mt-1 w-full p-2 border-[1px] outline-none border-neutral-dark-grayish-violet rounded-md active:border-neutral-very-dark-violet focus:border-neutral-very-dark-violet" type="text" placeholder="e.g. 123" />
        </div>
      </section>
      <Button className="w-full text-white bg-neutral-very-dark-violet h-12 font-semibold text-lg transition-colors duration-300 hover:bg-indigo-900">Confirm</Button>
    </form>
  )
}