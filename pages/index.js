import Head from 'next/head'
import Main from './components/Main'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'



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
