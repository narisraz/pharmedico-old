import Button from "./button";

export default function Footer(props) {
  return (
    <footer className="bg-gray-200 flex">
      <section className="flex py-10 w-1/3 bg-green-600 text-white">
        <div className="mx-auto">
          <div className="text-4xl">
            Logo
          </div>
          <div className="mb-4 text-3xl">
            Pharmedico
          </div>
          <ul className="mb-4 text-base font-medium">
            <li>032 63 498 64</li>
            <li>contact@pharmedico.com</li>
            <li>Sabotsy Namehana</li>
            <li>Antananarivo</li>
          </ul>
          <div className="mb-4 flex space-x-4">
            <Button icon>
              <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/></svg>
            </Button>
            <Button icon>
              <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"/></svg>
            </Button>
          </div>
          <div className="text-base font-medium leading-tight">
            © {(new Date().getFullYear())} pharmedico.com <br/>
            Tous droits réservés
          </div>
        </div>
      </section>
      <section className="p-10">Section 2</section>
    </footer>
  )
}