import AboutMe from "../sections/AboutMe"
import ContactMe from "../sections/ContactMe"
import Hero from "../sections/Hero"
import Portfolio from "../sections/Portfolio"
import Skills from "../sections/Skills"


const Home = () => {
 
  return (
    <main className="  space-y-8">
       <Hero />
       <AboutMe/>
       <Portfolio/>
       <Skills/>
       <ContactMe/>
    </main>
  )
}

export default Home