import { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

export class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
