import type { NextPage } from 'next'
import Head from 'next/head'
import Posts from '../components/Posts'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Testimonials Grid Section</title>
        <meta name='description' content="Frontend Mentor Testimonials grid section challenge hub" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <Posts />
    </>
  )
}

export default Home
