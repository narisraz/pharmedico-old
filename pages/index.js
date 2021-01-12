import Head from 'next/head'

import SearchForm from '../components/search-form'

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchForm className="shadow-md" />
      
      <main className="py-6 px-10">
      </main>

      <footer></footer>
    </div>
  )
}
