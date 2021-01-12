export default function Select(props) {
  const {
    className,
    options,
    onChange
  } = props

  return (
    <select onChange={(e) => onChange(e.target.value)}
      className={`focus:outline-none pr-4 ${className}`}
    >
      {options.map((opt) => 
        <option key={opt.value} value={opt.value}>{opt.text}</option>
      )}
    </select>
  )  
}