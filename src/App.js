import "./App.css";

import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Qualifications from "./components/Qualifications/Qualifications";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

// import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        {/* <Testimonials /> */}
      </main>
    </>
  );
}

export default App;
