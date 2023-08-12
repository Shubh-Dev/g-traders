import './App.css';
import TopBar from './components/TopBar';
// import Hero from './components/Hero';
import Product from './components/Product';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      {/* <Hero /> */}
      <Product />
    </div>
  );
}

export default App;
