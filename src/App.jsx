import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer"; // Footer'ı import ettik

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />

        <div className="flex justify-center items-center text-center my-8">
  <div className="text-center">
    <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">You can reach me via email:</p>
    <p>seher0.0emir@gmail.com</p>
    {/* GIF */}
    <div className="flex justify-center mt-4">
      <img src="/kız.gif" alt="animated gif" className="w-60 md:w-80 lg:w-96" />
    </div>
  </div>
</div>

        {/* Footer */}
        <Footer />  {/* Footer'ı burada kullanıyoruz */}
      </div>
    </BrowserRouter>
  );
}

export default App;
