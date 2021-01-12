export default function Button(props) {
  const {
    className,
    submit,
    onClick
  } = props

  return (
    <button
      className={`focus:outline-none px-4 ${className}`}
      onClick={onClick}
      type={`${submit ? "submit" : "button"}`}
    >
      {props.children}
    </button>
  )
}