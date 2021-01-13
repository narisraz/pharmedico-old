import Head from 'next/head'

import BasicLayout from '../components/basic-layout'
import Header from '../components/header'

export default function Home() {
  return (
    <BasicLayout>
      <Head>
        <title>Pharmedico</title>
      </Head>

      <Header />
    </BasicLayout>
  )
}
