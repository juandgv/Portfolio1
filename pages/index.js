import Head from 'next/head'
import Main from './components/Main'
import Image from 'next/image'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Email from './components/Email'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Juan David Gil Valencia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/> 
      <Main></Main>
      <Projects></Projects>  
      <About></About>
      <Skills></Skills>
      <Contact></Contact>



    </div>
  )
}
