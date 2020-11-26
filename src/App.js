import logo from './logo.svg';
import './App.css';
import ToggleButton from './components/ToggleButton'

const Checked = () => <>🤪</>;
const UnChecked = () => <>🙂</>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Toggle Button</p>
        <ToggleButton />
        <br/>
        <p>Disabled Toggle Button</p>
        <ToggleButton onChange={state => console.log(state)} disabled={true} />
        <br/>
        <p>Toggle Button - Default Value TRUE</p>
        <ToggleButton onChange={state => console.log(state)} defaultChecked={true} />
        <br/>
        <p>Toggle Button - Icons Change</p>
        <ToggleButton onChange={state => console.log(state)} icons={{checked: <Checked />, unchecked: <UnChecked />}} />
      </header>
    </div>
  );
}

export default App;
