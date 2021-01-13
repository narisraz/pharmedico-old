export default function Card(props) {
  const {
    children,
    className,
    media
  } = props

  return (
    <div className={`relative rounded-md cursor-pointer ${className}`}>
      <img className="rounded-md hover:shadow-2xl object-cover h-48 w-full" src={media} />
      <div className="w-full py-2 rounded-b-md absolute bottom-0 text-center text-white font-semibold bg-gradient-to-b from-transparent to-black">
        {children}
      </div>
    </div>
  )
}