
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import ContactUS from './Components/ContactUs/ContactUS';
import Subscribe from './Components/Subscribe/Subscribe';


function App() {
  return (
    <>
      <div className=" min-h-screen flex flex-col">
        <NavBar />
        <Subscribe />
        <ContactUS />
        <Footer />
      </div>
    </>
  );
}

export default App;
