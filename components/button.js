export default function Button(props) {
  const {
    className,
    link,
    submit,
    onClick
  } = props

  return (
    <button
      className={`transition ease-in-out 600 focus:outline-none ${link ? "border-transparent border-b-2 hover:border-green-600" : "px-4"} ${className}`}
      onClick={onClick}
      type={`${submit ? "submit" : "button"}`}
    >
      {props.children}
    </button>
  )
}