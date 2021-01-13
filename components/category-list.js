import Card from '../components/card'

export default function CategoryList(props) {
  return (
    <div className="flex justify-evenly">
      <Card className="w-2/5" media="https://c.pxhere.com/images/15/63/d0925cccb66cae46d72f5c839d51-1445997.jpg!d">
        Médecins
      </Card>
      <Card className="w-2/5" media="https://c.pxhere.com/images/2b/64/7c28d83a550a28c3e171782c21ca-1446751.jpg!d">
        Pharmacies
      </Card>
    </div>
  )
}