import { Button } from "../ui/button"

export const SuccessMessage = () => {
  return (
    <section className="w-full md:w-[380px] h-fit mt-20 md:mt-0">
      <div className="space-y-6">
        <img className="mx-auto" src="/src/assets/icon-complete.svg" alt="sucess mark icon" />
        <div className="text-center">
          <h2 className="text-3xl tracking-wider font-semibold uppercase text-neutral-very-dark-violet mb-4">Thank You!</h2>
          <p className="font-semibold text-neutral-dark-grayish-violet font-mono">We've added your card details</p>
        </div>
        <Button className="w-full bg-neutral-very-dark-violet text-white p-6 font-semibold text-lg">Continue</Button>
      </div>
    </section>
  )
}