import { Component } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import type { CardListState } from './types/global';

const API_URL = 'https://rickandmortyapi.com/api/character';

export class App extends Component<unknown, CardListState> {
  state: CardListState = {
    cards: [],
    isLoading: true,
    loadError: false,
  };

  componentDidMount(): void {
    try {
      setTimeout(async () => {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw new Error(`Response status: ${response.status}`);

        const data = await response.json();
        this.setState({
          cards: data.results,
          isLoading: false,
        });
      }, 1000);
    } catch (error: unknown) {
      if (error instanceof Error)
        console.error(`Ошибка загрузки: ${error.message}`);
      this.setState({
        isLoading: false,
        loadError: true,
      });
    }
  }

  throwError = () => {
    console.error('Ошибка при загрузке данных');
    this.setState({
      cards: [],
      loadError: true,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Main
          cards={this.state.cards}
          throwError={this.throwError}
          isLoading={this.state.isLoading}
          loadError={this.state.loadError}
        />
      </>
    );
  }
}

export default App;
