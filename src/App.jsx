import React from 'react';
import { DarkModeProvider } from './components/DarkModeContext';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import PopularAreas from './sections/PopularAreas';
import Properties from './sections/properties';
import Services from './sections/Services';
import Clients from './sections/Clients';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <DarkModeProvider>
        {/* Toastify Container */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" // Dynamic theme can be passed here if required
        />
        <Header />
        <Hero />
        <About />
        <PopularAreas />
        <Properties />
        <Services />
        <Clients />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
};

export default App;
