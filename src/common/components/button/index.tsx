import "./button.sass"

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  name?: string
  className?: string
}

const Button = ({
  children = "Button",
  onClick,
  name = "",
  className = "",
  ...props
}: IButtonProps) => {
  return (
    <button
      role="button"
      type="button"
      aria-label={name}
      className={className}
      onClick={onClick}
      name={name}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
