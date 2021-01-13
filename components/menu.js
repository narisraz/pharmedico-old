import Button from '../components/button'

export default function Menu(props) {
  return (
    <div className="w-8/12 py-4 absolute top-0 flex justify-between text-white">
      <Button link className="font-semibold">
        Articles
      </Button>
      <div className="flex space-x-4">
        <Button link className="font-semibold">
          S'identifier
        </Button>
        <Button className="px-6 py-1 font-semibold border-white border-2 rounded-md transition ease-in-out 600 hover:bg-white hover:text-gray-600">
          S'identifier
        </Button>
      </div>
    </div>
  )
}