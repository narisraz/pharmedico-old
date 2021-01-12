export default function Input(props) {
  const {
    className,
    placeholder,
    size,
    value,
    width,
    setValue
  } = props

  return (
    <input 
      className={`focus:outline-none text-gray-500 ${className}`}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      size={size}
      width={width}
    />
  );
}