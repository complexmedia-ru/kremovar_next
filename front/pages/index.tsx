import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
    <h1 className='text-3xl' >Кремоварня NEXT</h1>
    </div>
    </Layout>
  )
}
