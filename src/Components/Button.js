
const Button = ({ id, className, type, text, icon, onClick }) => {

  return (
    <button
        id={id}
        className={className}
        type={type}
        onClick={onClick}
    >
        {icon && icon}
        {text}
    </button>
  )
}

export default Button