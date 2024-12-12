import { useCreditCardStore } from "@/context/CreditCardState"
import { Button } from "../ui/button"
import type { FormErrors } from "@/types/types"

export const CreditCardForm = () => {
  const {
    updateField,
    handleNumericInput,
    validateForm,
    setIsSubmitted,
    errors,
  } = useCreditCardStore()

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '')
    const groups = cleaned.match(/.{1,4}/g)
    return groups ? groups.join(' ') : cleaned
  }

  const handleCardNumberInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value.replace(/\s/g, '')
    if (/^\d*$/.test(value) && value.length <= 16) {
      updateField('cardNumber', formatCardNumber(value))
    }
  }

  const handleNameInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    if (/^[a-zA-Z\s]*$/.test(value)) {
      updateField('cardHolderName', value)
    }
  }

  const handleMonthInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value
    if (/^\d*$/.test(value)) {
      const month = parseInt(value)
      if (month <= 12 || value.length <= 2) {
        handleNumericInput('expireMonth', evt)
      }
    }
  }

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault()

    if (validateForm()) {
      setIsSubmitted(true)
    }
  }

  const getInputClassName = (fieldName: keyof FormErrors) => {
    const baseClasses = "mt-1 w-full p-2 border-[1px] outline-none rounded-md"
    return `${baseClasses} ${errors[fieldName]
      ? 'border-primary-custom-red'
      : 'border-neutral-dark-grayish-violet active:border-neutral-very-dark-violet focus:border-neutral-very-dark-violet'
      }`
  }

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-[380px] h-fit space-y-4 md:space-y-8 mt-20 md:mt-0">
      <section>
        <label className="uppercase text-neutral-very-dark-violet font-bold font-mono tracking-wider text-sm md:text-base">
          Cardholder Name
        </label>
        <input
          onChange={handleNameInput}
          className={getInputClassName('cardHolderName')}
          type="text"
          placeholder="e.g. Jane Appleseed"
        />
        {errors.cardHolderName && (
          <p className="text-primary-custom-red text-sm mt-1">{errors.cardHolderName}</p>
        )}
      </section>

      <section>
        <label className="uppercase text-neutral-very-dark-violet font-bold font-mono tracking-wider text-sm md:text-base">
          Card Number
        </label>
        <input
          onChange={handleCardNumberInput}
          className={getInputClassName('cardNumber')}
          type="text"
          maxLength={19}
          placeholder="e.g. 1234 5678 9123 0000"
        />
        {errors.cardNumber && (
          <p className="text-primary-custom-red text-sm mt-1">{errors.cardNumber}</p>
        )}
      </section>

      <section className="w-full flex items-center justify-between space-x-2 md:space-x-4">
        <div className="w-[50%]">
          <label className="uppercase text-neutral-very-dark-violet font-bold font-mono tracking-wider text-sm md:text-base">
            Exp. Date (MM/YY)
          </label>
          <div className="w-[100%] flex items-center space-x-2">
            <div className="w-full">
              <input
                onChange={handleMonthInput}
                className={getInputClassName('expireMonth')}
                type="text"
                maxLength={2}
                placeholder="MM"
              />
              {errors.expireMonth && (
                <p className="text-primary-custom-red text-sm mt-1">{errors.expireMonth}</p>
              )}
            </div>
            <div className="w-full">
              <input
                onChange={(evt) => handleNumericInput('expireYear', evt)}
                className={getInputClassName('expireYear')}
                type="text"
                maxLength={2}
                placeholder="YY"
              />
              {errors.expireYear && (
                <p className="text-primary-custom-red text-sm mt-1">{errors.expireYear}</p>
              )}
            </div>
          </div>
        </div>

        <div className="w-[50%]">
          <label className="uppercase text-neutral-very-dark-violet font-bold font-mono tracking-wider text-sm md:text-base">
            CVC
          </label>
          <input
            onChange={(evt) => handleNumericInput('CVC', evt)}
            className={getInputClassName('CVC')}
            type="text"
            maxLength={3}
            placeholder="e.g. 123"
          />
          {errors.CVC && (
            <p className="text-primary-custom-red text-sm mt-1">{errors.CVC}</p>
          )}
        </div>
      </section>

      <Button
        type="submit"
        className="w-full text-white bg-neutral-very-dark-violet h-12 font-semibold text-lg transition-colors duration-300 hover:bg-indigo-900"
      >
        Confirmar
      </Button>
    </form>
  )
}