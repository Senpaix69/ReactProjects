import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
