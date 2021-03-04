import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Typical from 'react-typical'
import Education from "../components/Education"
import Project from "../components/Project"
import Work from '../components/Work'
import Skill from '../components/Skill'
import Ach from '../components/Achiev'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Header/>
      <Education/>
      <Work/>
      <Project/>
      <Skill/>
      <Ach/>
    

  
     
    {/* main */}
    {/* footer */}
    </div>
  )
}
