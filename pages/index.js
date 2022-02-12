import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <nav className="py-4 px-12 border-b border-red-300">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/profile">
            <a className="ml-4">Profile</a>
          </Link>
          <Link href="/hidden">
            <a className="ml-4">Protected</a>
          </Link>
        </nav>
      </div>

      <h1 className="text-3xl font-bold">Welcome to demo app</h1>
    </div>
  )
}
