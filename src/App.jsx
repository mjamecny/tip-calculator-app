import { useState } from "react"

import InputRow from "./InputRow"

const percentages = ["5", "10", "15", "25", "50"]

export default function App() {
  const [bill, setBill] = useState("")
  const [percentage, setPercentage] = useState("5")
  const [customPercentage, setCustomPercentage] = useState("")
  const [numPeople, setNumPeople] = useState("")
  const [tip, setTip] = useState("0.00")
  const [total, setTotal] = useState("0.00")
  const [error, setError] = useState(false)

  const onOptionChange = (e) => {
    setPercentage(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setError(false)

    if (Number(numPeople) < 1) {
      setError(true)
      return
    }

    const amountPerPerson = Number(bill) / Number(numPeople)
    const tipPerPerson =
      amountPerPerson *
      (Number(!customPercentage ? percentage : customPercentage) / 100)
    setTip(tipPerPerson.toFixed(2))
    const totalPerPerson = amountPerPerson + tipPerPerson
    setTotal(totalPerPerson.toFixed(2))
  }

  function handleReset() {
    setBill("")
    setPercentage("5")
    setCustomPercentage("")
    setNumPeople("")
    setTip("0.00")
    setTotal("0.00")
    setError(false)
  }

  return (
    <div className="bg-lightGrayishCyan flex flex-col gap-3.2 justify-end items-center h-screen md:justify-center">
      <img src="logo.svg" alt="logo" />
      <div className="flex flex-col md:flex-row gap-2.4 md:gap-3.2 bg-white p-2.4 rounded-2xl max-w-3xl">
        <form
          className="flex flex-col gap-2.4 md:flex-1"
          onSubmit={handleSubmit}
        >
          <InputRow
            label="Bill"
            icon="icon-dollar.svg"
            placeholder="0"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
          />
          <div className="flex flex-col gap-0.4">
            <label className="text-darkGrayishCyan" htmlFor="">
              Select Tip %
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-1.6">
              {percentages.map((p, i) => (
                <label key={i} className="container">
                  <input
                    type="radio"
                    value={p}
                    onChange={onOptionChange}
                    checked={percentage === p}
                  />
                  <span className="checkmark">{p}%</span>
                </label>
              ))}

              <input
                className="text-2 text-center bg-veryLightGrayishCyan rounded-md placeholder:text-darkGrayishCyan outline-none focus:border-strongCyan focus:border-2"
                type="text"
                placeholder="Custom"
                value={customPercentage}
                onChange={(e) => setCustomPercentage(e.target.value)}
              />
            </div>
          </div>

          <InputRow
            label="Number of People"
            icon="icon-person.svg"
            placeholder="0"
            value={numPeople}
            err={error}
            errMsg="Can't be zero"
            onChange={(e) => setNumPeople(e.target.value)}
          />
          <button className="hidden"></button>
        </form>
        <div className="flex flex-col gap-2.4 bg-veryDarkCyan px-2.4 md:px-3.2 pb-2.4 md:pb-3.2 pt-3.2 md:pt-4.8 rounded-2xl md:flex-1">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-veryLightGrayishCyan text-1.4">Tip Amount</p>
              <p className="text-darkGrayishCyan text-1.2">/ person</p>
            </div>
            <p className="text-3 text-strongCyan">${tip}</p>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-veryLightGrayishCyan text-1.4">Total</p>
              <p className="text-darkGrayishCyan text-1.2">/ person</p>
            </div>
            <p className="text-3 text-strongCyan">${total}</p>
          </div>
          <button
            className="text-2 uppercase bg-strongCyan hover:bg-[#7fe6d8] text-veryDarkCyan transition-colors duration-300 rounded-md py-1.2 cursor-pointer mt-auto"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
