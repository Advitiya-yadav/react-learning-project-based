import logo from './logo.svg';
import './App.css';
import Header from './myComponents/header';
import Footer from './myComponents/footer';
import Todo from './myComponents/todo';
import Todos from './myComponents/todos';
function App() {
  return (
    <>
      <Header/>
      <Todos/>
      <Footer/>
    </>
  );
}

export default App;
