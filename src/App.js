import './App.css';
import Header from './Component/Header/Header';
import Question from './Component/Question.js/Question';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header />
      <Shop />
      <Question />
    </div>
  );
}

export default App;
