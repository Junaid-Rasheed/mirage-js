
import {Todo} from './components/Todo'
import './App.css';
import MirageServer from './Mirage/Mirage'

MirageServer();

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
