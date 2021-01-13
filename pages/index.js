import Head from 'next/head'

import BasicLayout from '../components/basic-layout'
import CategoryList from '../components/category-list'
import Header from '../components/header'

export default function Home() {
  return (
    <BasicLayout>
      <Head>
        <title>Pharmedico</title>
      </Head>

      <Header />

      <main className="w-8/12 my-8 mx-auto">

        <div className="mb-4 font-bold text-2xl text-center text-gray-600">
          Les médecins et pharmacies d'Antananarivo
        </div>
        <CategoryList />
        
      </main>
    </BasicLayout>
  )
}
