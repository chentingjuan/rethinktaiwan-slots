import logo from './logo.svg';
import './App.css';

function App() {
  return pug`
    div.App
      header.App-header
        img.App-logo(src=logo alt="logo")
        p Edit and save to reload.
  `
}

export default App;
