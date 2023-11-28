
import './App.css'
import { Common } from './components/Common'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Section1 } from './components/Section1'
import { Section2 } from './components/Section2'
import Img1 from "./images/section1Image.svg"
import Img2 from "./images/section2Image.svg"
import Img3 from "./images/section3Image.svg"

const heading1 = "Create an invite-only place where you belong";
const heading2 = "Where hanging out is easy";
const heading3 = "From few to a fandom";

const para1 = "Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
const para2 = "Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call."
const para3 = "Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."

function App() {

  return (
    <>
      <Navbar/>

      <Section1/>

      <Common image={Img1} heading={heading1} para={para1} flag="left"/>

      <Common image={Img2} heading={heading2} para={para2} flag="right"/>

      <Common image={Img3} heading={heading3} para={para3} flag="left"/>

      <Section2/>

      <Footer/>
    </>
  )
}

export default App
