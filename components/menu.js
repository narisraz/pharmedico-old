import Button from '../components/button'

export default function Menu(props) {
  return (
    <div className="w-8/12 py-4 absolute top-0 flex justify-between text-white">
      <Button link className="font-bold">
        Articles
      </Button>
      <div className="flex space-x-4">
        <Button link className="font-bold">
          S'identifier
        </Button>
        <Button className="px-6 py-1 font-bold border-white border-2 rounded-md hover:bg-white hover:text-gray-600">
          S'identifier
        </Button>
      </div>
    </div>
  )
}