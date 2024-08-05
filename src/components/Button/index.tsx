import { FC, ReactNode } from "react"
import { ButtonColor } from "../../@types/Button"

interface IButton {
  id: string
  width: number
  height: number
  children: ReactNode
  color?: `${ButtonColor}`
  onClick: () => void
}

const Button: FC<IButton> = ({
  id,
  width,
  height,
  children,
  color = ButtonColor.WHITE,
}) => {
  const renderColor = () => {
    const colors: Record<ButtonColor, string> = {
      [ButtonColor.WHITE]: "bg-white hover:bg-slate-100",
      [ButtonColor.ORANGE]: "bg-orange-300 hover:bg-orange-500",
    }
    return colors[color]
  }
  return (
    <button
      id={id}
      className={`${renderColor()} text-2xl font-semibold p-2 w-[48px] h-[48px] rounded-full`}
    >
      {children}
    </button>
  )
}

export default Button
