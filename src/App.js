
// import './App.css';
import AddItem from './components/AddItem';
import HookCounter from './components/HookCounter';
import NameInfo from './components/NameInfo';
import Counter from './Practise/Components/Counter';
import NumberArray from './Practise/Components/NumberArray';
import UserName from './Practise/Components/UserName';

function App() {
  return (
    <div className="App">
        <h1> React Hook </h1>
        <HookCounter/>
        <NameInfo/>
        <AddItem/>
        <Counter/>
        <UserName/>
        <NumberArray/>
    </div>
  );
}

export default App;
