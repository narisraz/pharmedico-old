import Menu from './menu'
import SearchForm from './search-form'

export default function Header() {
  return (
    <div className="h-screen max-h-screen-md bg-hero-pattern">
      <div className="w-8/12 mx-auto h-full flex flex-col justify-center items-center">
        <Menu />
        <div className="mb-8 text-6xl font-extrabold text-white">
          Logo
        </div>
        <SearchForm className="w-full shadow-md" />
      </div>  
    </div>
  )
}
