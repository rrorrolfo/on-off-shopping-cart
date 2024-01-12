import "./button.sass"

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = ({ children = "Button", onClick, ...props }: IButtonProps) => {
  return (
    <button
      role="button"
      type="button"
      aria-label="add-button"
      className="add-button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
