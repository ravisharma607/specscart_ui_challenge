import Awards from "./Components/Awards/Awards";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Review from "./Components/Review/Review";
import './index.css'

function App() {
  return (
    <div className="App">
      <>
      <Navbar />
      <Awards />
      <Review />
      <Footer />
      </>
    </div>
  );
}

export default App;
