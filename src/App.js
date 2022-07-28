import './App.css';
import Footer from './components/Footer/Index';
import Header from './components/header/Index';
import Main from './views/Main'

function App() {
  return (
    <div className="App">

      <Header/>
      <Main />

      <Footer/>
    </div>
  );
}

export default App;
