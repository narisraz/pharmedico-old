import { Children } from "react"
import Button from "./button"

export default function HighlighetArticle(props) {
  const {
    avatar,
    children,
    date,
    media,
    title,
    user
  } = props

  return (
    <div className="flex space-x-6">
      <img className="w-1/3 rounded-md object-cover" src={media} />
      <div>
        <div className="mb-4 flex space-x-2">
          <img className="rounded-full w-6 mr-2 cursor-pointer" src={avatar} />
          <Button link className="text-gray-600 font-semibold text-md">
            {user}
          </Button>
        </div>
        <Button link className="font-bold text-2xl">
          {title}
        </Button>
        <div className="text-gray-600 text-sm mb-4">
          {date}
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}