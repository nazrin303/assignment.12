import About from "./components/About"
import Achievement from "./components/Achievement"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"

import Header from "./components/Header"
import Home from "./components/Home"

function App() {
  

  return (
  <>
       
       <Header />
       

       <div id="home">
       <Home/>
       </div>
       <div id="About" className="my-5">
       <About/>
       </div>

       <div id="Career" className="my-4">
        <Achievement/>
       </div>

       <div id="Gallery" className="my-4">
        <Gallery />      
         </div>
         <div id="Contact" className="my-5">
          <Contact/>
         </div>

         

  </>
      
    
  )
}

export default App
