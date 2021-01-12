export default function FormLabel(props) {
  const {
    className
  } = props

  return (
    <label
      className={`pr-2 font-semibold text-gray-600 text-lg ${className}`}
    >
      {props.value}
    </label>
  )
}