import Button from '../components/button'
import Card from '../components/card'

export default function Top(props) {
  const {
    title,
    subTitle,
    elements
  } = props

  return (
    <>
      <div className="font-bold text-2xl text-center text-gray-600">
        {title}
      </div>
      <div className="mb-4 font-semibold text-lg text-center text-gray-500">
        {subTitle}
      </div>
      <div className="flex justify-evenly">
        {elements.map((element, index) => 
          <Card className="w-40 leading-tight" media={element.media} key={index}>
            <div className="font-bold text-lg leading-none">{element.name}</div>
            <div className="text-sm">{element.info}</div>
          </Card>
        )}
      </div>
      <div className="my-4 flex justify-center">
        <Button link className="text-green-600 text-lg font-bold">
          Voir plus
        </Button>
      </div>
    </>
  )
}