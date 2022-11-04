import './App.css';
import Home from './components/Home';
import Info from './components/Info';
import Footer from './components/Footer';
// import Devs from './components/Devs';
// import Como from './components/subpages/como';
// import FAQ from './components/subpages/FAQ';
// import Rumo from './components/subpages/rumo';


function App() {
  return (
    <div className="App">
      <Home />
      <Info />
              {/* <Como />
              <Rumo />
              <FAQ />
            <Devs /> */}
      <Footer />
    </div>
  );
}

export default App;
