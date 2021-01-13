import Head from 'next/head'

export default function BasicLayout(props) {
  const {
    children
  } = props

  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
      </Head>

      {children}
    </div>
  )
}