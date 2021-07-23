import logo from './assets/images/logo.png';
import './App.scss';
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import Books from './Components/Books/Books';
import Information from './Components/Information/Information';

function App() {
  return (
    <div className="App">
      <Header/> 
      <Search/>
      <Books/>
      <Information/>
    </div>
  );
}

export default App;
