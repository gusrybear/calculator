import { useState } from "react"
import "./App.css"
import Button from "./components/Button"
import { ButtonColor } from "./@types/Button"

function App() {
  const [result, setResult] = useState("0")

  const onClick = () => {
    if (result === "") setResult("1")
    else {
      const newValue = parseInt(result, 10) + 1
      setResult(newValue.toString())
    }
  }

  return (
    <section className="flex flex-col gap-y-4">
      <h1 className="text-3xl text-yellow-500 font-bold">Calculator</h1>
      <div className="w-full max-w-[300px] h-[500px] bg-slate-200 rounded-3xl flex flex-col justify-end gap-y-10 p-4 mx-auto">
        <p className="text-6xl text-yellow-500 text-right font-light">
          {result}
        </p>

        <div id="input-calculator" className="grid grid-cols-4 gap-x-5 gap-y-4">
          <div>
            <Button
              id={"7"}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
            >
              {7}
            </Button>
          </div>

          <div>
            <Button
              id={"8"}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
            >
              {8}
            </Button>
          </div>

          <div>
            <Button
              id={"9"}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
            >
              {9}
            </Button>
          </div>

          <div>
            <Button
              id={"divide"}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
              color={ButtonColor.ORANGE}
            >
              /
            </Button>
          </div>

          <div>
            <Button
              id={"4"}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
            >
              {4}
            </Button>
          </div>

          <div>
            <Button
              id={"5"}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
            >
              {5}
            </Button>
          </div>

          <div>
            <Button
              id={"6"}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
            >
              {6}
            </Button>
          </div>

          <div>
            <Button
              id={"multiply"}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
              color={ButtonColor.ORANGE}
            >
              x
            </Button>
          </div>

          <div>
            <Button
              id={"1"}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
            >
              {1}
            </Button>
          </div>

          <div>
            <Button
              id={"2"}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
            >
              {2}
            </Button>
          </div>

          <div>
            <Button
              id={"3"}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
            >
              {3}
            </Button>
          </div>

          <div>
            <Button
              id={"minus"}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
              color={ButtonColor.ORANGE}
            >
              -
            </Button>
          </div>

          <div>
            <Button
              id={","}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
            >
              ,
            </Button>
          </div>

          <div>
            <Button
              id={"8"}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
            >
              {0}
            </Button>
          </div>

          <div>
            <Button
              id={"="}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
            >
              =
            </Button>
          </div>

          <div>
            <Button
              id={"+"}
              width={0}
              height={0}
              onClick={function (): void {
                throw new Error("Function not implemented.")
              }}
              color={ButtonColor.ORANGE}
            >
              +
            </Button>
          </div>
        </div>
      </div>

      <button className="bg-green-200 p-2 rounded-lg" onClick={onClick}>
        increase
      </button>
    </section>
  )
}

export default App
