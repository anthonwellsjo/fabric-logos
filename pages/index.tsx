import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href={"/friggly/"}>Friggly</Link>
      <br></br>
      <Link href={"/h5/"}>@H&5</Link>
      <br></br>
    </div>
  )
}

export default Home
