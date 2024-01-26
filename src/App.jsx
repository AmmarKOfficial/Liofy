import {About, Header, Footer, Skills, Testimonials, Work} from "./containers"
import {Navbar} from "./Components"
import "./App.scss"
const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App